import { useCallback, useEffect, useState } from 'react';

export type Route =
  | 'home'
  // | 'codescanner' // Temporarily disabled until bachelor thesis grading is complete (2026-05-28)
  | 'villa-oliveto'
  | 'garden-connect'
  | 'schuelerhilfe'
  | 'impressum'
  | 'datenschutz';

const routes: Record<string, Route> = {
  '/': 'home',
  '/villa-oliveto': 'villa-oliveto',
  '/garden-connect': 'garden-connect',
  '/schuelerhilfe': 'schuelerhilfe',
  '/impressum': 'impressum',
  '/datenschutz': 'datenschutz',
};

const parse = (): Route => {
  const path = window.location.pathname;
  return routes[path] ?? 'home';
};

export const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const useRoute = (): Route => {
  const [route, setRoute] = useState<Route>(() => parse());

  useEffect(() => {
    const onPopState = () => {
      const next = parse();
      setRoute(next);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return route;
};

// Hook for link click handling - prevents full page reload
export const useNavigate = () => {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow normal behavior for external links, new tabs, or modified clicks
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }
    e.preventDefault();
    navigate(href);
  }, []);
};
