import { useCallback, useEffect, useState } from 'react';

export type Route =
  | 'home'
  | 'codescanner'
  | 'villa-oliveto'
  | 'schuelerhilfe'
  | 'impressum'
  | 'datenschutz';

const routes: Record<string, Route> = {
  '/': 'home',
  '/codescanner': 'codescanner',
  '/villa-oliveto': 'villa-oliveto',
  '/schuelerhilfe': 'schuelerhilfe',
  '/impressum': 'impressum',
  '/datenschutz': 'datenschutz',
};

const parse = (): Route => {
  // Strip a trailing slash so /codescanner and /codescanner/ both resolve.
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return routes[path] ?? 'home';
};

export const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const useRoute = (): Route => {
  const [route, setRoute] = useState<Route>(() => parse());

  useEffect(() => {
    const onPopState = () => setRoute(parse());
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
