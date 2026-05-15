'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteConfig, whatsappUrl } from '@/lib/site';

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'PADI Courses', href: '/courses' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm shadow-ocean-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label={siteConfig.name}
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              scrolled ? 'bg-ocean-700' : 'bg-white/90'
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-5 w-5 transition-colors ${
                scrolled ? 'text-white' : 'text-ocean-700'
              }`}
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
          <span
            className={`font-display text-lg font-semibold leading-tight transition-colors sm:text-xl ${
              scrolled ? 'text-ocean-900' : 'text-white drop-shadow-md'
            }`}
          >
            Arugambay
            <span className="block text-[10px] font-sans font-medium uppercase tracking-[0.2em] opacity-80">
              Diving Center
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  scrolled ? 'text-ocean-900' : 'text-white drop-shadow'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl('Hi! I have a question about diving.')}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-semibold transition ${
              scrolled ? 'text-ocean-700 hover:text-ocean-900' : 'text-white drop-shadow'
            }`}
          >
            {siteConfig.phone}
          </a>
          <Link href="/#book" className="btn-primary !py-2.5 !px-5 !text-xs">
            Book a Dive
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            scrolled ? 'bg-ocean-50 text-ocean-900' : 'bg-white/20 text-white backdrop-blur'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-ocean-100 animate-fade-in">
          <ul className="container-wide flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ocean-900 hover:text-ocean-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex gap-2 border-t border-ocean-100 pt-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 !py-2.5 !text-xs"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>
              <Link
                href="/#book"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1 !py-2.5 !text-xs"
              >
                Book a Dive
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
