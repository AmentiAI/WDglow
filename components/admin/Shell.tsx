import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { logout } from "@/lib/actions/auth";

export function AdminShell({
  children,
  name,
  mustChangePassword,
}: {
  children: React.ReactNode;
  name: string;
  mustChangePassword: boolean;
}) {
  return (
    <div className="min-h-screen bg-[#f4f3f0] text-ink md:grid md:grid-cols-[248px_1fr]">
      <aside className="no-print sticky top-0 z-30 flex flex-col bg-black text-white md:h-screen">
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:block md:px-5 md:py-6">
          <Link href="/admin" aria-label="WD Glow admin home" className="block">
            <img src="/brand/logo.jpg" alt="WD Glow" className="h-11 w-auto md:h-16" />
          </Link>
          <div className="flex items-center gap-3 md:hidden">
            <Link href="/" target="_blank" className="text-xs text-white/60">
              View site
            </Link>
            <form action={logout}>
              <button className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white" type="submit">
                Sign out
              </button>
            </form>
          </div>
        </div>
        <AdminNav />
        <div className="mt-auto hidden border-t border-white/10 px-5 py-5 md:block">
          <p className="truncate text-xs text-white/45">{name}</p>
          <div className="mt-3 flex items-center justify-between">
            <Link href="/" target="_blank" className="text-sm text-white/70 hover:text-white">
              View site
            </Link>
            <form action={logout}>
              <button className="text-sm font-semibold text-[#e4c36a] hover:text-[#f0d48a]" type="submit">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </aside>
      <main className="min-w-0 px-4 py-6 md:px-10 md:py-10">
        <div className="mx-auto max-w-6xl">
          {mustChangePassword ? (
            <Link
              href="/admin/settings"
              className="no-print mb-6 flex items-center justify-between gap-3 rounded-xl border border-[#e4c36a] bg-[#fbf3dc] px-4 py-3 text-sm text-[#5a4614]"
            >
              <span>This admin password is still the temporary one. Change it before you share the login.</span>
              <span className="shrink-0 font-semibold">Change it</span>
            </Link>
          ) : null}
          {children}
        </div>
      </main>
    </div>
  );
}

export function AdminHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
      <h1 className="font-serif text-3xl tracking-tight md:text-4xl">{title}</h1>
      {action}
    </div>
  );
}

export function Saved({ show, text = "Saved." }: { show: boolean; text?: string }) {
  if (!show) return null;
  return (
    <p className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-900">{text}</p>
  );
}

const tones: Record<string, string> = {
  new: "bg-gold/20 text-ink",
  contacted: "bg-sky-100 text-sky-950",
  quoted: "bg-violet-100 text-violet-950",
  won: "bg-emerald-100 text-emerald-950",
  lost: "bg-sand text-mist",
  draft: "bg-sand text-ink",
  sent: "bg-sky-100 text-sky-950",
  accepted: "bg-emerald-100 text-emerald-950",
  declined: "bg-sand text-mist",
  scheduled: "bg-sky-100 text-sky-950",
  in_progress: "bg-gold/25 text-ink",
  installed: "bg-emerald-100 text-emerald-950",
  takedown_scheduled: "bg-violet-100 text-violet-950",
  complete: "bg-sand text-ink",
  cancelled: "bg-sand text-mist",
  unpaid: "bg-gold/25 text-ink",
  deposit: "bg-sky-100 text-sky-950",
  paid: "bg-emerald-100 text-emerald-950",
  refunded: "bg-sand text-mist",
};

export function Badge({ status }: { status: string }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${tones[status] ?? "bg-sand text-ink"}`}>
      {status.replaceAll("_", " ")}
    </span>
  );
}
