import { prisma } from "@/lib/prisma";

export type PublicSettings = {
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  hours: string;
  instagram: string;
  facebook: string;
  aboutNote: string;
};

export const defaultSettings: PublicSettings = {
  businessName: "WDGLOW",
  ownerName: "",
  phone: "",
  email: "wdglow@gmail.com",
  street: "",
  city: "Westerly",
  state: "RI",
  zip: "02891",
  hours: "Monday–Sunday, 7:00am–6:00pm",
  instagram: "",
  facebook: "",
  aboutNote: "",
};

export async function getSettings(): Promise<PublicSettings> {
  try {
    const row = await prisma.settings.findUnique({ where: { id: "default" } });
    if (!row) return defaultSettings;
    return {
      businessName: row.businessName || defaultSettings.businessName,
      ownerName: row.ownerName,
      phone: row.phone,
      email: row.email || defaultSettings.email,
      street: row.street,
      city: row.city || defaultSettings.city,
      state: row.state || defaultSettings.state,
      zip: row.zip,
      hours: row.hours || defaultSettings.hours,
      instagram: row.instagram,
      facebook: row.facebook,
      aboutNote: row.aboutNote,
    };
  } catch {
    return defaultSettings;
  }
}
