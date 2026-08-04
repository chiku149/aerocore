import { useEffect, useRef } from 'react';
import { scroll } from 'motion';

/**
 * Shrinks the nav on scroll.
 * Renders children inside the nav so Astro keeps SSR markup.
 */
export default function NavScroller({ children }: { children: React.ReactNode }) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    return scroll((p) => {
      // Toggle class on the inner div
      const inner = nav.firstElementChild as HTMLElement;
      if (inner) inner.classList.toggle('nav--scrolled', p > 0.005);
    });
  }, []);

  return (
    <nav ref={navRef} data-nav>
      {children}
    </nav>
  );
}
