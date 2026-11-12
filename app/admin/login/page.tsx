import { login } from "@/lib/actions/auth";
import { SubmitButton } from "@/components/site/SubmitButton";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="grid min-h-screen place-items-center bg-forest px-5 text-cream">
      <form action={login} className="w-full max-w-md bg-paper p-7 text-ink">
        <p className="font-serif text-2xl tracking-[0.16em]">
          WD<span className="text-gold">GLOW</span>
        </p>
        <h1 className="mt-6 font-serif text-4xl">Admin</h1>
        <p className="mt-2 text-sm text-mist">Leads, quotes, jobs, and the season calendar.</p>
        {params.error ? <p className="mt-4 text-sm text-red-800">That email and password did not match.</p> : null}
        <input type="hidden" name="next" value={params.next || "/admin"} />
        <label className="mt-6 grid gap-1 text-sm">
          Email
          <input className="field" type="email" name="email" required autoComplete="username" />
        </label>
        <label className="mt-4 grid gap-1 text-sm">
          Password
          <input className="field" type="password" name="password" required autoComplete="current-password" />
        </label>
        <div className="mt-6">
          <SubmitButton>Sign in</SubmitButton>
        </div>
      </form>
    </div>
  );
}
