'use client';

import { useEffect } from 'react';

/**
 * Marks <html> as hydrated so the CSS reveal failsafe in globals.css can stand down.
 *
 * Framer Motion serialises its `initial` state into the server-rendered HTML as
 * inline `opacity:0`, which means every animated section ships invisible and only
 * appears once ~160KB of JS has downloaded and hydrated. On a slow connection that
 * reads as a blank, still-loading page.
 *
 * The failsafe reveals that prerendered content if hydration hasn't happened yet.
 * This flag switches it off the moment React takes over, so scroll-triggered
 * animations below the fold still play normally.
 */
export default function HydrationFlag() {
  useEffect(() => {
    document.documentElement.classList.add('hydrated');
  }, []);

  return null;
}
