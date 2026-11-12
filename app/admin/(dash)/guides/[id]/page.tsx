import { notFound } from "next/navigation";
import { DeleteGuide, GuideForm } from "@/components/admin/GuideForm";
import { AdminHeader, Saved } from "@/components/admin/Shell";
import { prisma } from "@/lib/prisma";

export default async function EditGuidePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) notFound();
  return (
    <div className="max-w-3xl">
      <AdminHeader title="Edit guide" />
      <Saved show={query.saved === "1"} />
      <GuideForm post={post} error={query.error} />
      <DeleteGuide id={post.id} />
    </div>
  );
}
