import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { IconClose } from '../lib/icons';
import { useEnterExit } from '../lib/transitions';

export type LightboxItem = { src: string; alt: string };
export type LightboxState = { items: LightboxItem[]; index: number } | null;

export const Lightbox = ({
  state,
  onClose,
  onIndexChange,
}: {
  state: LightboxState;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) => {
  const hasMany = !!state && state.items.length > 1;
  const { mounted, visible } = useEnterExit(state !== null, 240);
  // Cache last seen state so the exit animation has something to render
  const cached = useRef<LightboxState>(state);
  if (state) cached.current = state;
  const display = state ?? cached.current;

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' && hasMany) {
        onIndexChange((state.index + 1) % state.items.length);
      } else if (e.key === 'ArrowLeft' && hasMany) {
        onIndexChange((state.index - 1 + state.items.length) % state.items.length);
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [state, hasMany, onClose, onIndexChange]);

  if (!mounted || !display) return null;

  const current = display.items[display.index];
  const goPrev = () =>
    onIndexChange((display.index - 1 + display.items.length) % display.items.length);
  const goNext = () =>
    onIndexChange((display.index + 1) % display.items.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-200 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-bg/90"
        style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Schließen"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-grouped-2/80 border border-line text-ink-1 flex items-center justify-center hover:bg-grouped-3 hover:scale-105 active:scale-95 z-20"
      >
        <IconClose />
      </button>

      {hasMany && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Vorheriges Bild"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-grouped-2/80 border border-line text-ink-1 flex items-center justify-center hover:bg-grouped-3 hover:scale-105 active:scale-95 z-20"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Nächstes Bild"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-grouped-2/80 border border-line text-ink-1 flex items-center justify-center hover:bg-grouped-3 hover:scale-105 active:scale-95 z-20"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 mono text-[11px] tracking-[.22em] text-ink-3 uppercase bg-grouped-2/80 border border-line rounded-full px-4 py-2 z-20">
            {display.index + 1} / {display.items.length}
          </div>
        </>
      )}

      <div
        className={`relative max-w-[95vw] max-h-[92vh] flex items-center justify-center px-4 sm:px-20 transition-transform duration-300 ease-out ${
          visible ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[88vh] w-auto h-auto object-contain rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          data-no-zoom
        />
      </div>
    </div>
  );
};
