import { Card, Pill, SectionHeading } from './atoms';

const evals = [
  { n: '01', t: 'Visuelle Orientierung', d: 'Farbkodierung und Severity-Stufen geben jederzeit Orientierung – Nutzende erkennen auf einen Blick, was Aufmerksamkeit braucht.' },
  { n: '02', t: 'Transparenz', d: 'Vorher-/Nachher-Gegenüberstellungen und Erklärungen machen jede Änderung nachvollziehbar – nicht nur was, sondern auch warum.' },
  { n: '03', t: 'Bewusste Kontrolle', d: 'Entscheidungsfreiheit und persönliche Prüfpunkte halten den Menschen in der Verantwortung – Vertrauen wird kalibriert, nicht delegiert.' },
  { n: '04', t: 'Auffindbarkeit', d: 'Konsistente Komponenten und Navigation reduzieren kognitive Last – wer einen Bildschirm verstanden hat, versteht auch die anderen.' },
];
const limitations = [
  'Ein vollständiger Nutzertest mit der Zielgruppe konnte im Rahmen der Bachelorarbeit nicht durchgeführt werden – das Studiendesign dafür wurde jedoch ausgearbeitet und dokumentiert.',
  'Das Risikoverlaufs-Diagramm auf der Übersichtsseite wurde in der Evaluation als zu plakatives Platzhalter-Element identifiziert, das in einer nächsten Iteration funktionaler ausgestaltet werden müsste.',
];
const next = [
  'IDE-Integration – CodeScanner als eingebettetes Werkzeug in Visual Studio Code, statt als eigenständige Anwendung.',
  'Mehrsprachigkeit – Internationaler Zugang über die DACH-Region hinaus.',
  'Kontextuelle Hilfefunktion – Situationsbezogene Erklärungen, ohne den Workflow zu unterbrechen.',
  'Funktionalere Verlaufsdarstellung – Aus dem Übersichts-Graph ein echtes retrospektives Werkzeug machen.',
];
const principles = ['Risiken sichtbar machen', 'Erklärbarkeit erhöhen', 'Vertrauen kalibrieren', 'Review priorisieren', 'Workflow integrieren'];

export const Evaluation = () => (
  <section className="section-y container-x">
    <SectionHeading
      num="07" label="EVALUATION & REFLEXION"
      title="Was die Evaluation gezeigt hat"
      sub="Das finale Konzept wurde mit zwei Methoden evaluiert: einer thematischen Analyse nach Braun & Clarke und einer heuristischen Evaluation nach Nielsen."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {evals.map((e) => (
        <Card key={e.n} className="flex flex-col gap-3.5 p-8">
          <span className="mono text-2xl font-semibold text-accent-soft">{e.n}</span>
          <h4 className="m-0 text-xl font-bold">{e.t}</h4>
          <p className="m-0 text-ink-2 text-[15px] leading-snug">{e.d}</p>
        </Card>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-12">
      <Card className="flex flex-col gap-4 p-8">
        <Pill tone="amber">LIMITATIONEN, EHRLICH BENANNT</Pill>
        <h4 className="m-0 text-[22px] font-bold">Was im Rahmen der Bachelorarbeit nicht möglich war</h4>
        <ul className="flex flex-col gap-3.5">
          {limitations.map((l, i) => (
            <li key={i} className="grid grid-cols-[auto_1fr] gap-3.5 text-[15px] leading-snug text-ink-2">
              <span className="w-2 h-2 rounded-full bg-high mt-2" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="flex flex-col gap-4 p-8">
        <Pill tone="violet">WAS ALS NÄCHSTES KÄME</Pill>
        <h4 className="m-0 text-[22px] font-bold">Mögliche Weiterentwicklungen</h4>
        <ul className="flex flex-col gap-3.5">
          {next.map((l, i) => (
            <li key={i} className="grid grid-cols-[auto_1fr] gap-3.5 text-[15px] leading-snug text-ink-2">
              <span className="w-2 h-2 rounded-full bg-perf mt-2" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>

    <Card className="mt-12 p-10 sm:p-12 flex flex-col gap-6 text-center items-center bg-gradient-to-b from-accent/[.08] to-transparent border-accent/25">
      <span className="mono text-[11px] tracking-[.16em] text-ink-3">KONZEPTIONELLES FUNDAMENT</span>
      <h4 className="m-0 text-2xl sm:text-[28px] font-bold">Fünf Leitprinzipien des CodeScanners</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full mt-2">
        {principles.map((p, i) => (
          <div key={p} className="flex flex-col items-center gap-2.5 bg-grouped-2 border border-line-subtle rounded-2xl p-5">
            <span className="mono text-base text-accent-soft">{String(i + 1).padStart(2, '0')}</span>
            <p className="m-0 font-semibold text-base">{p}</p>
          </div>
        ))}
      </div>
      <p className="text-ink-3 text-sm max-w-[700px] m-0">
        Die fünf Prinzipien bilden das konzeptionelle Fundament. Sie waren Maßstab für jede Designentscheidung.
      </p>
    </Card>
  </section>
);
