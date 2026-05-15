'use client';

import { useEffect } from 'react';

/**
 * Watches all elements with the `.reveal` class and toggles `is-visible`
 * when they enter the viewport. Pairs with the CSS in globals.css for a subtle
 * fade-up effect on scroll.
 *
 * Rendered once globally from the root layout so individual sections don't
 * each need their own observer.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      // Graceful fallback — show everything immediately
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
