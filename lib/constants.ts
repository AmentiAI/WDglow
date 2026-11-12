export const LEAD_STATUSES = ["new", "contacted", "quoted", "won", "lost"] as const;
export const QUOTE_STATUSES = ["draft", "sent", "accepted", "declined"] as const;
export const JOB_STATUSES = [
  "scheduled",
  "in_progress",
  "installed",
  "takedown_scheduled",
  "complete",
  "cancelled",
] as const;
export const PAYMENT_STATUSES = ["unpaid", "deposit", "paid", "refunded"] as const;

export const PROPERTY_TYPES = [
  "Home",
  "Rental property",
  "Business",
  "HOA or condo association",
  "Municipality or nonprofit",
] as const;

export const TIMELINES = [
  "As soon as you can fit me in",
  "Before Thanksgiving",
  "Before December 1",
  "Before mid-December",
  "I am planning ahead for next season",
] as const;

export const GALLERY_CATEGORIES = [
  "Roofline",
  "Trees and landscape",
  "Commercial",
  "Entry and custom",
  "Estate",
] as const;

export type LineItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export function parseLineItems(value: unknown): LineItem[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as Record<string, unknown>;
      const description = String(row.description ?? "").trim();
      const quantity = Number(row.quantity);
      const unitPrice = Number(row.unitPrice);
      if (!description) return null;
      return {
        description,
        quantity: Number.isFinite(quantity) && quantity > 0 ? quantity : 1,
        unitPrice: Number.isFinite(unitPrice) ? Math.round(unitPrice) : 0,
      };
    })
    .filter((item): item is LineItem => Boolean(item));
}
