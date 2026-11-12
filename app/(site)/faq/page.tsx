import type { Metadata } from "next";
import { FaqList, PageIntro } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { faqs } from "@/lib/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Christmas Light Installation FAQ",
  description:
    "Answers on booking, takedown, clips, color, quotes, historic houses, and service across Rhode Island and Connecticut.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <PageIntro
        eyebrow="FAQ"
        title="Straight answers before you send the form."
        lede="If your question is about a specific town, the town page is the better place. These are the ones that come up everywhere."
      />
      <div className="mt-10">
        <FaqList items={faqs} />
      </div>
    </div>
  );
}
