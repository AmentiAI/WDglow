"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checked, field } from "@/lib/form";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";
import { saveUpload } from "@/lib/uploads";
import { slugify } from "@/lib/utils";

function refreshPublic() {
  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/guides");
  revalidatePath("/about");
  revalidatePath("/contact");
}

export async function saveSettings(formData: FormData) {
  await requireSession();
  const data = {
    businessName: field(formData, "businessName") || "WDGLOW",
    ownerName: field(formData, "ownerName"),
    phone: field(formData, "phone"),
    email: field(formData, "email") || "wdglow@gmail.com",
    street: field(formData, "street"),
    city: field(formData, "city") || "Westerly",
    state: field(formData, "state") || "RI",
    zip: field(formData, "zip"),
    hours: field(formData, "hours"),
    instagram: field(formData, "instagram"),
    facebook: field(formData, "facebook"),
    aboutNote: field(formData, "aboutNote").slice(0, 2000),
  };
  await prisma.settings.upsert({
    where: { id: "default" },
    update: data,
    create: { id: "default", ...data },
  });
  refreshPublic();
  redirect("/admin/settings?saved=1");
}

export async function saveTestimonial(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  const data = {
    name: field(formData, "name"),
    city: field(formData, "city"),
    state: field(formData, "state") || "RI",
    quote: field(formData, "quote"),
    rating: Math.min(5, Math.max(1, Number(field(formData, "rating")) || 5)),
    service: field(formData, "service"),
    featured: checked(formData, "featured"),
    published: checked(formData, "published"),
  };
  if (!data.name || !data.quote || !data.city) redirect("/admin/testimonials?error=1");
  if (id) await prisma.testimonial.update({ where: { id }, data });
  else await prisma.testimonial.create({ data });
  refreshPublic();
  redirect("/admin/testimonials?saved=1");
}

export async function deleteTestimonial(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  if (id) await prisma.testimonial.delete({ where: { id } });
  refreshPublic();
  redirect("/admin/testimonials?saved=1");
}

export async function saveGalleryItem(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  let imageUrl = field(formData, "imageUrl");
  const image = formData.get("image");
  if (image instanceof File && image.size > 0) imageUrl = await saveUpload(image);
  const data = {
    title: field(formData, "title"),
    location: field(formData, "location"),
    category: field(formData, "category") || "Roofline",
    imageUrl,
    alt: field(formData, "alt") || field(formData, "title"),
    featured: checked(formData, "featured"),
    published: checked(formData, "published"),
    sortOrder: Number(field(formData, "sortOrder")) || 0,
  };
  if (!data.title || !data.imageUrl) redirect("/admin/gallery?error=1");
  if (id) await prisma.galleryItem.update({ where: { id }, data });
  else await prisma.galleryItem.create({ data });
  refreshPublic();
  redirect("/admin/gallery?saved=1");
}

export async function deleteGalleryItem(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  if (id) await prisma.galleryItem.delete({ where: { id } });
  refreshPublic();
  redirect("/admin/gallery?saved=1");
}

export async function savePost(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  const title = field(formData, "title");
  const slug = slugify(field(formData, "slug") || title);
  const published = checked(formData, "published");
  if (!title || !slug) redirect(id ? `/admin/guides/${id}?error=1` : "/admin/guides/new?error=1");

  const existing = await prisma.post.findUnique({ where: { slug } });
  if (existing && existing.id !== id) redirect(`${id ? `/admin/guides/${id}` : "/admin/guides/new"}?error=slug`);

  const data = {
    title,
    slug,
    excerpt: field(formData, "excerpt"),
    content: field(formData, "content"),
    metaTitle: field(formData, "metaTitle"),
    metaDescription: field(formData, "metaDescription"),
    published,
    publishedAt: published ? existing?.publishedAt ?? new Date() : null,
  };

  const post = id
    ? await prisma.post.update({ where: { id }, data })
    : await prisma.post.create({ data });
  refreshPublic();
  revalidatePath(`/guides/${post.slug}`);
  redirect(`/admin/guides/${post.id}?saved=1`);
}

export async function deletePost(formData: FormData) {
  await requireSession();
  const id = field(formData, "id");
  if (id) await prisma.post.delete({ where: { id } });
  refreshPublic();
  redirect("/admin/guides?saved=1");
}
