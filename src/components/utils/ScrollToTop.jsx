import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop scrolls the window to the top whenever the route (pathname)
 * changes. If the location carries a hash, it scrolls to that section instead.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
