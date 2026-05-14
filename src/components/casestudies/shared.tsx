import type { PropsWithChildren, ReactNode } from 'react';
import { Pill } from '../atoms';
import { IconArrowRight } from '../../lib/icons';
import { navigate } from '../../lib/router';

export const BackLink = () => (
  <a
    href="/"
    onClick={(e) => {
      e.preventDefault();
      navigate('/');
    }}
    className="inline-flex items-center gap-2 mono text-[11px] sm:text-[12px] tracking-[.18em] text-ink-3 hover:text-ink-1 transition uppercase"
  >
    <span aria-hidden>←</span>
    <span>Zur Übersicht</span>
  </a>
);

type MetaRow = { k: string; v: string };

export const CaseStudyHero = ({
  tag,
  title,
  subline,
  meta,
  visual,
}: {
  tag: string;
  title: string;
  subline: string;
  meta: MetaRow[];
  visual?: ReactNode;
}) => (
  <section className="container-x pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
    <BackLink />
    <div className="mt-8 sm:mt-10">
      <Pill>{tag}</Pill>
    </div>
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 mt-10 sm:mt-12">
      <div>
        <h1 className="display mt-2">{title}</h1>
        <p className="text-xl sm:text-2xl text-ink-2 mt-6 max-w-[1000px] leading-snug">
          {subline}
        </p>
      </div>
      <div className="flex justify-center items-start">
        <div className="card-base p-7 sm:p-8 flex flex-col gap-4 h-fit w-full">
          {meta.map((m) => (
            <div
              key={m.k}
              className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-5 items-start text-[15px] text-ink-2"
            >
              <span className="mono mono--muted text-[11px] tracking-[.16em] text-ink-3">{m.k}</span>
              <span style={{ whiteSpace: 'pre-line' }}>{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    {visual && <div className="mt-12 sm:mt-16">{visual}</div>}
  </section>
);

export const Placeholder = ({
  label,
  ratio = '16/9',
  hint,
  className = '',
}: {
  label: string;
  ratio?: string;
  hint?: string;
  className?: string;
}) => (
  <div
    className={`relative rounded-2xl overflow-hidden border border-dashed border-line bg-grouped-1 flex flex-col items-center justify-center text-center px-6 ${className}`}
    style={{ aspectRatio: ratio }}
  >
    <div
      className="absolute inset-0 opacity-40"
      style={{
        background:
          'radial-gradient(ellipse 600px 300px at 50% 0%, rgba(97,95,255,.18), transparent 70%), radial-gradient(ellipse 600px 300px at 50% 100%, rgba(139,92,246,.12), transparent 70%)',
      }}
    />
    <div className="relative">
      <div className="mono text-[10px] sm:text-[11px] tracking-[.22em] text-accent-soft uppercase">
        Bild folgt
      </div>
      <div className="mt-3 text-base sm:text-lg font-semibold text-ink-1 max-w-[520px]">
        {label}
      </div>
      {hint && (
        <div className="mt-2 text-xs sm:text-[13px] text-ink-3 max-w-[520px]">
          {hint}
        </div>
      )}
    </div>
  </div>
);

export const CaseStudySection = ({
  num,
  label,
  title,
  intro,
  children,
}: PropsWithChildren<{ num: string; label: string; title: string; intro?: string }>) => (
  <section className="container-x py-16 sm:py-24 lg:py-32 reveal">
    <div className="eyebrow">
      <span className="eyebrow-num">{num}</span>
      <span>{label}</span>
    </div>
    <h2 className="title mt-5 sm:mt-6 max-w-[1100px]">{title}</h2>
    {intro && <p className="lede mt-6 max-w-[900px]">{intro}</p>}
    {children && <div className="mt-12 sm:mt-16">{children}</div>}
  </section>
);

export const Caption = ({ children, center = false }: PropsWithChildren<{ center?: boolean }>) => (
  <p
    className={`text-ink-3 text-sm leading-relaxed mt-5 max-w-[1100px] ${
      center ? 'mx-auto text-center' : ''
    }`}
  >
    {children}
  </p>
);

export const NextProjectCTA = () => (
  <section className="container-x py-20 sm:py-28 lg:py-32 border-t border-line-subtle reveal">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish">
        Mehr Projekte ansehen
      </h3>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
        className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-base border border-line text-ink-1 hover:border-ink-2 transition"
      >
        <span>Zur Übersicht</span>
        <IconArrowRight />
      </a>
    </div>
  </section>
);
