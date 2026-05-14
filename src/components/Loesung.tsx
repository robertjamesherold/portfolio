import type { ReactNode } from 'react';
import { SectionHeading, Caption } from './atoms';
import { IconWand, IconShield, IconChart, IconArrowRight } from '../lib/icons';

type StepTone = 'blue' | 'cyan' | 'violet';
const stepStyles: Record<StepTone, { card: string; icon: string }> = {
  blue: { card: 'border-quality/40 bg-gradient-to-br from-quality/12 to-transparent', icon: 'bg-quality/15 text-quality' },
  cyan: { card: 'border-security/40 bg-gradient-to-br from-security/12 to-transparent', icon: 'bg-security/15 text-security' },
  violet: { card: 'border-perf/40 bg-gradient-to-br from-perf/15 to-transparent', icon: 'bg-perf/15 text-perf' },
};

const Step = ({ n, title, tone, icon }: { n: string; title: string; tone: StepTone; icon: ReactNode }) => (
  <div className={`flex-1 min-w-[260px] flex items-center gap-5 p-6 rounded-2xl border ${stepStyles[tone].card}`}>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-none ${stepStyles[tone].icon}`}>{icon}</div>
    <div>
      <span className="mono block text-[11px] tracking-[.16em] text-ink-3 mb-1.5">Schritt {n}</span>
      <h3 className="m-0 text-xl sm:text-2xl font-bold">{title}</h3>
    </div>
  </div>
);

const Item = ({
  ix, ixTone, label, title, lede, chips, img, reverse,
}: {
  ix: string; ixTone: 'blue' | 'cyan' | 'violet'; label: string; title: string; lede: string;
  chips?: { tone: 'green' | 'red' | 'amber' | 'yellow' | 'violet'; text: string }[]; img: string; reverse?: boolean;
}) => {
  const ixStyles = {
    blue: 'bg-quality/20 text-quality',
    cyan: 'bg-security/20 text-security',
    violet: 'bg-perf/20 text-[#B79DFB]',
  } as const;
  const cdotStyles = {
    green: 'bg-low', red: 'bg-crit', amber: 'bg-high', yellow: 'bg-medium', violet: 'bg-perf',
  } as const;
  return (
    <article className={`${reverse ? "lg:grid-cols-[1fr_0.75fr]" : "lg:grid-cols-[0.75fr_1fr]"} grid gap-10 lg:gap-16 items-center mt-16 sm:mt-24 p-6 sm:p-10 lg:p-12 card-base`}>
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="flex gap-3.5 items-center mb-3.5">
          <span className={`inline-flex w-11 h-7 items-center justify-center rounded-md mono text-[13px] font-semibold ${ixStyles[ixTone]}`}>{ix}</span>
          <span className="mono text-[11px] tracking-[.16em] text-ink-3">{label}</span>
        </div>
        <h3 className="text-3xl sm:text-[38px] font-bold tracking-tightish leading-[1.1] m-0 mb-4">{title}</h3>
        <p className="lede">{lede}</p>
        {chips && (
          <div className="flex flex-wrap gap-2.5 mt-6">
            {chips.map((c) => (
              <span key={c.text} className="inline-flex items-center gap-2 px-3.5 py-2 bg-grouped-2 border border-line rounded-full text-[13px] text-ink-2">
                <span className={`w-2 h-2 rounded-full ${cdotStyles[c.tone]}`} />
                {c.text}
              </span>
            ))}
          </div>
        )}
      </div>
      <img src={img} alt={title} className={`rounded-xl border border-line-subtle w-full ${reverse ? 'lg:order-1' : ''}`} />
    </article>
  );
};

export const Loesung = () => (
  <section className="section-y container-x">
    <SectionHeading
      num="06" label="DIE LÖSUNG"
      title="Bereinigen → Absichern → Optimieren"
      sub="Das Herzstück des finalen Konzepts ist ein dreischrittiger Bearbeitungspfad, der Komplexität nicht versteckt, sondern in eine logische Reihenfolge bringt. Statt alle Probleme gleichzeitig anzuzeigen, führt CodeScanner Nutzende vom strukturell Niedrigschwelligen zum funktional Kritischen – und macht jede Entscheidung nachvollziehbar."
    />

    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-5 lg:gap-6 mt-12 mb-12 sm:mb-16">
      <Step n="01" title="Bereinigen" tone="blue" icon={<IconWand width={28} height={28} />} />
      <div className="text-ink-3 self-center rotate-90 lg:rotate-0"><IconArrowRight width={24} height={24} /></div>
      <Step n="02" title="Absichern" tone="cyan" icon={<IconShield width={28} height={28} />} />
      <div className="text-ink-3 self-center rotate-90 lg:rotate-0"><IconArrowRight width={24} height={24} /></div>
      <Step n="03" title="Optimieren" tone="violet" icon={<IconChart width={28} height={28} />} />
    </div>

    <Item ix="6.1" ixTone="blue" label="BEREINIGEN" title="Struktur vor Sicherheit"
      lede="Bevor Sicherheits- oder Performance-Probleme analysiert werden, geht es um die Grundlage: Redundanz, Ballast und Strukturklarheit. Doppelte Dateien, ungenutzte Pakete, inkonsistente Benennungen werden gebündelt und mit dreistufiger Konfidenzklassifikation versehen – damit klar ist, was sicher automatisierbar ist und was menschliches Urteil braucht."
      chips={[
        { tone: 'amber', text: 'Konfidenz · Hoch' },
        { tone: 'yellow', text: 'Konfidenz · Mittel' },
        { tone: 'green', text: 'Konfidenz · Niedrig' },
      ]}
      img="assets/bereinigen.webp"
    />
    <Caption>Die Bereinigungsphase reduziert Komplexität, bevor sicherheits- und qualitätskritische Analysen ansetzen.</Caption>

    <Item ix="6.2" ixTone="cyan" label="ABSICHERN" title="Sicherheitslücken nachvollziehbar machen" reverse
      lede="Pattern-basierte Befundgruppierung mit dateibezogener Detailansicht. Der direkte Vorher-/Nachher-Vergleich macht die Wirkung jeder Änderung nachvollziehbar."
      chips={[
        { tone: 'red', text: 'Severity · Critical' },
        { tone: 'amber', text: 'Severity · High' },
        { tone: 'yellow', text: 'Severity · Medium' },
      ]}
      img="assets/absichern.webp"
    />

    <Item ix="6.3" ixTone="violet" label="OPTIMIEREN" title="Qualität schrittweise verbessern"
      lede="Im Optimierungsbereich liegt der Fokus weniger auf Kritikalität, sondern auf schrittweiser Verbesserung. Bundle-Größe, Performance, Architektur, API-Effizienz – jede Kategorie wird in eigener Tiefe behandelt, mit demselben Vertrauensprinzip wie in den vorherigen Schritten: Vorschläge, keine Vorgaben."
      chips={[
        { tone: 'violet', text: 'Bundle' },
        { tone: 'violet', text: 'Performance' },
        { tone: 'violet', text: 'Architektur' },
      ]}
      img="assets/optimieren.webp"
    />

    <Item ix="6.4" ixTone="blue" label="ÜBERSICHT" title="Der rote Faden" reverse
      lede="Verbindendes Element ist die Projektübersicht: Hier laufen empfohlene nächste Schritte, Sicherheitswarnungen, Bereichszusammenfassungen und der Risikoverlauf zusammen. Nutzende behalten jederzeit den Überblick – und können den geführten Pfad verlassen, ohne ihn zu verlieren."
      img="assets/uebersicht.webp"
    />
    <Caption>Die Übersicht verdichtet alle drei Workflow-Bereiche zu einer einzigen Handlungsempfehlung – der „empfohlene nächste Schritt" als roter Faden durch das Tool.</Caption>
  </section>
);
