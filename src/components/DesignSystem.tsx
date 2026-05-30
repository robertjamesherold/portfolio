import { Eyebrow, ResponsiveImg, Subheading } from './atoms';

type Swatch = { name: string; hex: string };
type Col = { title: string; swatches: Swatch[] };
const cols: Col[] = [
  { title: 'BG', swatches: [
    { name: 'bg/primary', hex: '#080D12' }, { name: 'bg/secondary', hex: '#0E1118' }, { name: 'bg/tertiary', hex: '#141824' },
  ]},
  { title: 'GRP', swatches: [
    { name: 'bg/grouped-primary', hex: '#11131A' }, { name: 'bg/grouped-secondary', hex: '#171C28' }, { name: 'bg/grouped-tertiary', hex: '#1C2333' },
  ]},
  { title: 'BORDER', swatches: [
    { name: 'border/default', hex: '#232B3D' }, { name: 'border/subtle', hex: '#1B2232' },
  ]},
  { title: 'TEXT', swatches: [
    { name: 'text/primary', hex: '#F4F6FB' }, { name: 'text/secondary', hex: '#B8C0D1' }, { name: 'text/tertiary', hex: '#94A3B8' }, { name: 'text/disabled', hex: '#303134' },
  ]},
  { title: 'CATEGORY', swatches: [
    { name: 'quality', hex: '#60A5FA' }, { name: 'security', hex: '#22D3EE' }, { name: 'performance', hex: '#8B5CF6' },
  ]},
  { title: 'RISK', swatches: [
    { name: 'critical', hex: '#FB2C36' }, { name: 'high', hex: '#FFA609' }, { name: 'medium', hex: '#FFF347' }, { name: 'low', hex: '#22C55E' },
  ]},
  { title: 'SEMANTIC', swatches: [
    { name: 'error', hex: '#FF4A53' }, { name: 'warning', hex: '#FBBF24' }, { name: 'info', hex: '#38BDF8' }, { name: 'success', hex: '#BCF85B' },
  ]},
  { title: 'ACCENT', swatches: [{ name: 'primary', hex: '#615FFF' }] },
];

const spacingScale = [
  ['1','4'],['2','6'],['3','8'],['4','12'],['5','16'],['6','20'],
  ['7','24'],['8','32'],['9','40'],['10','48'],['11','64'],['12','128'],
] as const;

const typeSamples: { text: string; className: string }[] = [
  { text: 'Pagetitle - 32/36 - Bold',       className: 'text-[28px] sm:text-[32px] leading-[1.12] font-bold' },
  { text: 'Cardtitle - 20/24 - Bold',       className: 'text-[20px] leading-[1.2] font-bold' },
  { text: 'Metrics - 18/27 - Regular',      className: 'text-[18px] leading-[1.5] text-ink-2' },
  { text: 'Body-Bold - 16/24 - Bold',       className: 'text-base leading-[1.5] font-bold' },
  { text: 'Body-Regular - 16/24 - Regular', className: 'text-base leading-[1.5] text-ink-2' },
  { text: 'Chips Bold - 13/19.5 - Bold',    className: 'text-[13px] leading-[1.5] font-bold' },
  { text: 'Chips Medium - 13/19.5 - Medium',className: 'text-[13px] leading-[1.5] font-medium text-ink-2' },
  { text: 'Chips - 13/19.5 - Regular',      className: 'text-[13px] leading-[1.5] text-ink-2' },
];

