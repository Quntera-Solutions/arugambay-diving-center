import Image from 'next/image';
import Link from 'next/link';

/**
 * Bold banner promoting the PADI courses page.
 * Asymmetric: image on right, deep ocean panel on left.
 */
export default function PadiCallout() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="container-wide">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-ocean-gradient text-white shadow-2xl shadow-ocean-900/25">
          {/* Decorative bubbles */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-8 h-32 w-32 rounded-full border border-white/15" />
            <div className="absolute -bottom-12 left-32 h-44 w-44 rounded-full border border-white/10" />
            <div className="absolute right-1/3 top-1/2 h-3 w-3 rounded-full bg-white/30" />
          </div>

          <div className="grid items-stretch gap-0 lg:grid-cols-2">
            {/* Text side */}
            <div className="relative p-8 sm:p-12 lg:p-16">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-ocean-200" />
                PADI Certified Training
              </p>
              <h2 className="mt-5 font-display text-balance text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                Become a <span className="italic text-ocean-200">certified diver</span> in paradise
              </h2>
              <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg">
                Open Water Diver, Advanced Open Water, Specialty courses and fun
                dives — taught by experienced local instructors in small groups
                at world-renowned Arugam Bay.
              </p>

              <ul className="mt-7 grid gap-2 text-sm sm:grid-cols-2">
                {[
                  'Internationally recognized certification',
                  'Experienced local instructors',
                  'Small groups & personalized training',
                  'Rich, healthy marine life sites',
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-white/90">
                    <svg
                      className="h-4 w-4 shrink-0 text-ocean-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <Link
                  href="/courses"
                  className="btn-primary !bg-white !text-ocean-900 hover:!bg-ocean-50"
                >
                  View PADI Courses
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
              </div>
            </div>

            {/* Image side */}
            <div className="relative min-h-[280px] lg:min-h-[480px]">
              <Image
                src="/images/padi-courses.png"
                alt="PADI Course Sri Lanka — become a certified diver in Arugam Bay"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/60 via-transparent to-transparent lg:from-ocean-900/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
