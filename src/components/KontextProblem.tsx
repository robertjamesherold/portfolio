import { Eyebrow } from './atoms';

export const KontextProblem = () => (
  <section className="section-y container-x">
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
      <div>
        <Eyebrow num="01" label="KONTEXT & PROBLEM" />
        <h2 className="title mt-5 sm:mt-6">Wenn KI-Code zur Routine wird und Vertrauen zur Frage</h2>
        <p className="lede mt-6">
          Generative KI hat den Entwicklungsalltag verändert. ChatGPT, Claude, GitHub Copilot und Codex erzeugen heute Code,
          der auf den ersten Blick sauber, plausibel und einsatzbereit wirkt. Doch genau darin liegt die Herausforderung:
          Was funktional aussieht, kann unsicher, ineffizient oder logisch fehlerhaft sein. Sicherheitslücken, redundante Strukturen
          oder unhinterfragte Annahmen verbergen sich oft hinter überzeugend formulierten Vorschlägen.
          <br /><br />
          Bestehende Code-Analyse-Tools wie SonarQube, Snyk oder ESLint adressieren diese Probleme zwar – jedoch mit einer Logik,
          die für klassische Codeprüfung entwickelt wurde, nicht für die spezifischen Risikomuster KI-generierter Artefakte.
          Sie überfordern mit langen Findings-Listen, ohne klare Handlungsführung. Sie unterstützen Entwickler darin, Probleme zu finden,
          aber nicht darin, Vertrauen in den Code aufzubauen.
        </p>
        <blockquote className="mt-8 border-l-2 border-accent pl-6 py-5 pr-7 text-[17px] leading-relaxed text-ink-2 bg-gradient-to-r from-accent/10 to-transparent rounded-r-lg">
          CodeScanner setzt an dieser Lücke an: Statt alle Probleme gleichzeitig zu zeigen, führt das Tool durch einen
          strukturierten Workflow vom Niedrigschwelligen zum Kritischen – und macht Risiken nicht nur sichtbar, sondern nachvollziehbar.
        </blockquote>
      </div>
      <div className="rounded-2xl overflow-hidden ">
        <img src="assets/kontext-problem.webp" alt="Kontext und Problem" className="w-full" />
      </div>
    </div>
  </section>
);
