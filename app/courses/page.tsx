import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { whatsappUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'PADI Courses — Arugambay Diving Center | Get Certified in Arugam Bay',
  description:
    'PADI Open Water Diver, Advanced Open Water, Specialty courses and Fun Dives in Arugam Bay, Sri Lanka. Internationally recognized certification, experienced local instructors and small groups.',
};

type Course = {
  name: string;
  level: string;
  duration: string;
  prerequisites: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
};

const courses: Course[] = [
  {
    name: 'Open Water Diver',
    level: 'Beginner',
    duration: '3–4 days',
    prerequisites: 'Minimum age 10. Basic swimming ability recommended.',
    description:
      'The first scuba certification — and your passport to the underwater world. Learn the fundamentals of scuba diving, then put them into practice in real open-water dives.',
    highlights: [
      'Knowledge development (online + briefings)',
      'Confined-water training in shallow water',
      'Four open-water dives at Arugam Bay sites',
      'Lifelong, globally recognized PADI certification',
    ],
    image: '/images/open-water-course.png',
    alt: 'A PADI instructor teaching two new divers underwater',
  },
  {
    name: 'Advanced Open Water Diver',
    level: 'Intermediate',
    duration: '2–3 days',
    prerequisites: 'PADI Open Water Diver (or equivalent).',
    description:
      'Already certified? Take your skills further with five adventure dives — including deep diving and underwater navigation — plus three specialties of your choice.',
    highlights: [
      'Two required dives: Deep + Navigation',
      'Three elective specialty dives',
      'Build experience under instructor supervision',
      'Dive deeper sites and unlock more adventures',
    ],
    image: '/images/fun-diving.png',
    alt: 'Three certified divers exploring a coral reef',
  },
  {
    name: 'Specialty Courses',
    level: 'All levels',
    duration: '1–2 days each',
    prerequisites: 'Varies by specialty.',
    description:
      'Focus on what excites you most — from spotting nocturnal life on night dives to mastering buoyancy and underwater photography.',
    highlights: [
      'Night Diver',
      'Peak Performance Buoyancy',
      'Underwater Photographer',
      'Enriched Air (Nitrox) Diver',
    ],
    image: '/images/night-diving.png',
    alt: 'Two night divers with torches above a sea turtle',
  },
  {
    name: 'Fun Dives',
    level: 'Certified divers',
    duration: '½ day per dive',
    prerequisites: 'Any active diving certification.',
    description:
      'No course — just diving. Already certified and want to explore? Join guided trips to our favourite reefs, rocks and pinnacles around Arugam Bay.',
    highlights: [
      'Guided by experienced local divemasters',
      'Single dives or multi-dive day trips',
      'Group and private options',
      'Equipment rental available',
    ],
    image: '/images/dsd.png',
    alt: 'Smiling divers giving thumbs-up over a coral reef',
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ocean-950 text-white">
          <Image
            src="/images/padi-courses.png"
            alt="PADI training in Sri Lanka — Arugam Bay"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/65 via-ocean-900/35 to-ocean-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/55 via-transparent to-transparent" />

          <div className="container-wide relative z-10 pb-20 pt-32 sm:pb-28 sm:pt-36">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm animate-fade-in">
                PADI Certified Training
              </p>
              <h1 className="font-display text-balance text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up">
                Become a <span className="italic text-ocean-200">certified diver</span> in paradise
              </h1>
              <p
                className="mt-6 max-w-xl text-base text-white/85 sm:text-lg animate-fade-up"
                style={{ animationDelay: '0.15s', opacity: 0 }}
              >
                Internationally recognized certification, experienced local
                instructors and small groups — at one of the world's most loved
                surf-and-dive towns.
              </p>
              <div
                className="mt-8 flex flex-wrap gap-3 animate-fade-up"
                style={{ animationDelay: '0.3s', opacity: 0 }}
              >
                <Link href="/#book" className="btn-primary !bg-white !text-ocean-900 hover:!bg-ocean-50">
                  Enroll Now
                </Link>
                <a
                  href={whatsappUrl('Hi! I have a question about PADI courses.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !border-white/30 !bg-white/10 !text-white backdrop-blur hover:!bg-white/20 hover:!border-white/50"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why train with us */}
        <section className="relative bg-white py-20 sm:py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl text-center reveal">
              <p className="eyebrow">Why Train With Us</p>
              <h2 className="mt-3 font-display text-balance text-3xl font-light leading-tight tracking-tight text-ocean-950 sm:text-4xl">
                A small school, with a <span className="italic text-ocean-700">big-ocean</span> classroom
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'PADI Standards',
                  body: 'Trained, insured, and held to the world-leading PADI safety standards.',
                },
                {
                  title: 'Small Groups',
                  body: 'Low instructor-to-student ratios mean more attention and faster progress.',
                },
                {
                  title: 'Local Experts',
                  body: 'Our instructors live and dive here — they know every reef and current.',
                },
                {
                  title: 'Beginner Friendly',
                  body: 'New to diving? Anxious about water? We slow down and build confidence.',
                },
              ].map((b, i) => (
                <div
                  key={b.title}
                  className="reveal rounded-2xl border border-ocean-100 bg-gradient-to-br from-white to-ocean-50/40 p-6"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <p className="font-display text-2xl font-light text-ocean-700">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-lg font-medium text-ocean-950">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-ocean-900/70">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider bgClass="bg-white" fill="#f0f9ff" />

        {/* Course list */}
        <section className="relative bg-soft-gradient py-20 sm:py-28">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl text-center reveal">
              <p className="eyebrow">Courses</p>
              <h2 className="mt-3 font-display text-balance text-3xl font-light leading-tight tracking-tight text-ocean-950 sm:text-4xl lg:text-5xl">
                Choose your <span className="italic text-ocean-700">next step</span>
              </h2>
              <p className="mt-5 text-base text-ocean-900/70 sm:text-lg">
                From your very first breath underwater to advanced specialties —
                we have a course for every level.
              </p>
            </div>

            <div className="mt-14 space-y-12 lg:space-y-20">
              {courses.map((course, idx) => {
                const reverse = idx % 2 === 1;
                return (
                  <article
                    key={course.name}
                    className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
                  >
                    {/* Image */}
                    <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-ocean-900/15">
                        <Image
                          src={course.image}
                          alt={course.alt}
                          fill
                          sizes="(min-width: 1024px) 45vw, 95vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -top-4 left-4 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean-700 shadow-md sm:-top-5 sm:left-6">
                        Course 0{idx + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={reverse ? 'lg:order-1' : ''}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-ocean-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ocean-700">
                          {course.level}
                        </span>
                        <span className="rounded-full bg-ocean-50 px-3 py-1 text-[11px] font-medium text-ocean-700">
                          {course.duration}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-ocean-950 sm:text-4xl">
                        {course.name}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-ocean-900/75 sm:text-lg">
                        {course.description}
                      </p>

                      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ocean-600">
                        Prerequisites
                      </p>
                      <p className="text-sm text-ocean-900/75">{course.prerequisites}</p>

                      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ocean-600">
                        What's included
                      </p>
                      <ul className="mt-2 space-y-2">
                        {course.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-ocean-900/85">
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-ocean-600"
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
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <Link href="/#book" className="btn-primary">
                          Enroll in this course
                        </Link>
                        <a
                          href={whatsappUrl(
                            `Hi! I'd like to know more about the PADI ${course.name} course.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          Ask on WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative bg-ocean-gradient py-20 text-white sm:py-24">
          <div className="container-tight reveal text-center">
            <h2 className="font-display text-balance text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to take the plunge?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              Tell us which course interests you, when you'd like to start, and
              we'll handle the rest.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#book" className="btn-primary !bg-white !text-ocean-900 hover:!bg-ocean-50">
                Book Your Course
              </Link>
              <Link
                href="/"
                className="btn-secondary !border-white/25 !bg-white/5 !text-white hover:!bg-white/10 hover:!border-white/45"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