export const DesignSystem = () => (
  <section className="section-y container-x reveal">
    <div className="grid xl:grid-cols-2 gap-10 xl:gap-20 items-start">
      <div>
        <Eyebrow num="07" label="DESIGNSYSTEM" />
        <h2 className="title mt-5 sm:mt-6">Konsistenz als Voraussetzung für Vertrauen</h2>
      </div>
      <div className="flex flex-col gap-5 lede">
        <p className="m-0">
          Vertrauen entsteht nicht nur durch klare Sprache – sondern auch durch visuelle Konsistenz. Im finalen Designsystem
          wurden alle Komponenten unter einem gemeinsamen gestalterischen Standard zusammengeführt: Schriftart Figtree,
          ein abgestuftes Farbsystem aus Hintergrund-, Gruppen-, Border- und Vordergrundfarben sowie semantische Severity-Farben,
          eine Lucide-Icon-Bibliothek für lineare, wiedererkennbare Symbolik.
        </p>
        <p className="m-0">
          Jede zentrale Komponente – Topbar, Sidebar, Modulkarten, Risiko-Karten und Pattern-Karten, Akkordeons, Codekarten,
          Buttons – folgt denselben Regeln für Rundungen, Abstände und strukturelle Anordnung. Das macht das System nicht
          nur ästhetisch kohärent, sondern auch lernbar: Wer einen Bildschirm verstanden hat, versteht auch die anderen.
        </p>
      </div>
    </div>

    <Subheading>Farbsystem</Subheading>
    <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-8 gap-4 lg:gap-5">
      {cols.map((c) => (
        <div key={c.title} className="flex flex-col gap-2">
          <span className="mono text-[10px] uppercase tracking-[.14em] text-ink-3 mb-2">{c.title}</span>
          {c.swatches.map((s) => (
            <div key={s.name} className="flex flex-col gap-1.5">
              <div className="w-full aspect-[1.4/1] rounded-md border border-line-subtle" style={{ background: s.hex }} />
              <span className="text-[12px] text-ink-2 leading-snug">
                {s.name}
                <br />
                <span className="mono text-[10.5px] text-ink-3">{s.hex}</span>
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>

    <Subheading>Typografie</Subheading>
    <div className="card-base p-7 sm:p-10 lg:p-12 xl:p-14">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 xl:gap-16 items-center">
        {/* Left: type hierarchy */}
        <div className="flex flex-col gap-3">
          {typeSamples.map((s) => (
            <p key={s.text} className={`m-0 ${s.className}`}>{s.text}</p>
          ))}
        </div>

        {/* Right: Aa Bb + Figtree + alphabet + numbers */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
          <div className="text-[80px] sm:text-[110px] lg:text-[88px] xl:text-[130px] 2xl:text-[150px] font-medium leading-none">Aa Bb</div>
          <div className="bg-white/90 h-px w-1/3 my-2 sm:my-3" />
          <div className="text-5xl sm:text-6xl lg:text-5xl xl:text-7xl tracking-tightish leading-none">Figtree</div>
          <p className="m-0 mt-4 sm:mt-5 text-sm sm:text-base lg:text-sm xl:text-lg leading-[1.9] tracking-[.06em] sm:tracking-[.08em]">
            A&thinsp;a B&thinsp;b C&thinsp;c D&thinsp;d E&thinsp;e F&thinsp;f G&thinsp;g H&thinsp;h I&thinsp;i J&thinsp;j
            <br />
            K&thinsp;k L&thinsp;l M&thinsp;m N&thinsp;n O&thinsp;o P&thinsp;p Q&thinsp;q R&thinsp;r S&thinsp;s T&thinsp;t
            <br />
            U&thinsp;u V&thinsp;v W&thinsp;w X&thinsp;x Y&thinsp;y Z&thinsp;z
          </p>
          <p className="m-0 text-sm sm:text-base lg:text-sm xl:text-lg tracking-[.16em] sm:tracking-[.18em]">0 1 2 3 4 5 6 7 8 9</p>
        </div>
      </div>

      <p className="text-ink-2 text-[15px] sm:text-base leading-relaxed mt-10 sm:mt-12 mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <Subheading>Komponentengestaltung</Subheading>
    <div className="grid sm:grid-cols-2 xl:grid-cols-[2fr_1.2fr_1.2fr] gap-6">
      <div className="card-base p-7 sm:col-span-2 xl:col-span-1">
        <h4 className="m-0 mb-6 text-sm text-ink-3 font-medium">Spacing Scale</h4>
        <div className="grid grid-cols-12 gap-2 items-end h-32">
          {spacingScale.map(([n, px]) => (
            <div key={n} className="flex justify-center items-end h-full min-w-0">
              <div className="w-[18px] bg-accent-soft rounded-sm" style={{ height: `${Math.min(parseInt(px), 128)}px` }} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-2 mt-3">
          {spacingScale.map(([n, px]) => (
            <div key={n} className="flex flex-col items-center gap-0.5 min-w-0">
              <b className="text-[13px] font-semibold">{n}</b>
              <span className="mono text-[9px] sm:text-[10px] text-ink-3 tracking-tight">
                {px}<span className="hidden sm:inline">px</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="card-base p-7">
        <h4 className="m-0 mb-6 text-sm text-ink-3 font-medium">Border Radius</h4>
        <div className="flex gap-4 items-end justify-around h-40 pt-4">
          {[
            { l: 'small', px: '4px', br: '4px' },
            { l: 'medium', px: '5px', br: '5px' },
            { l: 'large', px: '10px', br: '10px' },
            { l: 'round', px: '9999px', br: '50%' },
          ].map((r) => (
            <div key={r.l} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-accent/85" style={{ borderRadius: r.br }} />
              <span className="mono text-[11px] text-ink-3 text-center leading-snug">{r.l}<br />{r.px}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card-base p-7">
        <h4 className="m-0 mb-6 text-sm text-ink-3 font-medium">Shadows</h4>
        <div className="flex gap-4 items-end justify-around h-40 pt-4">
          {[
            { l: 'small', sh: '0 1px 2px rgba(0,0,0,.4)' },
            { l: 'medium', sh: '0 4px 8px rgba(0,0,0,.5)' },
            { l: 'large', sh: '0 10px 24px rgba(0,0,0,.6)' },
          ].map((s) => (
            <div key={s.l} className="flex flex-col items-center gap-3.5">
              <div className="w-[60px] h-[60px] bg-accent/85 border border-line rounded-lg" style={{ boxShadow: s.sh }} />
              <span className="mono text-[11px] text-ink-3">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mt-8">
      <div className="card-base p-7 sm:p-8 flex flex-col gap-5">
        <h4 className="m-0 text-sm text-ink-3 font-medium">Sidebar – erweitert & kompakt</h4>
        <ResponsiveImg
          base="/assets/codescanner/sidebar"
          sizes="(min-width: 1024px) 45vw, 100vw"
          alt="Sidebar – annotierte Komponentenübersicht im erweiterten und kompakten Zustand"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="card-base p-7 sm:p-8 flex flex-col gap-5">
        <h4 className="m-0 text-sm text-ink-3 font-medium">Topbar – Sicherheitsbereich, annotiert</h4>
        <ResponsiveImg
          base="/assets/codescanner/topbar"
          sizes="(min-width: 1024px) 45vw, 100vw"
          alt="Topbar – annotierter Sicherheitsbereich mit Back-Button, Titel, Severity-Badge und Aktionen"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  </section>
);
