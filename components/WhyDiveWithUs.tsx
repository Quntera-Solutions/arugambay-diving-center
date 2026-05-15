const features = [
  {
    title: 'Certified Safety',
    body: 'High-quality gear and PADI-certified instructors for every dive — no compromises.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Personalized Experience',
    body: 'Small groups and one-to-one guidance for maximum safety, comfort and enjoyment.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Heart of Arugam Bay',
    body: "Conveniently located in the heart of Arugam Bay's vibrant beach scene.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function WhyDiveWithUs() {
  return (
    <section id="why-us" className="relative bg-white py-20 sm:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="eyebrow">Why Dive With Us</p>
          <h2 className="mt-3 font-display text-balance text-3xl font-light leading-tight tracking-tight text-ocean-950 sm:text-4xl lg:text-5xl">
            Built around <span className="italic text-ocean-700">safety, trust</span> and the love of the sea
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-ocean-100 bg-gradient-to-br from-white to-ocean-50/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-900/10 sm:p-8"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Decorative gradient blob */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-ocean-200/30 blur-2xl transition-opacity group-hover:bg-ocean-300/40" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-700 text-white shadow-lg shadow-ocean-700/25 transition-transform group-hover:rotate-3 group-hover:scale-110">
                  <span className="h-6 w-6">{f.icon}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium leading-snug text-ocean-950">
                  {f.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-ocean-900/70 sm:text-base">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
