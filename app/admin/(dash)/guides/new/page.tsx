import { GuideForm } from "@/components/admin/GuideForm";
import { AdminHeader } from "@/components/admin/Shell";

export default async function NewGuidePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="max-w-3xl">
      <AdminHeader title="New guide" />
      <GuideForm error={params.error} />
    </div>
  );
}
