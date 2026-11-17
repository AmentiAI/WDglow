"use server";

import { readFileSync } from "node:fs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { field, isEmail } from "@/lib/form";
import { safeInternalPath } from "@/lib/utils";

export async function createLead(formData: FormData) {
  const redirectTo = safeInternalPath(field(formData, "redirectTo"), "/contact");
  if (field(formData, "companyWebsite")) redirect("/thank-you");

  const name = field(formData, "name");
  const email = field(formData, "email").toLowerCase();
  const phone = field(formData, "phone");
  const cityOther = field(formData, "cityOther");
  let city = field(formData, "city");
  let state = field(formData, "state");

  if (city.includes("|")) {
    const [cityName, stateCode] = city.split("|");
    city = cityName;
    state = stateCode || state;
  }
  if (city.startsWith("Other")) city = cityOther;

  const fail = (code: string) => redirect(`${redirectTo}?error=${code}#quote`);

  if (name.length < 2 || !isEmail(email) || phone.replace(/\D/g, "").length < 7 || city.length < 2 || !state) {
    fail("missing");
  }

  const services = formData.getAll("services").map(String).filter(Boolean);
  const lead = {
    name,
    email,
    phone,
    street: field(formData, "street"),
    city,
    state,
    zip: field(formData, "zip"),
    propertyType: field(formData, "propertyType") || "Home",
    services: services.join(", ") || "Not specified",
    timeline: field(formData, "timeline"),
    message: field(formData, "message").slice(0, 4000),
    source: `website:${redirectTo}`.slice(0, 160),
  };

  const delivered = await notifyDiscord(lead);

  try {
    const recent = await prisma.lead.count({
      where: { email, createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) } },
    });
    if (recent >= 3) fail("limit");
    await prisma.lead.create({ data: lead });
  } catch (error) {
    if (isRedirect(error)) throw error;
    if (!delivered) fail("save");
  }

  redirect(`/thank-you?area=${encodeURIComponent(city)}`);
}

function isRedirect(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "digest" in error &&
    String((error as { digest?: string }).digest).startsWith("NEXT_REDIRECT")
  );
}

async function notifyDiscord(lead: {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  propertyType: string;
  services: string;
  timeline: string;
  message: string;
  source: string;
}) {
  const url = discordWebhookUrl();
  if (!url) {
    console.error("Discord webhook URL is not set");
    return false;
  }

  const address = [lead.street, `${lead.city}, ${lead.state}`, lead.zip].filter(Boolean).join("\n");
  const description = [
    `**${lead.name}**`,
    lead.email,
    lead.phone,
    address,
    `Property: ${lead.propertyType}`,
    `Services: ${lead.services}`,
    lead.timeline ? `Timing: ${lead.timeline}` : "",
    lead.message ? `\n${lead.message.slice(0, 1500)}` : "",
  ]
    .filter(Boolean)
    .join("\n")
    .slice(0, 4000);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "WD Glow",
        allowed_mentions: { parse: [] },
        embeds: [
          {
            title: "New quote request",
            color: 0xff2b2b,
            description,
            footer: { text: lead.source },
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
    if (!response.ok) {
      console.error("Discord webhook failed", response.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Discord webhook failed", error instanceof Error ? error.message : "request error");
    return false;
  }
}

function discordWebhookUrl() {
  const fromEnv = process.env["DISCORD_WEBHOOK_URL"]?.trim();
  if (fromEnv) return fromEnv;
  try {
    const line = readFileSync(".env", "utf8")
      .split(/\n/)
      .find((entry) => entry.startsWith("DISCORD_WEBHOOK_URL="));
    return line?.slice("DISCORD_WEBHOOK_URL=".length).trim() || "";
  } catch {
    return "";
  }
}
