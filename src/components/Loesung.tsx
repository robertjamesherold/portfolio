import type { ReactNode } from 'react';
import { SectionHeading, Caption, ResponsiveImg } from './atoms';
import { IconWand, IconShield, IconChart, IconArrowRight } from '../lib/icons';

type StepTone = 'blue' | 'cyan' | 'violet';
const stepStyles: Record<StepTone, { card: string; icon: string }> = {
  blue:   { card: 'border-quality/40 bg-gradient-to-br from-quality/12 to-transparent', icon: 'bg-quality/15 text-quality' },
  cyan:   { card: 'border-security/40 bg-gradient-to-br from-security/12 to-transparent', icon: 'bg-security/15 text-security' },
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

type IxTone = 'blue' | 'cyan' | 'violet';
const ixStyles: Record<IxTone, string> = {
  blue:   'bg-quality/20 text-quality',
  cyan:   'bg-security/20 text-security',
  violet: 'bg-perf/20 text-[#B79DFB]',
};

const ItemHeading = ({ ix, ixTone, label, title }: { ix: string; ixTone: IxTone; label: string; title: string }) => (
  <>
    <div className="flex gap-3.5 items-center mb-3.5">
      <span className={`inline-flex w-11 h-7 items-center justify-center rounded-md mono text-[13px] font-semibold ${ixStyles[ixTone]}`}>{ix}</span>
      <span className="mono text-[11px] tracking-[.16em] text-ink-3">{label}</span>
    </div>
    <h3 className="text-3xl sm:text-[38px] font-bold tracking-tightish leading-[1.1] m-0 mb-4">{title}</h3>
  </>
);

const Item = ({
  ix, ixTone, label, title, lede, imgBase, reverse,
}: {
  ix: string; ixTone: IxTone; label: string; title: string; lede: string;
  imgBase: string; reverse?: boolean;
}) => (
  <article className={`${reverse ? 'lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_0.85fr]' : 'lg:grid-cols-[1fr_1fr] xl:grid-cols-[0.85fr_1fr]'} grid gap-10 lg:gap-16 items-center mt-20 sm:mt-28 reveal`}>
    <div className={reverse ? 'lg:order-2' : ''}>
      <ItemHeading ix={ix} ixTone={ixTone} label={label} title={title} />
      <p className="lede">{lede}</p>
    </div>
    <ResponsiveImg
      base={imgBase}
      sizes="(min-width: 1024px) 55vw, 100vw"
      alt={title}
      className={`rounded-xl border border-line-subtle w-full ${reverse ? 'lg:order-1' : ''}`}
    />
  </article>
);

export const Loesung = () => (
  <section className="section-y container-x reveal">
    <SectionHeading
      num="05" label="DIE LÖSUNG"
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

    <Item ix="5.1" ixTone="blue" label="BEREINIGEN" title="Struktur vor Sicherheit"
      lede="Bevor Sicherheits- oder Performance-Probleme analysiert werden, geht es um die Grundlage: Redundanz, Ballast und Strukturklarheit. Doppelte Dateien, ungenutzte Pakete, inkonsistente Benennungen werden gebündelt und mit dreistufiger Konfidenzklassifikation versehen – damit klar ist, was sicher automatisierbar ist und was menschliches Urteil braucht."
      imgBase="assets/codescanner/prototyp_01"
    />
    <Caption>Die Bereinigungsphase reduziert Komplexität, bevor sicherheits- und qualitätskritische Analysen ansetzen.</Caption>

    <Item ix="5.2" ixTone="cyan" label="ABSICHERN" title="Sicherheitsbefunde mit Kontext" reverse
      lede="Im Sicherheitsbereich werden Befunde nach Severity-Stufen (Kritisch › Hoch › Mittel › Niedrig) gegliedert und mit den offiziellen CWE-Codes (Common Weakness Enumeration) der MITRE-Klassifikation verknüpft. Jeder Befund zeigt Vorher-/Nachher-Code-Vergleich, betroffene Datei und Zeilennummer sowie eine kontextbezogene Erklärung des Problems – damit Nutzende nicht nur sehen was, sondern auch warum."
      imgBase="assets/codescanner/prototyp_02"
    />
    <Caption>Pattern-basierte Befundgruppierung mit dateibezogener Detailansicht. Der direkte Vorher-/Nachher-Vergleich macht die Wirkung jeder Änderung nachvollziehbar.</Caption>

    <Item ix="5.3" ixTone="violet" label="OPTIMIEREN" title="Qualität schrittweise verbessern"
      lede="Im Optimierungsbereich liegt der Fokus weniger auf Kritikalität, sondern auf schrittweiser Verbesserung. Bundle-Größe, Performance, Architektur, API-Effizienz – jede Kategorie wird in eigener Tiefe behandelt, mit demselben Vertrauensprinzip wie in den vorherigen Schritten: Vorschläge, keine Vorgaben."
      imgBase="assets/codescanner/prototyp_03"
    />
    <Caption>Der Optimierungsbereich übernimmt die Logik der vorherigen Schritte – aber mit dem Fokus auf inkrementelle Qualitätssteigerung statt Kritikalität.</Caption>

    {/* 5.4 Übersicht – text top, full-width image below */}
    <article className="mt-20 sm:mt-28 reveal">
      <div className="max-w-[1100px]">
        <ItemHeading ix="5.4" ixTone="blue" label="ÜBERSICHT" title="Der rote Faden" />
        <p className="lede">
          Verbindendes Element ist die Projektübersicht: Hier laufen empfohlene nächste Schritte, Sicherheitswarnungen,
          Bereichszusammenfassungen und der Risikoverlauf zusammen. Nutzende behalten jederzeit den Überblick – und können
          den geführten Pfad verlassen, ohne ihn zu verlieren.
        </p>
      </div>
      <ResponsiveImg
        base="assets/codescanner/prototyp_04"
        sizes="(min-width: 1760px) 1720px, 100vw"
        alt="Der rote Faden"
        className="rounded-xl border border-line-subtle w-full mt-10 sm:mt-14"
      />
    </article>
    <Caption>Die Übersicht verdichtet alle drei Workflow-Bereiche zu einer einzigen Handlungsempfehlung – der „empfohlene nächste Schritt" als roter Faden durch das Tool.</Caption>
  </section>
);
