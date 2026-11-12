import { AdminHeader, Saved } from "@/components/admin/Shell";
import { SubmitButton } from "@/components/site/SubmitButton";
import { deleteGalleryItem, saveGalleryItem } from "@/lib/actions/content";
import { GALLERY_CATEGORIES } from "@/lib/constants";
import { prisma } from "@/lib/prisma";

export default async function AdminGalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const params = await searchParams;
  const items = await prisma.galleryItem.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <AdminHeader title="Gallery" />
        <Saved show={params.saved === "1"} />
        {params.error ? <p className="mb-4 text-sm text-red-800">A title and an image are required.</p> : null}
        <form action={saveGalleryItem} className="admin-card grid gap-3 p-5">
          <label className="grid gap-1 text-sm">
            Title
            <input className="field" name="title" required />
          </label>
          <label className="grid gap-1 text-sm">
            Location
            <input className="field" name="location" placeholder="Watch Hill, RI" />
          </label>
          <label className="grid gap-1 text-sm">
            Category
            <select className="field" name="category">
              {GALLERY_CATEGORIES.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            Image file
            <input className="field" type="file" name="image" accept="image/jpeg,image/png,image/webp" />
          </label>
          <label className="grid gap-1 text-sm">
            Or image URL
            <input className="field" name="imageUrl" placeholder="https://" />
          </label>
          <label className="grid gap-1 text-sm">
            Alt text
            <input className="field" name="alt" />
          </label>
          <label className="grid gap-1 text-sm">
            Sort order
            <input className="field" name="sortOrder" defaultValue="0" />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="published" /> Publish on the site
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="featured" /> Feature it
          </label>
          <SubmitButton>Add photo</SubmitButton>
        </form>
      </div>
      <ul className="grid gap-4">
        {items.map((item) => (
          <li key={item.id} className="admin-card grid gap-3 p-4 sm:grid-cols-[140px_1fr]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.imageUrl} alt="" className="h-28 w-full object-cover" />
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-mist">
                {item.location} · {item.category} · {item.published ? "Published" : "Hidden"}
              </p>
              <form action={deleteGalleryItem} className="mt-2">
                <input type="hidden" name="id" value={item.id} />
                <button className="text-sm text-red-800" type="submit">
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
        {!items.length ? <li className="text-sm text-mist">No photos yet. Only published photos appear on the public gallery.</li> : null}
      </ul>
    </div>
  );
}
