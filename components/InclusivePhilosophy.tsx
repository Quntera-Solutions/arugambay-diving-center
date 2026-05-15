import Image from 'next/image';
import Link from 'next/link';

/**
 * Key differentiator: "Can't Swim? You Can Still Dive!"
 * Uses an asymmetric split layout — text + an image with overlapping floating card.
 */
export default function InclusivePhilosophy() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="relative reveal order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-ocean-900/15">
              <Image
                src="/images/dsd.png"
                alt="Two divers smile underwater, one giving the thumbs-up signal — Discover Scuba Diving"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-ocean-100 bg-white p-5 shadow-xl shadow-ocean-900/10 sm:block sm:max-w-xs sm:-left-8 lg:-bottom-8">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean-100 text-ocean-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ocean-600">
                    Non-swimmers welcome
                  </p>
                  <p className="mt-1 text-sm text-ocean-900">
                    Specialized buoyancy gear keeps you floating effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal order-1 lg:order-2">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-3 font-display text-balance text-3xl font-light leading-tight tracking-tight text-ocean-950 sm:text-4xl lg:text-5xl">
              Can't swim? <span className="italic text-ocean-700">You can still dive.</span>
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-ocean-900/75 sm:text-lg">
              We believe the ocean should be accessible to everyone. Our{' '}
              <strong className="font-semibold text-ocean-900">
                Discover Scuba Diving (DSD)
              </strong>{' '}
              program is specially designed for beginners and non-swimmers. With
              1-to-1 instructor guidance and specialized buoyancy equipment, you'll
              be safe, comfortable, and floating effortlessly while you explore
              the coral reefs.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                'One-to-one instructor guidance the entire dive',
                'Buoyancy-control gear designed for first-timers',
                'No prior experience or swimming ability required',
                'Shallow, sheltered reefs perfect for beginners',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ocean-100 text-ocean-700">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm text-ocean-900 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Link href="/#book" className="btn-primary">
                Try Discover Scuba Diving
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
