import { readFileSync } from "fs";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { articles } from "../lib/articles";

function loadEnv() {
  try {
    const text = readFileSync(".env", "utf8");
    for (const line of text.split(/\r?\n/)) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (!match) continue;
      const key = match[1].trim();
      if (!process.env[key]) process.env[key] = match[2].trim();
    }
  } catch {
    // Prisma CLI already injects the environment when seeding.
  }
}

loadEnv();

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL?.toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD before seeding.");
  }

  const existing = await prisma.admin.findUnique({ where: { email } });
  if (!existing) {
    await prisma.admin.create({
      data: {
        email,
        name: "WDGLOW Admin",
        passwordHash: await bcrypt.hash(password, 12),
        mustChangePassword: true,
      },
    });
  }

  await prisma.settings.upsert({
    where: { id: "default" },
    update: {},
    create: { id: "default" },
  });

  for (const article of articles) {
    await prisma.post.upsert({
      where: { slug: article.slug },
      update: {},
      create: {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        metaTitle: article.metaTitle,
        metaDescription: article.metaDescription,
        published: true,
        publishedAt: new Date("2026-11-01T12:00:00.000Z"),
      },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
