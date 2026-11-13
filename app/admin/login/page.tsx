import { login } from "@/lib/actions/auth";
import { SubmitButton } from "@/components/site/SubmitButton";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="grid min-h-screen place-items-center bg-black px-5 py-10 text-white">
      <div className="w-full max-w-md">
        <img src="/brand/logo.jpg" alt="WD Glow" className="mx-auto h-24 w-auto" />
        <form action={login} className="mt-8 rounded-2xl bg-white p-7 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <h1 className="font-serif text-3xl">Admin sign in</h1>
          <p className="mt-2 text-sm text-mist">Leads, quotes, jobs, and the season calendar.</p>
          {params.error ? (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">That email and password did not match.</p>
          ) : null}
          <input type="hidden" name="next" value={params.next || "/admin"} />
          <label className="mt-6 grid gap-1.5 text-sm font-medium">
            Email
            <input className="field" type="email" name="email" required autoComplete="username" />
          </label>
          <label className="mt-4 grid gap-1.5 text-sm font-medium">
            Password
            <input className="field" type="password" name="password" required autoComplete="current-password" />
          </label>
          <div className="mt-6 [&_button]:w-full">
            <SubmitButton>Sign in</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
