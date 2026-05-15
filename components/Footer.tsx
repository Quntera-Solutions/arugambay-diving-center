import Link from 'next/link';
import { siteConfig, whatsappUrl } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative bg-ocean-950 text-white/75">
      <div className="border-t border-white/10">
        <div className="container-wide grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-ocean-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                  <path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                  <path d="M2 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                </svg>
              </span>
              <div>
                <p className="font-display text-lg font-medium text-white">
                  {siteConfig.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                  Sri Lanka · Est. for the ocean
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {siteConfig.description} The ocean should be accessible to everyone — and
              we make sure it is.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-300">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/#services" className="hover:text-white">Services</Link></li>
              <li><Link href="/courses" className="hover:text-white">PADI Courses</Link></li>
              <li><Link href="/#gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link href="/#book" className="hover:text-white">Book a Dive</Link></li>
              <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-300">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>{siteConfig.address}</li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-white/55">Season: {siteConfig.season}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p>
              Designed for the ocean lovers of <span className="text-white/75">Arugam Bay</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
