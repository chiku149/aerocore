import { useEffect, useRef, useState, type ReactNode } from 'react';
import { inView } from 'motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Fade/slide reveal on enter (motion.dev inView).
 * Academic styling: gentler ease, shorter travel.
 */
export default function Reveal({ children, delay = 0, y = 16, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const stop = inView(el, () => setShown(true), { amount: 0.2 });
    return stop;
  }, []);

  return (
    <div
      ref={ref}
      className={`${className || ''} ${shown ? '' : 'reveal-init'}`}
      style={{
        transform: shown ? 'none' : `translateY(${y}px)`,
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
