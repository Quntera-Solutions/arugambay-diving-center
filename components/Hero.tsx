import Image from 'next/image';
import Link from 'next/link';

/**
 * Full-bleed hero. Underwater photo + dark gradient + display headline.
 * Floating bubble decorations add subtle ocean motion.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ocean-950 text-white">
      {/* Background image */}
      <Image
        src="/images/fun-diving.png"
        alt="Scuba divers exploring a vibrant coral reef in Arugam Bay"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark + ocean tint overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-900/40 to-ocean-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/60 via-transparent to-transparent" />

      {/* Bubbles — purely decorative */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { left: '8%', size: 10, delay: '0s' },
          { left: '18%', size: 14, delay: '2s' },
          { left: '30%', size: 8, delay: '4s' },
          { left: '52%', size: 12, delay: '1s' },
          { left: '68%', size: 16, delay: '3s' },
          { left: '82%', size: 9, delay: '5s' },
          { left: '92%', size: 11, delay: '2.5s' },
        ].map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full border border-white/40 bg-white/10 animate-bubble"
            style={{
              left: b.left,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pb-28 pt-28 sm:pb-36 sm:pt-32">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Arugam Bay · Sri Lanka
          </p>

          <h1 className="font-display text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up">
            Explore the Ocean's{' '}
            <span className="italic text-ocean-200">Hidden Wonders</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base text-white/85 sm:text-lg animate-fade-up"
            style={{ animationDelay: '0.15s', opacity: 0 }}
          >
            No swimming skills required. Whether you're a seasoned diver or a total
            beginner, we'll guide you through Arugam Bay's breathtaking underwater
            world — safely, comfortably, hand-in-hand.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <Link href="/#book" className="btn-primary !bg-white !text-ocean-900 hover:!bg-ocean-50">
              Book Your Dive
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/#services"
              className="btn-secondary !border-white/30 !bg-white/10 !text-white backdrop-blur hover:!bg-white/20 hover:!border-white/50"
            >
              View All Services
            </Link>
          </div>

          {/* Trust strip */}
          <div
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/20 pt-6 text-white/80 animate-fade-up"
            style={{ animationDelay: '0.45s', opacity: 0 }}
          >
            <div>
              <div className="font-display text-2xl font-medium text-white sm:text-3xl">PADI</div>
              <div className="text-xs uppercase tracking-wider">Certified Instructors</div>
            </div>
            <div>
              <div className="font-display text-2xl font-medium text-white sm:text-3xl">1:1</div>
              <div className="text-xs uppercase tracking-wider">Beginner Guidance</div>
            </div>
            <div>
              <div className="font-display text-2xl font-medium text-white sm:text-3xl">Apr–Oct</div>
              <div className="text-xs uppercase tracking-wider">Diving Season</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 animate-float opacity-70">
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
