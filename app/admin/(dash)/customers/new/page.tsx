import { CustomerFields } from "@/components/admin/Records";
import { AdminHeader } from "@/components/admin/Shell";
import { SubmitButton } from "@/components/site/SubmitButton";
import { saveCustomer } from "@/lib/actions/crm";

export default async function NewCustomerPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="max-w-3xl">
      <AdminHeader title="New customer" />
      {params.error ? <p className="mb-4 text-sm text-red-800">Name and email are required.</p> : null}
      <form action={saveCustomer} className="admin-card grid gap-4 p-5">
        <CustomerFields />
        <SubmitButton>Create customer</SubmitButton>
      </form>
    </div>
  );
}
