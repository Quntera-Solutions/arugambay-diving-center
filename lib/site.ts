export const siteConfig = {
  name: 'Arugambay Diving Center',
  tagline: "Explore the Ocean's Hidden Wonders",
  description: 'Scuba diving, PADI courses & ocean safaris in Arugam Bay, Sri Lanka.',
  phone: '+94 76 530 2577',
  phoneRaw: '+94765302577',
  whatsappNumber: '94765302577', // international format without + or spaces for wa.me links
  address: 'Kiki Mall, Panama Rd, Arugam Bay, Sri Lanka',
  season: 'April to October',
  social: {
    instagram: '#',
    facebook: '#',
    tripadvisor: '#',
  },
} as const;

/**
 * Build a wa.me URL with a pre-filled message.
 * Used by the floating chat button and the booking form.
 */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
