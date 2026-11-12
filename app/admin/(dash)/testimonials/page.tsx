import { AdminHeader, Saved } from "@/components/admin/Shell";
import { SubmitButton } from "@/components/site/SubmitButton";
import { deleteTestimonial, saveTestimonial } from "@/lib/actions/content";
import { prisma } from "@/lib/prisma";

export default async function TestimonialsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const params = await searchParams;
  const items = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <AdminHeader title="Testimonials" />
        <Saved show={params.saved === "1"} />
        {params.error ? <p className="mb-4 text-sm text-red-800">Name, town, and the quote are required.</p> : null}
        <form action={saveTestimonial} className="admin-card grid gap-3 p-5">
          <p className="text-sm text-mist">Publish a note only when the client agreed to be named.</p>
          <label className="grid gap-1 text-sm">
            Name
            <input className="field" name="name" required />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1 text-sm">
              Town
              <input className="field" name="city" required />
            </label>
            <label className="grid gap-1 text-sm">
              State
              <input className="field" name="state" defaultValue="RI" />
            </label>
          </div>
          <label className="grid gap-1 text-sm">
            Service
            <input className="field" name="service" />
          </label>
          <label className="grid gap-1 text-sm">
            Quote
            <textarea className="field min-h-28" name="quote" required />
          </label>
          <label className="grid gap-1 text-sm">
            Rating
            <input className="field" name="rating" type="number" min="1" max="5" defaultValue="5" />
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="published" /> Published
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="featured" /> Featured
          </label>
          <SubmitButton>Save testimonial</SubmitButton>
        </form>
      </div>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item.id} className="admin-card p-4 text-sm">
            <p className="font-medium">
              {item.name} · {item.city}, {item.state}
            </p>
            <p className="mt-2 leading-6">{item.quote}</p>
            <p className="mt-2 text-mist">{item.published ? "Published" : "Hidden"}</p>
            <form action={deleteTestimonial}>
              <input type="hidden" name="id" value={item.id} />
              <button className="mt-2 text-red-800" type="submit">
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
