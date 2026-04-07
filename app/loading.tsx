export default function Loading() {
  return (
    <main className="fixed inset-0 h-dvh w-screen max-w-full overflow-hidden bg-[#f2e7d7] px-6">
      <div className="flex min-h-dvh items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border border-[#c9b8a2] bg-[#f8efe2] p-8 shadow-[0_18px_54px_rgba(88,66,40,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7d6a53]">Loading Portfolio</p>
          <p className="mt-3 text-base font-semibold text-[#2245c4]">Preparing content...</p>
        </div>
      </div>
    </main>
  );
}
