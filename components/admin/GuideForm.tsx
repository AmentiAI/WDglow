import { deletePost, savePost } from "@/lib/actions/content";
import { SubmitButton } from "@/components/site/SubmitButton";

export function GuideForm({
  post,
  error,
}: {
  post?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    metaTitle: string;
    metaDescription: string;
    published: boolean;
  };
  error?: string;
}) {
  return (
    <form action={savePost} className="admin-card grid gap-3 p-5">
      {post ? <input type="hidden" name="id" value={post.id} /> : null}
      {error === "slug" ? <p className="text-sm text-red-800">That address is already used.</p> : null}
      {error === "1" ? <p className="text-sm text-red-800">A title is required.</p> : null}
      <label className="grid gap-1 text-sm">
        Title
        <input className="field" name="title" defaultValue={post?.title} required />
      </label>
      <label className="grid gap-1 text-sm">
        URL slug
        <input className="field" name="slug" defaultValue={post?.slug} placeholder="Generated from the title if empty" />
      </label>
      <label className="grid gap-1 text-sm">
        Excerpt
        <textarea className="field min-h-20" name="excerpt" defaultValue={post?.excerpt} />
      </label>
      <label className="grid gap-1 text-sm">
        Meta title
        <input className="field" name="metaTitle" defaultValue={post?.metaTitle} />
      </label>
      <label className="grid gap-1 text-sm">
        Meta description
        <textarea className="field min-h-20" name="metaDescription" defaultValue={post?.metaDescription} />
      </label>
      <label className="grid gap-1 text-sm">
        Body
        <textarea className="field min-h-80 font-mono text-sm" name="content" defaultValue={post?.content} />
      </label>
      <p className="text-xs text-mist">Use blank lines between paragraphs. Start a line with ## for a heading, or - for a list.</p>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="published" defaultChecked={post?.published} /> Published
      </label>
      <div className="flex items-center gap-4">
        <SubmitButton>Save guide</SubmitButton>
      </div>
    </form>
  );
}

export function DeleteGuide({ id }: { id: string }) {
  return (
    <form action={deletePost} className="mt-4">
      <input type="hidden" name="id" value={id} />
      <button className="text-sm text-red-800" type="submit">
        Delete guide
      </button>
    </form>
  );
}
