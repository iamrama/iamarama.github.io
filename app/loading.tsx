'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + 2, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
      }
    }, 22);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f2e7d7] px-6">
      <div className="w-full max-w-md rounded-3xl border border-[#c9b8a2] bg-[#f8efe2] p-8 shadow-[0_18px_54px_rgba(88,66,40,0.18)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7d6a53]">Loading Portfolio</p>
        <p className="mt-3 text-4xl font-bold text-[#2245c4]">{progress}%</p>
        <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-[#e8d8c5]">
          <div
            className="h-full rounded-full bg-[#2245c4] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </main>
  );
}
