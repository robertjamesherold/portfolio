import { useEffect, useState } from 'react';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { WorkGrid } from './components/WorkGrid';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
// CodeScanner case study is currently disabled (bachelor thesis still being graded
// until 2026-05-28). Re-enable by uncommenting the route type, imports, and routing logic below.
// import { CodeScannerCaseStudy } from './components/casestudies/CodeScanner';
import { VillaOliveto } from './components/casestudies/VillaOliveto';
import { GardenConnect } from './components/casestudies/GardenConnect';
import { Schuelerhilfe } from './components/casestudies/Schuelerhilfe';
import { Impressum } from './components/Impressum';
import { Datenschutz } from './components/Datenschutz';
import { Lightbox, type LightboxState } from './components/Lightbox';
// import { LockedModal } from './components/LockedModal'; // Disabled with CodeScanner
import { useRoute } from './lib/router';

const Home = () => (
  <>
    <Hero />
    <WorkGrid />
    <About />
    <CTA />
  </>
);

const isZoomable = (im: HTMLImageElement) => {
  if (im.dataset.noZoom !== undefined) return false;
  if (im.closest('[data-no-zoom]')) return false;
  if (im.closest('nav')) return false;
  return true;
};

export default function App() {
  const route = useRoute();
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  // const [lockedOpen, setLockedOpen] = useState(false); // Disabled with CodeScanner

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // CodeScanner handling disabled until grading is complete (2026-05-28)
  // useEffect(() => {
  //   if (route === 'codescanner') {
  //     setLockedOpen(true);
  //     window.location.hash = '/';
  //   }
  // }, [route]);

  // Locked modal event listener disabled with CodeScanner
  // useEffect(() => {
  //   const onLocked = () => setLockedOpen(true);
  //   window.addEventListener('show-locked-modal', onLocked);
  //   return () => window.removeEventListener('show-locked-modal', onLocked);
  // }, []);

  // Scroll-reveal: any element with .reveal in <main> fades up when entering viewport.
  // Uses one shared IntersectionObserver and a MutationObserver to pick up new
  // elements added on route change.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    );

    const main = document.querySelector('main');
    if (!main) return;

    const scan = () => {
      main.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((el) => {
        io.observe(el);
      });
    };

    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(main, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  // Lightbox click delegation
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || target.tagName !== 'IMG') return;
      const img = target as HTMLImageElement;
      if (!isZoomable(img)) return;

      const group = img.closest('section') ?? img.closest('main') ?? document.body;
      const allImgs = Array.from(group.querySelectorAll('img')).filter(isZoomable);
      const items = allImgs.map((im) => ({
        src: im.currentSrc || im.src,
        alt: im.alt || '',
      }));
      const index = allImgs.indexOf(img);
      if (index === -1 || items.length === 0) return;

      e.preventDefault();
      setLightbox({ items, index });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <TopNav />
      <main>
        {/* Keyed wrapper triggers the route-enter animation on every change */}
        <div key={route} className="route-enter">
          {route === 'home' && <Home />}
          {/* {route === 'codescanner' && <CodeScannerCaseStudy />} */}
          {route === 'villa-oliveto' && <VillaOliveto />}
          {route === 'garden-connect' && <GardenConnect />}
          {route === 'schuelerhilfe' && <Schuelerhilfe />}
          {route === 'impressum' && <Impressum />}
          {route === 'datenschutz' && <Datenschutz />}
          {route !== 'home' && route !== 'impressum' && route !== 'datenschutz' && <CTA />}
        </div>
      </main>
      <Footer />
      <Lightbox
        state={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={(next) =>
          setLightbox((s) => (s ? { ...s, index: next } : s))
        }
      />
      {/* <LockedModal open={lockedOpen} onClose={() => setLockedOpen(false)} /> */}
    </>
  );
}
