import Image from 'next/image';

const galleryItems = [
  {
    src: '/images/boat-safari.png',
    alt: 'Boat safari with dolphins jumping nearby',
    caption: 'Dolphin Safari',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/images/snorkeling-tours.png',
    alt: 'Snorkelers exploring coral with tropical fish',
    caption: 'Snorkeling',
    span: '',
  },
  {
    src: '/images/night-diving.png',
    alt: 'Night dive with sea turtle and torchlights',
    caption: 'Night Dive',
    span: '',
  },
  {
    src: '/images/parties.png',
    alt: 'Beachside celebration with string lights, BBQ and divers',
    caption: 'Dive · Then Celebrate',
    span: 'sm:col-span-2',
  },
  {
    src: '/images/fun-diving.png',
    alt: 'Three certified divers exploring vibrant reef',
    caption: 'Fun Diving',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-soft-gradient py-20 sm:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="eyebrow">Moments from the bay</p>
          <h2 className="mt-3 font-display text-balance text-3xl font-light leading-tight tracking-tight text-ocean-950 sm:text-4xl lg:text-5xl">
            Life above and below the <span className="italic text-ocean-700">surface</span>
          </h2>
          <p className="mt-5 text-base text-ocean-900/70 sm:text-lg">
            Reef encounters, dolphin pods, beach BBQs after a long day of diving —
            here's a glimpse of what awaits you in Arugam Bay.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[230px]">
          {galleryItems.map((item, idx) => (
            <figure
              key={item.src}
              className={`reveal group relative overflow-hidden rounded-2xl bg-ocean-100 ${item.span}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-ocean-950/10 to-transparent" />
              <figcaption className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wider text-white sm:bottom-4 sm:left-4 sm:text-sm">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
