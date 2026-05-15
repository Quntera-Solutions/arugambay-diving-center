import { siteConfig, whatsappUrl } from '@/lib/site';

export default function Contact() {
  const mapsQuery = encodeURIComponent(siteConfig.address);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section id="contact" className="relative bg-ocean-950 py-20 text-white sm:py-28">
      {/* Subtle pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(56,189,248,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.15), transparent 50%)',
        }}
      />

      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: details */}
          <div className="reveal">
            <p className="eyebrow !text-ocean-300">Visit Us</p>
            <h2 className="mt-3 font-display text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Find us on the <span className="italic text-ocean-200">East Coast</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              We're right in the heart of Arugam Bay's vibrant beach scene —
              easy to find, easy to dive from. Drop by, message, or call.
            </p>

            <dl className="mt-10 space-y-6">
              <ContactRow
                label="Address"
                icon={
                  <>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </>
                }
              >
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ocean-200 underline-offset-4 hover:underline"
                >
                  {siteConfig.address}
                </a>
              </ContactRow>

              <ContactRow
                label="Phone / WhatsApp"
                icon={
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                }
              >
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ocean-200"
                >
                  {siteConfig.phone}
                </a>
              </ContactRow>

              <ContactRow
                label="Diving Season"
                icon={
                  <>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </>
                }
              >
                {siteConfig.season}{' '}
                <span className="text-white/55">(best time for East Coast diving)</span>
              </ContactRow>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappUrl("Hi! I'd like to ask about your diving services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white !text-ocean-900 hover:!bg-ocean-50"
              >
                Message on WhatsApp
              </a>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !border-white/25 !bg-white/5 !text-white hover:!bg-white/10 hover:!border-white/45"
              >
                Open in Maps
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="reveal">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-ocean-950/50">
              <iframe
                src={mapsEmbed}
                title="Map showing Arugambay Diving Center location"
                width="100%"
                height="480"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full bg-ocean-900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-ocean-200 ring-1 ring-white/15">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon}
        </svg>
      </span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-300">{label}</dt>
        <dd className="mt-1 text-base text-white/90">{children}</dd>
      </div>
    </div>
  );
}
