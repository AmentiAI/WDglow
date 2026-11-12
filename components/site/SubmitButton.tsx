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
    gold: "bg-[#e4c36a] text-[#1a1408] hover:bg-[#f0d48a]",
    ink: "bg-[#111318] text-white hover:bg-[#2a2e38]",
    ghost: "border border-black/15 bg-white text-[#16160f] hover:border-black",
  };
  return (
    <button
      type="submit"
      disabled={pending}
      className={`rounded-full px-5 py-3 text-sm font-semibold transition disabled:opacity-60 ${tones[tone]}`}
    >
      {pending ? "Saving…" : children}
    </button>
  );
}
