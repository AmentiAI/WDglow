import Link from "next/link";
import { AdminHeader, Saved } from "@/components/admin/Shell";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export default async function AdminGuidesPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const params = await searchParams;
  const posts = await prisma.post.findMany({ orderBy: { updatedAt: "desc" } });
  return (
    <div>
      <AdminHeader
        title="Guides"
        action={
          <Link href="/admin/guides/new" className="rounded-full bg-ink px-4 py-2 text-sm text-cream">
            New guide
          </Link>
        }
      />
      <Saved show={params.saved === "1"} />
      <ul className="admin-card divide-y divide-line">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <Link href={`/admin/guides/${post.id}`}>
              <span className="font-medium">{post.title}</span>
              <span className="block text-sm text-mist">
                /guides/{post.slug} · {post.published ? "Published" : "Draft"} · {formatDate(post.updatedAt)}
              </span>
            </Link>
          </li>
        ))}
        {!posts.length ? <li className="px-4 py-6 text-sm text-mist">No guides yet.</li> : null}
      </ul>
    </div>
  );
}
