"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2027-06-12T16:00:00");

function getTimeLeft() {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: { label: string; value: number }[] = [
    { label: "Days", value: time?.days ?? 0 },
    { label: "Hours", value: time?.hours ?? 0 },
    { label: "Minutes", value: time?.minutes ?? 0 },
    { label: "Seconds", value: time?.seconds ?? 0 },
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-8">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className="text-4xl font-light tabular-nums text-[#8a6d3b] sm:text-5xl">
            {time ? String(u.value).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
