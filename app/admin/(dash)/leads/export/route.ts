import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

function cell(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export async function GET() {
  const session = await getSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  const header = ["Name", "Email", "Phone", "Street", "City", "State", "ZIP", "Property", "Services", "Timeline", "Status", "Source", "Message", "Created"];
  const lines = leads.map((lead) =>
    [
      lead.name,
      lead.email,
      lead.phone,
      lead.street,
      lead.city,
      lead.state,
      lead.zip,
      lead.propertyType,
      lead.services,
      lead.timeline,
      lead.status,
      lead.source,
      lead.message,
      lead.createdAt.toISOString(),
    ]
      .map(cell)
      .join(","),
  );
  const csv = [header.join(","), ...lines].join("\n");
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=wdglow-leads.csv",
    },
  });
}
