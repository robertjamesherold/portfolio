import type { PropsWithChildren, ReactNode } from 'react';

type PillTone = 'primary' | 'amber' | 'violet';
const pillTones: Record<PillTone, string> = {
  primary: 'bg-grouped-1 text-[#A8A6FF] border-accent/35',
  amber: 'bg-grouped-1 text-[#F8C557] border-warn/30',
  violet: 'bg-grouped-1 text-[#B79DFB] border-perf/35',
};
export const Pill = ({ tone = 'primary', children }: PropsWithChildren<{ tone?: PillTone }>) => (
  <span className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-md mono text-[11px] sm:text-[12px] tracking-[.18em] border ${pillTones[tone]}`}>
    {children}
  </span>
);

type BtnVariant = 'primary' | 'ghost';
export const Button = ({
  variant = 'primary', href, children, icon, className = '',
}: PropsWithChildren<{ variant?: BtnVariant; href?: string; icon?: ReactNode; className?: string }>) => {
  const base = 'inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-md font-semibold text-lg transition';
  const styles =
    variant === 'primary'
      ? 'bg-accent border border-accent-soft text-white shadow-[0_8px_24px_rgba(97,95,255,.35)] hover:bg-accent-soft'
      : 'border border-line text-ink-1 hover:border-ink-2';
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      {icon}
    </a>
  );
};

export const Card = ({ children, className = '' }: PropsWithChildren<{ className?: string }>) => (
  <div className={`card-base p-7 ${className}`}>{children}</div>
);

export const Eyebrow = ({ num, label }: { num: string; label: string }) => (
  <div className="eyebrow">
    <span className="eyebrow-num">{num}</span>
    <span>{label}</span>
  </div>
);

export const SectionHeading = ({
  num, label, title, sub, className = '',
}: { num: string; label: string; title: string; sub?: string; className?: string }) => (
  <div className={className}>
    <Eyebrow num={num} label={label} />
    <h2 className="title mt-5 sm:mt-6">{title}</h2>
    {sub && <p className="lede mt-4 sm:mt-6 max-w-[1100px]">{sub}</p>}
  </div>
);

export const Subheading = ({ children }: PropsWithChildren) => (
  <h3 className="text-xl sm:text-2xl font-bold mt-16 sm:mt-20 mb-7 sm:mb-8 tracking-tightish">
    {children}
  </h3>
);

export const Caption = ({ children, center = false }: PropsWithChildren<{ center?: boolean }>) => (
  <p className={`text-ink-3 text-sm leading-relaxed mt-6 max-w-[1100px] ${center ? 'mx-auto text-center' : ''}`}>
    {children}
  </p>
);
