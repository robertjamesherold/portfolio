import { useEffect, useRef, useState } from 'react';
import { IconMenu, IconClose } from '../lib/icons';
import { useRoute, navigate } from '../lib/router';
import { NavMenu, type MenuType } from './NavMenu';
import { NavBackdrop } from './NavBackdrop';

export const TopNav = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType | null>(null);
  const route = useRoute();
  const isHome = route === 'home';

  const closeTimer = useRef<number | null>(null);
  const scrollYRef = useRef(0);
  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 180);
  };

  const openMenu = (m: MenuType) => {
    cancelClose();
    setActiveMenu(m);
  };

  // Close everything on route change
  useEffect(() => {
    setActiveMenu(null);
  }, [route]);

  // Prevent scrolling when menu is open (iOS-safe)
  useEffect(() => {
    if (activeMenu !== null) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      // Disable smooth scroll temporarily to restore position instantly
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollYRef.current);
      html.style.scrollBehavior = prevBehavior;
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [activeMenu]);

  // Toggle menu via click (mobile / accessibility fallback)
  const toggleMenu = (m: MenuType) => {
    cancelClose();
    setActiveMenu((cur) => (cur === m ? null : m));
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line-subtle">
        <div className="mx-auto max-w-[1760px] px-6 sm:px-10 lg:px-20 py-4 flex items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (isHome) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            aria-label="Robert James Herold — Startseite"
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <img
              src="/favicon.svg"
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
            />
            <span className="font-bold tracking-tightish text-base sm:text-lg">
              Robert James Herold
            </span>
          </a>

          <ul className="hidden md:flex ml-auto gap-9 text-[15px] text-ink-2 items-center">
            <li onMouseEnter={() => openMenu('projects')} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => toggleMenu('projects')}
                className={`hover:text-ink-1 transition ${
                  activeMenu === 'projects' ? 'text-ink-1' : ''
                }`}
                aria-expanded={activeMenu === 'projects'}
                aria-haspopup="menu"
              >
                Arbeitsproben
              </button>
            </li>
            <li onMouseEnter={() => openMenu('contact')} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => toggleMenu('contact')}
                className={`hover:text-ink-1 transition ${
                  activeMenu === 'contact' ? 'text-ink-1' : ''
                }`}
                aria-expanded={activeMenu === 'contact'}
                aria-haspopup="menu"
              >
                Kontakt
              </button>
            </li>
          </ul>

          <button
            className="md:hidden ml-auto text-ink-1 p-2 -mr-2"
            onClick={() => setActiveMenu((cur) => (cur === null ? 'all' : null))}
            aria-label="Menu"
            aria-expanded={activeMenu !== null}
          >
            {activeMenu !== null ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Both menus rendered side-by-side; only one is open at a time.
            Each maintains its hover handlers so cursor can move between
            the trigger and the panel without flicker. */}
        <NavMenu
          type="projects"
          open={activeMenu === 'projects'}
          currentRoute={route}
          onClose={() => setActiveMenu(null)}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
        <NavMenu
          type="contact"
          open={activeMenu === 'contact'}
          currentRoute={route}
          onClose={() => setActiveMenu(null)}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
        <NavMenu
          type="all"
          open={activeMenu === 'all'}
          currentRoute={route}
          onClose={() => setActiveMenu(null)}
        />
      </nav>

      {/* Apple-style page blur behind the open mega menu */}
      <NavBackdrop open={activeMenu !== null} onClose={() => setActiveMenu(null)} />
    </>
  );
};
