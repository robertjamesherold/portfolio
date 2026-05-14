import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Pill } from './atoms';
import { BackLink } from './casestudies/shared';

const meta: { k: string; v: string }[] = [
  { k: 'ROLLE', v: 'UX/UI Konzeption, Research, Visual Design' },
  { k: 'DAUER', v: '6 Monate (Bachelorarbeit)' },
  { k: 'TOOLS', v: 'Figma, Adobe InDesign' },
  { k: 'METHODEN', v: 'Literaturrecherche, Online-Umfrage (N=121), Heuristische Evaluation, Thematische Analyse' },
  { k: 'ABSCHLUSS', v: 'Bachelor of Arts – Mediendesign,\nIU Internationale Hochschule' },
];

const sliderImages = [
  'assets/Macbook.webp',
  'assets/Macbook-1.webp',
  'assets/Macbook-2.webp',
  'assets/Macbook-3.webp',
];

const SLIDES_VISIBLE = 2;
const COPIES = 3;
const TRANSITION_MS = 500;
const trackImages = Array.from({ length: COPIES }, () => sliderImages).flat();

const ImageSlider = () => {
  const [index, setIndex] = useState(sliderImages.length);
  const [animating, setAnimating] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth / SLIDES_VISIBLE);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const next = () => { setAnimating(true); setIndex(i => i + 1); };
  const prev = () => { setAnimating(true); setIndex(i => i - 1); };

  const handleTransitionEnd = () => {
    if (index >= sliderImages.length * 2) {
      setAnimating(false);
      setIndex(i => i - sliderImages.length);
    } else if (index < sliderImages.length) {
      setAnimating(false);
      setIndex(i => i + sliderImages.length);
    }
  };

  useEffect(() => {
    if (!animating) {
      const id = requestAnimationFrame(() => setAnimating(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animating]);

  return (
    <div className="relative mt-16 sm:mt-20">
      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translate3d(-${index * slideWidth}px, 0, 0)`,
            transition: animating ? `transform ${TRANSITION_MS}ms ease` : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {trackImages.map((src, i) => (
            <div key={i} className="shrink-0 px-3 lg:px-4" style={{ width: slideWidth }}>
              <img src={src} alt="CodeScanner Screen" className="rounded-lg w-full" />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Vorheriges Bild"
        className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 shadow-md flex items-center justify-center text-ink-1 transition"
      >
        <ArrowLeft className="w-5 h-5 " />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Nächstes Bild"
        className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 shadow-md flex items-center justify-center text-ink-1 transition"
      >
        <ArrowRight className="w-5 h-5 " />
      </button>
    </div>
  );
};

export const CodeScannerHero = () => (
  <section className="container-x pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28">
    <BackLink />
    <div className="mt-8 sm:mt-10">
      <Pill>BACHELORARBEIT · UX/UI · 2025</Pill>
    </div>
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 mt-10 sm:mt-12">
    <div>
    <h2 className="display mt-5 sm:mt-6">CodeScanner</h2>
    <p className="text-xl sm:text-2xl text-ink-2 mt-5 max-w-[1000px] leading-snug">
      Ein KI-gestütztes Analyse-Tool für mehr Vertrauen in KI-generierten Code.
    </p>

      <p className="lede mt-16">
        KI-Assistenten wie ChatGPT und Claude generieren heute massenhaft Code – schnell, plausibel und oft überzeugend.
        Doch wer prüft, ob der Code sicher, wartbar und logisch korrekt ist?
        <br /><br />
        CodeScanner ist ein Konzept für ein visuelles Analyse-Tool, das Entwicklerinnen und Entwickler dabei
        unterstützt, KI-generierten Code strukturiert zu prüfen – ohne den Workflow zu unterbrechen und ohne
        Vertrauen blind zu schenken.
      </p>
      </div>
      <div className="flex justify-center items-center">
      <div className="card-base p-7 sm:p-8 flex flex-col gap-4 h-fit">
        {meta.map((m) => (
          <div key={m.k} className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-5 items-start text-[15px] text-ink-2">
            <span className="mono mono--muted text-[11px] tracking-[.16em] text-ink-3">{m.k}</span>
            <span style={{ whiteSpace: 'pre-line' }}>{m.v}</span>
          </div>
        ))}
      </div>
      </div>
    </div>

    <ImageSlider />

  </section>
);
