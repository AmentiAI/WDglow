import { AdminHeader, Saved } from "@/components/admin/Shell";
import { SubmitButton } from "@/components/site/SubmitButton";
import { changePassword } from "@/lib/actions/auth";
import { saveSettings } from "@/lib/actions/content";
import { getSettings } from "@/lib/site";

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const params = await searchParams;
  const settings = await getSettings();
  return (
    <div className="grid max-w-4xl gap-6">
      <AdminHeader title="Settings" />
      <Saved show={params.saved === "1"} />
      {params.error === "password" ? (
        <p className="text-sm text-red-800">Password was not changed. Check the current password, and use at least 10 characters that match.</p>
      ) : null}
      <form action={saveSettings} className="admin-card grid gap-3 p-5">
        <h2 className="font-serif text-2xl">Public business details</h2>
        <p className="text-sm text-mist">These show in the footer, on the contact page, and in the local business listing.</p>
        <div className="grid gap-3 md:grid-cols-2">
          <label className="grid gap-1 text-sm">
            Business name
            <input className="field" name="businessName" defaultValue={settings.businessName} />
          </label>
          <label className="grid gap-1 text-sm">
            Owner name
            <input className="field" name="ownerName" defaultValue={settings.ownerName} />
          </label>
          <label className="grid gap-1 text-sm">
            Phone
            <input className="field" name="phone" defaultValue={settings.phone} />
          </label>
          <label className="grid gap-1 text-sm">
            Email
            <input className="field" name="email" defaultValue={settings.email} />
          </label>
          <label className="grid gap-1 text-sm md:col-span-2">
            Street
            <input className="field" name="street" defaultValue={settings.street} />
          </label>
          <label className="grid gap-1 text-sm">
            City
            <input className="field" name="city" defaultValue={settings.city} />
          </label>
          <label className="grid gap-1 text-sm">
            State
            <input className="field" name="state" defaultValue={settings.state} />
          </label>
          <label className="grid gap-1 text-sm">
            ZIP
            <input className="field" name="zip" defaultValue={settings.zip} />
          </label>
          <label className="grid gap-1 text-sm">
            Hours
            <input className="field" name="hours" defaultValue={settings.hours} />
          </label>
          <label className="grid gap-1 text-sm">
            Instagram URL
            <input className="field" name="instagram" defaultValue={settings.instagram} />
          </label>
          <label className="grid gap-1 text-sm">
            Facebook URL
            <input className="field" name="facebook" defaultValue={settings.facebook} />
          </label>
          <label className="grid gap-1 text-sm md:col-span-2">
            Extra about text
            <textarea className="field min-h-24" name="aboutNote" defaultValue={settings.aboutNote} />
          </label>
        </div>
        <SubmitButton>Save public details</SubmitButton>
      </form>
      <form action={changePassword} className="admin-card grid gap-3 p-5">
        <h2 className="font-serif text-2xl">Password</h2>
        <label className="grid gap-1 text-sm">
          Current password
          <input className="field" type="password" name="current" required />
        </label>
        <label className="grid gap-1 text-sm">
          New password
          <input className="field" type="password" name="next" required minLength={10} />
        </label>
        <label className="grid gap-1 text-sm">
          Confirm new password
          <input className="field" type="password" name="confirm" required minLength={10} />
        </label>
        <SubmitButton>Change password</SubmitButton>
      </form>
    </div>
  );
}
