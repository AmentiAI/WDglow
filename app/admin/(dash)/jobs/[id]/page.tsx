import { notFound } from "next/navigation";
import { JobFields } from "@/components/admin/Records";
import { Saved } from "@/components/admin/Shell";
import { SubmitButton } from "@/components/site/SubmitButton";
import { addNote, deleteJob, saveJob } from "@/lib/actions/crm";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export default async function JobPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const [job, customers] = await Promise.all([
    prisma.job.findUnique({ where: { id }, include: { notesLog: { orderBy: { createdAt: "desc" } } } }),
    prisma.customer.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true, city: true } }),
  ]);
  if (!job) notFound();
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <Saved show={query.saved === "1"} />
        {query.error ? <p className="mb-4 text-sm text-red-800">A city is required.</p> : null}
        <h1 className="mb-4 font-serif text-4xl">{job.title}</h1>
        <form action={saveJob} className="admin-card grid gap-4 p-5">
          <JobFields job={job} customers={customers} />
          <div className="flex flex-wrap gap-3">
            <SubmitButton>Save job</SubmitButton>
          </div>
        </form>
        <form action={deleteJob} className="mt-4">
          <input type="hidden" name="id" value={job.id} />
          <button className="text-sm text-red-800" type="submit">
            Delete job
          </button>
        </form>
      </div>
      <section className="admin-card h-fit p-5">
        <h2 className="font-serif text-2xl">Job notes</h2>
        <form action={addNote} className="mt-3 grid gap-2">
          <input type="hidden" name="jobId" value={job.id} />
          <input type="hidden" name="returnTo" value={`/admin/jobs/${job.id}?saved=1`} />
          <textarea className="field min-h-20" name="body" required />
          <SubmitButton>Add note</SubmitButton>
        </form>
        <ul className="mt-4 grid gap-3 text-sm">
          {job.notesLog.map((note) => (
            <li key={note.id}>
              <p>{note.body}</p>
              <p className="text-mist">
                {note.author} · {formatDate(note.createdAt)}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
