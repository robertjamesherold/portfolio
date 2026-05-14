import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { works } from '../lib/works';
import { navigate, type Route } from '../lib/router';
import { IconArrowRight, IconSend, IconPhone, IconDownload } from '../lib/icons';
import { useEnterExit } from '../lib/transitions';

export type MenuType = 'projects' | 'contact';

const stagger = (i: number): CSSProperties =>
  ({ ['--i' as string]: i } as CSSProperties);

/* ─────── Projects content ─────── */

const MiniTile = ({
  workIndex,
  active,
  onSelect,
  index,
}: {
  workIndex: number;
  active: boolean;
  onSelect: () => void;
  index: number;
}) => {
  const w = works[workIndex];
  return (
    <a
      href={w.href}
      aria-current={active ? 'page' : undefined}
      tabIndex={active ? -1 : undefined}
      onClick={(e) => {
        e.preventDefault();
        if (active) {
          onSelect();
          return;
        }
        if (w.locked) {
          window.dispatchEvent(new CustomEvent('show-locked-modal'));
          return;
        }
        navigate(w.href);
        onSelect();
      }}
      style={stagger(index)}
      className={`menu-item-stagger group relative flex flex-col rounded-xl overflow-hidden border transition ${
        active
          ? 'border-line-subtle bg-grouped-1 opacity-50 cursor-default pointer-events-none'
          : 'border-line-subtle bg-grouped-1 hover:border-line hover:-translate-y-0.5'
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-grouped-2 border-b border-line-subtle">
        <img
          src={w.image.src}
          alt={w.image.alt}
          loading="lazy"
          decoding="async"
          data-no-zoom
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
            active ? 'grayscale' : 'group-hover:scale-[1.04]'
          }`}
          style={{ objectPosition: w.image.objectPosition ?? 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="mono text-[9px] tracking-[.22em] uppercase bg-bg/70 backdrop-blur-md text-ink-1 border border-line/60 rounded-full px-2.5 py-1">
            {w.year}
          </span>
          {w.locked && (
            <span className="mono text-[9px] tracking-[.22em] uppercase bg-accent/15 backdrop-blur-md text-[#A8A6FF] border border-accent/40 rounded-full px-2.5 py-1">
              Gesperrt
            </span>
          )}
        </div>
        {active && (
          <span className="absolute top-3 right-3 mono text-[9px] tracking-[.22em] uppercase bg-bg/80 text-ink-1 border border-line rounded-full px-2.5 py-1">
            aktuelle Seite
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1.5">
        <div className="text-[15px] font-bold tracking-tightish text-ink-1">{w.title}</div>
        <div className="mono text-[10px] tracking-[.18em] text-ink-3 uppercase line-clamp-1">
          {w.context}
        </div>
      </div>
    </a>
  );
};

const ProjectsContent = ({
  currentRoute,
  onClose,
}: {
  currentRoute: Route;
  onClose: () => void;
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        navigate('/');
        onClose();
      }}
      style={stagger(0)}
      className="menu-item-stagger group relative sm:row-span-2 rounded-xl overflow-hidden border border-line-subtle hover:border-accent/50 transition flex flex-col justify-between min-h-[260px] p-6"
      css-bg=""
      data-no-zoom
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 400px 200px at 50% 100%, rgba(97,95,255,.18), transparent 70%), #11131A',
        }}
      />
      <div>
        <div className="mono text-[10px] tracking-[.22em] text-accent-soft uppercase">
          Übersicht
        </div>
        <div className="text-2xl sm:text-3xl font-bold tracking-tightish mt-3 leading-tight">
          Zurück zur<br />Startseite
        </div>
        <p className="text-ink-2 text-[14px] leading-relaxed mt-4 max-w-[260px]">
          Alle Fallstudien, Hero und Kontakt auf einen Blick.
        </p>
      </div>
      <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent-soft group-hover:translate-x-1 transition-transform">
        Zur Übersicht
        <IconArrowRight width={16} height={16} />
      </span>
    </a>

    {/* workIndex updated: CodeScanner (was index 0) is disabled, so indices shifted */}
    <MiniTile workIndex={0} active={currentRoute === 'villa-oliveto'} onSelect={onClose} index={2} />
    <MiniTile workIndex={1} active={currentRoute === 'garden-connect'} onSelect={onClose} index={3} />
    <MiniTile workIndex={2} active={currentRoute === 'schuelerhilfe'} onSelect={onClose} index={4} />
  </div>
);

