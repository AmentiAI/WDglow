"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "ink" | "ghost";
}) {
  const { pending } = useFormStatus();
  const tones = {
    gold: "btn-glow px-5 py-3 text-sm",
    ink: "bg-[#111318] text-white hover:bg-[#2a2e38] rounded-full px-5 py-3 text-sm font-semibold",
    ghost: "border border-black/15 bg-white text-[#16160f] hover:border-black rounded-full px-5 py-3 text-sm font-semibold",
  };
  return (
    <button
      type="submit"
      disabled={pending}
      className={`transition disabled:opacity-60 ${tones[tone]}`}
    >
      {pending ? "Saving…" : children}
    </button>
  );
}
