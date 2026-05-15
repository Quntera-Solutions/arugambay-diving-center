'use client';

import { useState } from 'react';
import { whatsappUrl } from '@/lib/site';

const services = [
  'Discover Scuba Diving (DSD)',
  'Snorkeling Tour',
  'Night Diving',
  'Fun Diving',
  'PADI Open Water Course',
  'PADI Advanced / Specialty Course',
  'Boat Safari (Dolphin / Lagoon)',
  'Not sure — please advise',
];

/**
 * Booking form: collects name, contact, group size, service, date and a note,
 * then opens WhatsApp with a nicely formatted pre-filled message.
 *
 * No backend required — keeps the deploy simple. The user reviews and sends
 * the message themselves in WhatsApp, which is also nice for trust.
 */
export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const service = data.get('service') as string;
    const date = (data.get('date') as string)?.trim();
    const people = (data.get('people') as string)?.trim();
    const note = (data.get('note') as string)?.trim();

    const lines = [
      `*New booking inquiry — Arugambay Diving Center*`,
      ``,
      `*Name:* ${name || '—'}`,
      `*Email:* ${email || '—'}`,
      `*Phone:* ${phone || '—'}`,
      `*Service:* ${service || '—'}`,
      `*Preferred date:* ${date || '—'}`,
      `*Group size:* ${people || '—'}`,
    ];
    if (note) {
      lines.push(``, `*Notes:* ${note}`);
    }

    const message = lines.join('\n');
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="book" className="relative bg-white py-20 sm:py-28">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: heading + reassurance */}
          <div className="reveal lg:col-span-2">
            <p className="eyebrow">Book a Dive</p>
            <h2 className="mt-3 font-display text-balance text-3xl font-light leading-tight tracking-tight text-ocean-950 sm:text-4xl lg:text-5xl">
              Plan your <span className="italic text-ocean-700">underwater day</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ocean-900/70 sm:text-lg">
              Tell us a little about your trip. When you submit, your details
              will open in WhatsApp ready to send — so you stay in control and
              we reply directly, usually within minutes.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  title: 'No payment required to enquire',
                  body: "We'll confirm availability and any details first.",
                },
                {
                  title: 'Flexible scheduling',
                  body: 'Choose your preferred day — we run trips daily in season.',
                },
                {
                  title: 'Open April – October',
                  body: 'The best window for diving on the East Coast.',
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ocean-100 text-ocean-700">
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
                  <div>
                    <p className="text-sm font-semibold text-ocean-950">{b.title}</p>
                    <p className="text-sm text-ocean-900/65">{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="reveal lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ocean-100 bg-gradient-to-br from-white to-ocean-50/50 p-6 shadow-xl shadow-ocean-900/[0.06] sm:p-9"
            >
              {submitted && (
                <div
                  role="status"
                  className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                >
                  <strong className="font-semibold">Almost done!</strong> Your
                  WhatsApp chat has opened in a new tab — review the message and
                  press send. We'll reply soon.
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="input"
                  />
                </Field>
                <Field label="Phone / WhatsApp" required>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+94 ..."
                    className="input"
                  />
                </Field>
                <Field label="Email" className="sm:col-span-2">
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="input"
                  />
                </Field>
                <Field label="Service" required>
                  <select name="service" required defaultValue="" className="input appearance-none pr-9">
                    <option value="" disabled>
                      Choose a service…
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred date">
                  <input name="date" type="date" className="input" />
                </Field>
                <Field label="Group size" className="sm:col-span-2">
                  <input
                    name="people"
                    type="number"
                    min={1}
                    defaultValue={2}
                    placeholder="2"
                    className="input"
                  />
                </Field>
                <Field label="Anything else?" className="sm:col-span-2">
                  <textarea
                    name="note"
                    rows={4}
                    placeholder="Experience level, special requests, accommodation…"
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                Send via WhatsApp
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.555-5.338 11.891-11.893 11.891a11.9 11.9 0 0 1-5.688-1.448L.057 24z" />
                </svg>
              </button>

              <p className="mt-4 text-xs text-ocean-900/55">
                By submitting, you agree to be contacted about your booking. We
                never share your details.
              </p>
            </form>

            {/* tiny input styles, kept local */}
            <style>{`
              .input {
                width: 100%;
                border-radius: 0.75rem;
                border: 1px solid rgb(186 230 253);
                background: white;
                padding: 0.75rem 1rem;
                font-size: 0.875rem;
                color: rgb(12 74 110);
                outline: none;
                transition: border-color .2s, box-shadow .2s;
              }
              .input::placeholder { color: rgb(125 211 252 / .9); }
              .input:focus {
                border-color: rgb(2 132 199);
                box-shadow: 0 0 0 4px rgb(186 230 253 / .5);
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
  className = '',
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ocean-700">
        {label} {required && <span className="text-ocean-500">*</span>}
      </span>
      {children}
    </label>
  );
}
