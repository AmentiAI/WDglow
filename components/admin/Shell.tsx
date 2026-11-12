import Link from "next/link";
import { logout } from "@/lib/actions/auth";

const links = [
  ["Dashboard", "/admin"],
  ["Leads", "/admin/leads"],
  ["Customers", "/admin/customers"],
  ["Quotes", "/admin/quotes"],
  ["Jobs", "/admin/jobs"],
  ["Schedule", "/admin/schedule"],
  ["Gallery", "/admin/gallery"],
  ["Testimonials", "/admin/testimonials"],
  ["Guides", "/admin/guides"],
  ["Settings", "/admin/settings"],
];

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
    <div className="min-h-screen bg-cream text-ink md:grid md:grid-cols-[230px_1fr]">
      <aside className="no-print flex flex-col bg-forest text-cream md:min-h-screen">
        <Link href="/admin" className="px-5 py-5 font-serif text-xl tracking-[0.16em]">
          WD<span className="text-gold-soft">GLOW</span>
        </Link>
        <nav className="grid gap-1 px-3 pb-6">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-lg px-3 py-2 text-sm text-cream/80 hover:bg-white/5 hover:text-cream">
              {label}
            </Link>
          ))}
        </nav>
        <form action={logout} className="mt-auto px-5 py-5">
          <p className="mb-3 text-xs text-cream/50">{name}</p>
          <button className="text-sm text-gold-soft" type="submit">
            Sign out
          </button>
        </form>
      </aside>
      <div className="px-4 py-6 md:px-8 md:py-8">
        {mustChangePassword ? (
          <p className="no-print mb-4 rounded-xl border border-gold bg-gold/15 px-4 py-3 text-sm">
            This admin password is still the temporary one. Change it in settings before you share the login.
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}

export function AdminHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <h1 className="font-serif text-4xl">{title}</h1>
      {action}
    </div>
  );
}

export function Saved({ show, text = "Saved." }: { show: boolean; text?: string }) {
  if (!show) return null;
  return <p className="mb-4 rounded-xl border border-pine/20 bg-white px-4 py-2 text-sm text-pine">{text}</p>;
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