/* ─────── Contact content ─────── */

const ContactCard = ({
  href,
  icon,
  label,
  value,
  hint,
  index,
  download,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  hint: string;
  index: number;
  download?: boolean;
}) => (
  <a
    href={href}
    download={download}
    style={stagger(index)}
    className="menu-item-stagger group relative flex flex-col rounded-xl overflow-hidden border border-line-subtle bg-grouped-1 hover:border-accent/50 hover:-translate-y-0.5 transition p-6 sm:p-7 min-h-[180px]"
  >
    <div className="flex items-start justify-between">
      <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent-soft">
        {icon}
      </span>
      <span className="text-ink-3 group-hover:text-accent-soft group-hover:translate-x-1 transition-all">
        <IconArrowRight width={18} height={18} />
      </span>
    </div>
    <div className="mt-5 mono text-[10px] tracking-[.22em] text-ink-3 uppercase">{label}</div>
    <div className="text-lg sm:text-xl font-bold tracking-tightish mt-1.5 break-all">
      {value}
    </div>
    <div className="text-ink-3 text-[13px] mt-3">{hint}</div>
  </a>
);

const ContactContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
    <div
      style={stagger(0)}
      className="menu-item-stagger relative rounded-xl overflow-hidden border border-line-subtle p-6 sm:p-7 flex flex-col justify-between min-h-[220px]"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 400px 200px at 50% 100%, rgba(97,95,255,.18), transparent 70%), #11131A',
        }}
      />
      <div>
        <div className="mono text-[10px] tracking-[.22em] text-accent-soft uppercase">
          Kontakt
        </div>
        <div className="text-xl sm:text-2xl font-bold tracking-tightish mt-3 leading-tight">
          Lass uns reden.
        </div>
        <p className="text-ink-2 text-[13px] leading-relaxed mt-3">
          Projektanfragen, Fragen zu meiner Arbeit oder einfach ein Austausch — ich freue mich.
        </p>
      </div>
      <div className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase">
        Antwort meist innerhalb 24h
      </div>
    </div>

    <ContactCard
      href="mailto:robertjamesherold@icloud.com"
      icon={<IconSend width={20} height={20} />}
      label="E-Mail"
      value="robertjamesherold@icloud.com"
      hint="Ideal für Projektanfragen und Details."
      index={1}
    />
    <ContactCard
      href="tel:+4915161660444"
      icon={<IconPhone width={20} height={20} />}
      label="Telefon"
      value="+49 151 61660444"
      hint="Für ein erstes Gespräch oder schnelle Rückfragen."
      index={2}
    />
    <ContactCard
      href="/cv-robert-james-herold.pdf"
      icon={<IconDownload width={20} height={20} />}
      label="Lebenslauf"
      value="CV herunterladen"
      hint="PDF zum Weiterleiten an HR oder Entscheider."
      index={3}
      download
    />
  </div>
);

/* ─────── Shared panel shell ─────── */

export const NavMenu = ({
  type,
  open,
  currentRoute,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  type: MenuType;
  open: boolean;
  currentRoute: Route;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { mounted, visible } = useEnterExit(open, 280);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  const label = type === 'projects' ? 'Arbeitsproben' : 'Kontakt';

  const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

  return (
    <div
      ref={ref}
      onMouseEnter={() => isDesktop() && onMouseEnter?.()}
      onMouseLeave={() => isDesktop() && onMouseLeave?.()}
      className={`absolute left-0 right-0 top-full border-t border-line-subtle bg-bg/95 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.4)] origin-top transition-all duration-300 h-[calc(100dvh-73px)] md:h-auto md:max-h-[75vh] overflow-y-auto overscroll-contain ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      <div className="mx-auto max-w-[1760px] px-6 sm:px-10 lg:px-20 py-8 sm:py-10">
        <div className="flex items-baseline justify-between mb-6">
          <div className="mono text-[11px] tracking-[.22em] text-ink-3 uppercase">
            {label}
          </div>
          <div className="hidden md:block mono text-[11px] tracking-[.22em] text-ink-3 uppercase">
            ESC zum Schließen
          </div>
        </div>

        {type === 'projects' ? (
          <ProjectsContent currentRoute={currentRoute} onClose={onClose} />
        ) : (
          <ContactContent />
        )}
      </div>
    </div>
  );
};
