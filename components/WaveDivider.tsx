type WaveDividerProps = {
  /** Direction the wave faces: 'down' sits at the top of a section, 'up' at the bottom */
  flip?: boolean;
  /** Fill color of the wave area (matches the section it's transitioning INTO) */
  fill?: string;
  /** Color of the section behind the wave (matches the section it's transitioning OUT of) */
  bgClass?: string;
  className?: string;
};

/**
 * Layered animated SVG wave divider.
 * Uses two stacked paths that pan horizontally at different speeds for a parallax effect.
 */
export default function WaveDivider({
  flip = false,
  fill = '#ffffff',
  bgClass = 'bg-ocean-50',
  className = '',
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-16 w-full overflow-hidden ${bgClass} ${flip ? 'rotate-180' : ''} ${className}`}
    >
      {/* Back wave — slower, more transparent */}
      <svg
        className="absolute inset-x-0 bottom-0 h-full w-[200%] animate-wave-slow"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
          opacity="0.55"
        />
      </svg>
      {/* Front wave — faster, solid */}
      <svg
        className="absolute inset-x-0 bottom-0 h-full w-[200%] animate-wave-fast"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 C180,20 360,70 540,50 C720,30 900,70 1080,50 C1260,30 1440,60 1440,60 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
