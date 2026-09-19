"use client";

import { useState, FormEvent } from "react";

export default function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState("yes");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#d9c9a3] bg-white/70 p-10 text-center">
        <p className="text-2xl font-light text-[#8a6d3b]">Thank you!</p>
        <p className="mt-2 text-neutral-600">
          Your RSVP has been received. We can&apos;t wait to celebrate with you.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto grid max-w-xl grid-cols-1 gap-4 rounded-2xl border border-[#d9c9a3] bg-white/70 p-8 text-left sm:grid-cols-2"
    >
      <label className="text-sm font-medium text-neutral-700">
        Full name
        <input
          required
          type="text"
          placeholder="Jane Doe"
          className="mt-1 w-full rounded-lg border border-[#d9c9a3] bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-[#8a6d3b]"
        />
      </label>
      <label className="text-sm font-medium text-neutral-700">
        Email
        <input
          required
          type="email"
          placeholder="jane@example.com"
          className="mt-1 w-full rounded-lg border border-[#d9c9a3] bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-[#8a6d3b]"
        />
      </label>
      <label className="text-sm font-medium text-neutral-700">
        Will you attend?
        <select
          value={attending}
          onChange={(e) => setAttending(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[#d9c9a3] bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-[#8a6d3b]"
        >
          <option value="yes">Joyfully accepts</option>
          <option value="no">Regretfully declines</option>
        </select>
      </label>
      <label className="text-sm font-medium text-neutral-700">
        Number of guests
        <input
          type="number"
          min={0}
          max={5}
          defaultValue={attending === "yes" ? 1 : 0}
          className="mt-1 w-full rounded-lg border border-[#d9c9a3] bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-[#8a6d3b]"
        />
      </label>
      <label className="text-sm font-medium text-neutral-700 sm:col-span-2">
        Message for the couple (optional)
        <textarea
          rows={3}
          placeholder="Wishing you a lifetime of happiness..."
          className="mt-1 w-full rounded-lg border border-[#d9c9a3] bg-white px-3 py-2 text-sm text-neutral-800 outline-none focus:border-[#8a6d3b]"
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-[#8a6d3b] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:col-span-2"
      >
        Send RSVP
      </button>
    </form>
  );
}
