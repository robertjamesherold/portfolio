import { Card, Eyebrow, Subheading } from './atoms';

const methods = [
  { n: '01', t: 'Informationsarchitektur', d: 'Inhalte und Bearbeitungsschritte strukturieren – als Grundlage für jeden weiteren Designschritt.' },
  { n: '02', t: 'User Journey Mapping', d: 'Prozessorientierte Abläufe für Nutzungssituationen entwerfen und kritisch hinterfragen.' },
  { n: '03', t: 'Iteratives Prototyping', d: 'Schrittweise Verfeinerung über vier vollständige Versionen mit Stärken-Schwächen-Analysen.' },
  { n: '04', t: 'Komponentenbasiert', d: 'Systematische Übersetzung des Konzepts in modulare, wiederverwendbare Bausteine.' },
];

export const Methodik = () => (
  <section id="process" className="section-y container-x">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <div>
        <Eyebrow num="03" label="METHODIK" />
        <h2 className="title mt-5 sm:mt-6">Double Diamond, erweitert durch KI-gestützte Ideation</h2>
      </div>
      <p className="lede">
        Der Designprozess folgte einem adaptierten Double-Diamond-Modell, das um eine fünfte, durchgängige Methode ergänzt wurde:
        KI-gestützte Ideation. Generative KI wurde dabei nicht als Ersatz für Gestaltung verstanden, sondern als exploratives Werkzeug –
        für Strukturvarianten, Benennungen und Interface-Ideen, die im weiteren Prozess kritisch geprüft, verworfen oder vertieft wurden.
      </p>
    </div>

    <figure className="mt-16 sm:mt-20 mb-10">
      <img src="assets/methodik-diagram.webp" alt="Methodik Diagramm" className="mx-auto w-full" />
      <figcaption className="text-ink-3 text-sm text-center mt-6 sm:mt-8 max-w-[900px] mx-auto leading-relaxed">
        KI-gestützte Ideation wurde als durchgängig einsetzbare Methode eingebettet – nicht als autonomer Entwurf,
        sondern als unterstützender Schritt für Interface-Ideen, Benennungen und Strukturvarianten.
      </figcaption>
    </figure>

    <Subheading>Vier Hauptmethoden</Subheading>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {methods.map((m) => (
        <Card key={m.n} className="flex flex-col gap-3.5 p-7">
          <span className="inline-flex w-9 h-9 items-center justify-center bg-grouped-3 border border-line rounded-lg text-accent-soft text-[13px] font-semibold mono">
            {m.n}
          </span>
          <h4 className="m-0 text-xl font-bold">{m.t}</h4>
          <p className="m-0 text-ink-2 text-[15px] leading-snug">{m.d}</p>
        </Card>
      ))}
    </div>

    <div className="card-base flex flex-col sm:flex-row gap-5 items-start sm:items-center p-6 sm:p-7 mt-10">
      <span className="flex-none w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-perf text-white flex items-center justify-center font-bold tracking-wider">AI</span>
      <p className="m-0 text-ink-2 text-[15px] leading-relaxed">
        Diese Struktur erlaubte es, das Konzept iterativ zu entwickeln und an jedem Übergang gezielt zu evaluieren –
        durch Expertenfeedback, Nutzerrückmeldungen und kritische Selbstreflexion.
      </p>
    </div>
  </section>
);
