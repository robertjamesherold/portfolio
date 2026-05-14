import { Eyebrow, Subheading } from './atoms';

type Swatch = { name: string; hex: string };
type Col = { title: string; swatches: Swatch[] };
const cols: Col[] = [
  { title: 'HINTERGRÜNDE', swatches: [
    { name: 'bg/primary', hex: '#080D12' }, { name: 'bg/secondary', hex: '#0E1118' }, { name: 'bg/tertiary', hex: '#141824' },
  ]},
  { title: 'GRUPPIERUNGEN', swatches: [
    { name: 'bg/grouped-primary', hex: '#11131A' }, { name: 'bg/grouped-secondary', hex: '#171C28' }, { name: 'bg/grouped-tertiary', hex: '#1C2333' },
  ]},
  { title: 'KONTUREN', swatches: [
    { name: 'border/default', hex: '#232B3D' }, { name: 'border/subtle', hex: '#1B2232' },
  ]},
  { title: 'TEXT', swatches: [
    { name: 'text/primary', hex: '#F4F6FB' }, { name: 'text/secondary', hex: '#B8C0D1' }, { name: 'text/tertiary', hex: '#94A3B8' }, { name: 'text/disabled', hex: '#303134' },
  ]},
  { title: 'KATEGORIEN', swatches: [
    { name: 'quality', hex: '#60A5FA' }, { name: 'security', hex: '#22D3EE' }, { name: 'performance', hex: '#8B5CF6' },
  ]},
  { title: 'RISIKO', swatches: [
    { name: 'critical', hex: '#FB2C36' }, { name: 'high', hex: '#FFA609' }, { name: 'medium', hex: '#FFF347' }, { name: 'low', hex: '#22C55E' },
  ]},
  { title: 'SEMANTIK', swatches: [
    { name: 'error', hex: '#FF4A53' }, { name: 'warning', hex: '#FBBF24' }, { name: 'info', hex: '#38BDF8' }, { name: 'success', hex: '#BCF85B' },
  ]},
  { title: 'AKZENT', swatches: [{ name: 'primary', hex: '#615FFF' }] },
];

const spacingScale = [
  ['1','4'],['2','6'],['3','8'],['4','12'],['5','16'],['6','20'],
  ['7','24'],['8','32'],['9','40'],['10','48'],['11','64'],['12','128'],
] as const;

export const DesignSystem = () => (
  <section className="section-y container-x">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <div>
        <Eyebrow num="06" label="DESIGNSYSTEM" />
        <h2 className="title mt-5 sm:mt-6">Konsistenz als Voraussetzung für Vertrauen</h2>
      </div>
      <p className="lede">
        Vertrauen entsteht nicht nur durch klare Sprache – sondern auch durch visuelle Konsistenz. Im finalen Designsystem
        wurden alle Komponenten unter einem gemeinsamen gestalterischen Standard zusammengeführt: Schriftart Figtree,
        ein abgestuftes Farbsystem, semantische Severity-Farben und eine Lucide-Icon-Bibliothek.
        <br /><br />
        Jede zentrale Komponente folgt denselben Regeln für Rundungen, Abstände und strukturelle Anordnung.
        Das macht das System nicht nur ästhetisch kohärent, sondern auch lernbar.
      </p>
    </div>

    <Subheading>Farbsystem</Subheading>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-5">
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
    <div className="card-base">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-6 justify-center items-center w-full">

      <div className="flex flex-col items-center justify-center text-center w-full h-full">
        <div className="text-[100px] lg:text-[140px] xl:text-[150px] font-medium  w-fit leading-none ">Aa Bb</div>
        <div className="bg-white  my-8 h-1 w-full max-w-[33%] "/>
        <div className="text-6xl sm:text-7xl tracking-tightish w-full leading-none">Figtree</div>
      
      </div>
              <div className="flex flex-col w-full justify-center items-center">
      <div className=" flex flex-col w-fit gap-3">
        <p className="text-[28px] sm:text-[32px] leading-[1.12] font-bold m-0">Pagetitle - 32/36 - Bold</p>
        <p className="text-[20px] leading-[1.2] font-bold m-0">Cardtitle - 20/24 - Bold</p>
        <p className="text-[18px] leading-[1.5] m-0 text-ink-2">Metrics - 18/27 - Regular</p>
        <p className="text-base leading-[1.5] m-0 font-bold">Body-Bold - 16/24 - Bold</p>
        <p className="text-base leading-[1.5] m-0 text-ink-2">Body-Regular - 16/24 - Regular</p>
        <p className="text-[13px] leading-[1.5] m-0 font-bold">Chips Bold - 13/19.5 - Bold</p>
        <p className="text-[13px] leading-[1.5] m-0 font-medium text-ink-2">Chips Medium - 13/19.5 - Medium</p>
        <p className="text-[13px] leading-[1.5] m-0 text-ink-2">Chips - 13/19.5 - Regular</p>
      </div>
        </div>
        </div>

    </div>

    <Subheading>Komponentengestaltung</Subheading>
    <div className="grid lg:grid-cols-[2fr_1.2fr_1.2fr] gap-6">
      <div className="card-base p-7">
        <h4 className="m-0 mb-6 text-sm text-ink-3 font-medium">Spacing Scale</h4>
        <div className="grid grid-cols-12 gap-2 items-end h-40">
          {spacingScale.map(([n, px]) => (
            <div key={n} className="flex flex-col items-center gap-1.5 justify-end h-full">
              <div className="w-[18px] bg-accent-soft rounded-sm" style={{ height: `${Math.min(parseInt(px), 128)}px` }} />
              <b className="text-[13px] font-semibold mt-1">{n}</b>
              <span className="mono text-[10px] text-ink-3">{px}px</span>
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
              <div className="w-[60px] h-[60px] bg-grouped-3 border border-line rounded-lg" style={{ boxShadow: s.sh }} />
              <span className="mono text-[11px] text-ink-3">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
