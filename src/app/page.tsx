import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import RsvpForm from "./RsvpForm";

const GALLERY_SEEDS = ["wed-1", "wed-2", "wed-3", "wed-4", "wed-5", "wed-6"];

export default function WeddingPlannerDemo() {
  return (
    <div className="min-h-screen bg-[#faf6f0] text-neutral-800">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/wedding-hero/1600/1000"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative px-6 text-center text-white">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/80">
            Together with their families
          </p>
          <h1 className="mt-5 font-serif text-6xl italic tracking-tight sm:text-7xl">
            Emma &amp; James
          </h1>
          <p className="mt-5 text-lg text-white/90">
            June 12, 2027 · Willow Creek Vineyard, Napa Valley
          </p>
          <a
            href="#rsvp"
            className="mt-8 inline-block rounded-full border border-white/70 px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-white hover:text-neutral-900"
          >
            RSVP
          </a>
        </div>
      </section>

      {/* Countdown */}
      <section className="border-b border-[#e6dcc8] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d3b]">
            Counting down to
          </p>
          <h2 className="mt-2 font-serif text-3xl italic text-neutral-800">
            The Big Day
          </h2>
          <div className="mt-8">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d3b]">
          Our Story
        </p>
        <h2 className="mt-2 font-serif text-3xl italic text-neutral-800">
          Ten years, one forever
        </h2>
        <p className="mt-5 leading-relaxed text-neutral-600">
          We met on a rainy Tuesday in a coffee shop that no longer exists. A decade,
          two cities, and one very stubborn cat later, we&apos;re ready to say &ldquo;I
          do.&rdquo; We&apos;d love nothing more than for you to be there with us.
        </p>
      </section>

      {/* Gallery */}
      <section className="border-y border-[#e6dcc8] bg-white/60 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d3b]">
              Gallery
            </p>
            <h2 className="mt-2 font-serif text-3xl italic text-neutral-800">
              Moments we love
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {GALLERY_SEEDS.map((seed, i) => (
              <div
                key={seed}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
                }`}
              >
                <Image
                  src={`https://picsum.photos/seed/${seed}/700/700`}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6d3b]">
          Join Us
        </p>
        <h2 className="mt-2 font-serif text-3xl italic text-neutral-800">
          RSVP by April 1, 2027
        </h2>
        <div className="mt-10">
          <RsvpForm />
        </div>
      </section>

      <footer className="border-t border-[#e6dcc8] py-8 text-center text-xs text-neutral-500">
        With love, Emma &amp; James — Template demo
      </footer>
    </div>
  );
}
