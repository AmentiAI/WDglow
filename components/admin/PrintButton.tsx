"use client";

export function PrintButton() {
  return (
    <button type="button" className="no-print rounded-full border border-ink/15 px-4 py-2 text-sm" onClick={() => window.print()}>
      Print
    </button>
  );
}
