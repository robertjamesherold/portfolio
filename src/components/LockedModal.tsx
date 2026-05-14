import { useEffect } from 'react';
import { IconClose } from '../lib/icons';
import { useEnterExit } from '../lib/transitions';

export const LockedModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { mounted, visible } = useEnterExit(open, 220);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="locked-modal-title"
      className={`fixed inset-0 z-[110] flex items-center justify-center px-5 transition-opacity duration-200 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-bg/85"
        style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
      />

      <div
        className={`relative w-full max-w-[560px] rounded-2xl border border-accent/30 p-8 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] transition-all duration-300 ease-out ${
          visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          background:
            'radial-gradient(ellipse 600px 300px at 50% 0%, rgba(97,95,255,.18), transparent 70%), #11131A',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Schließen"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-grouped-2/80 border border-line text-ink-1 flex items-center justify-center hover:bg-grouped-3 hover:scale-105 active:scale-95"
        >
          <IconClose />
        </button>

        <div className="mono text-[11px] tracking-[.22em] text-accent-soft uppercase">
          Projekt gesperrt
        </div>

        <h3
          id="locked-modal-title"
          className="text-2xl sm:text-3xl font-bold tracking-tightish mt-3"
        >
          CodeScanner ist noch nicht freigegeben.
        </h3>

        <p className="text-ink-2 text-[15px] sm:text-base leading-relaxed mt-5">
          Die Case Study zur Bachelorarbeit kann derzeit nicht angezeigt werden, da
          die Arbeit aktuell noch in der Benotung ist und bis zum Abschluss des
          Verfahrens nicht öffentlich gemacht werden darf.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-accent/10 border border-accent/30">
          <span className="mono text-[11px] tracking-[.22em] text-accent-soft uppercase">
            Freigabe
          </span>
          <span className="text-ink-1 font-semibold">28. Mai 2026</span>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-line text-ink-1 hover:border-ink-2 hover:scale-[1.02] active:scale-[0.98] text-[14px] font-semibold"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
};
