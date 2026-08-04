import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Astro-friendly Reveal component.
 * Renders static HTML with data attributes. A global script in BaseLayout
 * handles the actual IntersectionObserver/Motion logic.
 */
export default function Reveal({ children, delay = 0, y = 16, className }: RevealProps) {
  return (
    <div
      data-reveal
      data-reveal-delay={delay}
      data-reveal-y={y}
      className={`${className || ''} opacity-0`}
      style={{
        transform: `translateY(${y}px)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
