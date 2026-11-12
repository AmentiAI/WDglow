import { AdminShell } from "@/components/admin/Shell";
import { requireSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await requireSession();
  return (
    <AdminShell name={session.name} mustChangePassword={session.mustChangePassword}>
      {children}
    </AdminShell>
  );
}
