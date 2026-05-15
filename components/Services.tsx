import Image from 'next/image';
import Link from 'next/link';

type Service = {
  title: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  badge?: string;
};

const services: Service[] = [
  {
    title: 'Discover Scuba Diving',
    short: 'DSD',
    description:
      'The perfect first-time experience for beginners and non-swimmers. Guided hand-in-hand by our experts.',
    image: '/images/dsd.png',
    imageAlt: 'Two divers underwater with a thumbs-up signal',
    badge: 'Most popular',
  },
  {
    title: 'Snorkeling Tours',
    short: 'Snorkel',
    description:
      'Surface-level fun for all ages. Explore shallow reefs, sea turtles and tropical fish with ease.',
    image: '/images/snorkeling-tours.png',
    imageAlt: 'Two snorkelers giving the thumbs-up over a coral reef',
  },
  {
    title: 'Night Diving',
    short: 'Night',
    description:
      "Discover the ocean's nightlife. Witness nocturnal hunters and bioluminescent wonders under the stars.",
    image: '/images/night-diving.png',
    imageAlt: 'Two divers with torches at night above coral and a sea turtle',
  },
  {
    title: 'Fun Diving',
    short: 'Fun',
    description:
      "Guided trips for certified PADI / CMAS divers to Arugam Bay's most iconic dive sites.",
    image: '/images/fun-diving.png',
    imageAlt: 'Three divers exploring a colorful coral reef',
  },
  {
    title: 'PADI Courses',
    short: 'PADI',
    description:
      'Get certified! Open Water, Advanced and Specialty courses to take your skills to the next level.',
    image: '/images/open-water-course.png',
    imageAlt: 'A PADI instructor teaching two students underwater',
    href: '/courses',
    badge: 'Certifications',
  },
  {
    title: 'Boat Safari',
    short: 'Safari',
    description:
      'Beyond diving — dolphin watching in the ocean, or spot elephants and crocodiles in Pottuvil Lagoon.',
    image: '/images/boat-safari.png',
    imageAlt: 'A boat full of guests with dolphins jumping nearby',
  },
];

function ServiceCard({ service, idx }: { service: Service; idx: number }) {
  const inner = (
    <article
      className="reveal group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ocean-100 bg-white shadow-sm shadow-ocean-900/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-ocean-200 hover:shadow-xl hover:shadow-ocean-900/10"
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
        {service.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ocean-700 backdrop-blur-sm">
            {service.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-ocean-950/40 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur-sm">
          {service.short}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium leading-snug text-ocean-950">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ocean-900/70">
          {service.description}
        </p>
        <div className="mt-5 flex items-center text-sm font-semibold text-ocean-700">
          <span>{service.href ? 'Explore courses' : 'Learn more'}</span>
          <svg
            className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
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
        </div>
      </div>
    </article>
  );

  // PADI Courses card links to the dedicated page; others link to the booking section.
  return service.href ? (
    <Link href={service.href} className="block h-full">
      {inner}
    </Link>
  ) : (
    <Link href="/#book" className="block h-full">
      {inner}
    </Link>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-soft-gradient py-20 sm:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="eyebrow">What We Offer</p>
          <h2 className="mt-3 font-display text-balance text-3xl font-light leading-tight tracking-tight text-ocean-950 sm:text-4xl lg:text-5xl">
            Experiences for every kind of <span className="italic text-ocean-700">ocean lover</span>
          </h2>
          <p className="mt-5 text-base text-ocean-900/70 sm:text-lg">
            From first-time scuba experiences to certified deep dives — and even
            land-and-sea safaris — there's something here for everyone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
