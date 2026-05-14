import { useEffect, useRef, useState } from 'react';
import { IconMenu, IconClose } from '../lib/icons';
import { useRoute, navigate } from '../lib/router';
import { NavMenu, type MenuType } from './NavMenu';
import { NavBackdrop } from './NavBackdrop';
import { useEnterExit } from '../lib/transitions';

export const TopNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType | null>(null);
  const route = useRoute();
  const isHome = route === 'home';
  const mobile = useEnterExit(mobileOpen, 240);

  const closeTimer = useRef<number | null>(null);
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
    setMobileOpen(false);
  }, [route]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (activeMenu !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line-subtle">
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
            className="font-bold tracking-tightish text-base sm:text-lg"
          >
            Robert James Herold
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
            onClick={() => {
              if (activeMenu !== null) {
                setActiveMenu(null);
              } else {
                setMobileOpen((v) => !v);
              }
            }}
            aria-label="Menu"
          >
            {mobileOpen || activeMenu !== null ? <IconClose /> : <IconMenu />}
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

        {mobile.mounted && (
          <ul
            className={`md:hidden absolute left-0 right-0 top-full border-t border-line-subtle px-6 py-4 flex flex-col gap-4 bg-bg/95 backdrop-blur-md origin-top transition-all duration-200 ease-out ${
              mobile.visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <li>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setActiveMenu('projects');
                }}
                className="block text-left text-ink-2 hover:text-ink-1 w-full"
              >
                Arbeitsproben
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setActiveMenu('contact');
                }}
                className="block text-left text-ink-2 hover:text-ink-1 w-full"
              >
                Kontakt
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Apple-style page blur behind the open mega menu */}
      <NavBackdrop open={activeMenu !== null} onClose={() => setActiveMenu(null)} />
    </>
  );
};
