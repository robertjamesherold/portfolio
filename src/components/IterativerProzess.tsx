import { Card, Caption, SectionHeading, Subheading } from './atoms';

type Tone = 'red' | 'amber' | 'cyan' | 'lime';
const toneText: Record<Tone, string> = {
  red: 'text-crit', amber: 'text-high', cyan: 'text-security', lime: 'text-ok',
};
const toneTag: Record<Tone, string> = {
  red: 'bg-crit/15 text-crit border-crit/30',
  amber: 'bg-high/15 text-high border-high/30',
  cyan: 'bg-security/15 text-security border-security/30',
  lime: 'bg-ok/15 text-ok border-ok/30',
};

const versions: { v: string; tone: Tone; label: string; title: string; desc: string; insight: string }[] = [
  { v: 'V1', tone: 'red', label: 'MODULAR, ABER FRAGMENTIERT', title: 'Explorativer Prototyp', desc: 'Sieben isolierte Funktionsmodule, ohne Workflow-Verbindungen.', insight: 'Die einzelnen Module funktionierten in sich, aber es fehlte ein roter Faden.' },
  { v: 'V2', tone: 'amber', label: 'ERSTER WORKFLOW-PFAD', title: 'Konzeptionelle Neuausrichtung', desc: 'Konsolidierung auf vier Bereiche: Übersicht, Bereinigen, Absichern, Optimieren.', insight: 'Damit entstand der erste klare Bearbeitungspfad – aber die Hierarchie war noch zu flach.' },
  { v: 'V3', tone: 'cyan', label: 'GEFÜHRT, NICHT ZWINGEND', title: 'Hierarchie & Handlungsführung', desc: 'Einführung gerichteter Workflow-Verbindungen und einer Sidebar mit kontextspezifischer Navigation.', insight: 'Der Workflow wurde lenkend, ohne dabei etwas zu erzwingen.' },
  { v: 'V4', tone: 'lime', label: 'FINAL – KOHÄRENTES SYSTEM', title: 'Visuelle Konsolidierung', desc: 'Vereinheitlichung aller Komponenten zu einem kohärenten Designsystem.', insight: 'Schriftart, Farben, Rundungen, Spacings – alles auf einen gemeinsamen Standard gebracht.' },
];

export const IterativerProzess = () => (
  <section className="section-y container-x">
    <SectionHeading
      num="04" label="ITERATIVER PROZESS"
      title="Vier Versionen, vier Erkenntnisstufen"
      sub="Vom ersten explorativen Prototyp bis zum finalen Konzept entstanden vier vollständige Versionen – jede mit eigener Stärken-Schwächen-Analyse, dokumentiert und kritisch bewertet."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
      {versions.map((v) => (
        <Card key={v.v} className="flex flex-col gap-3 p-7">
          <span className={`self-start inline-flex items-center justify-center px-2.5 py-1 rounded-md mono text-[12px] font-semibold border ${toneTag[v.tone]}`}>
            {v.v}
          </span>
          <span className={`mono text-[11px] tracking-[.14em] ${toneText[v.tone]}`}>{v.label}</span>
          <h4 className="m-0 mt-2 text-xl font-bold">{v.title}</h4>
          <p className="m-0 text-ink-2 text-sm leading-snug">{v.desc}</p>
          <hr className="border-line-subtle my-3" />
          <span className="mono text-[11px] tracking-[.14em] text-ink-3">ERKENNTNIS</span>
          <p className="m-0 text-ink-1 text-sm leading-snug font-medium">{v.insight}</p>
        </Card>
      ))}
    </div>

    <figure className="flex justify-center">
      <img src="assets/iterativer-prozess.webp" alt="Iterativer Prozess Diagramm" className="w-full" />
    </figure>

    <Subheading>Entwicklung des Prototyps</Subheading>
    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
      <Card className="flex flex-col gap-4 p-6">
        <div className="inline-flex gap-2 items-center text-[12px] font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-crit shadow-[0_0_8px_#FB2C36]" />
          <span className="mono text-crit">Variante 1</span>
        </div>
        <img src="assets/variant-v1.webp" alt="Variante 1" className="rounded-lg border border-line-subtle" />
        <p className="text-ink-3 text-sm">Exploratives Modul-Layout. Sieben Bereiche, kein klarer Einstiegspunkt.</p>
      </Card>
      <Card className="flex flex-col gap-4 p-6">
        <div className="inline-flex gap-2 items-center text-[12px] font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-ok shadow-[0_0_8px_#BCF85B]" />
          <span className="mono text-ok">Variante 4</span>
        </div>
        <img src="assets/variant-v4.webp" alt="Variante 4" className="rounded-lg border border-line-subtle" />
        <p className="text-ink-3 text-sm">Geführter Workflow-Einstieg. Drei Bereiche, ein empfohlener nächster Schritt.</p>
      </Card>
    </div>
    <Caption>
      Vom explorativen Modul-Layout zum geführten Workflow-Einstieg – sichtbar wird die konzeptionelle Verdichtung über vier Iterationen.
    </Caption>
  </section>
);
