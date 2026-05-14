import { Card, Caption, SectionHeading } from './atoms';

const statCards = [
  { n: '121', t: 'Entwicklerinnen und Entwickler nahmen an der Online-Befragung teil.' },
  { n: '8', t: 'Tools wurden in der Konkurrenzanalyse systematisch verglichen.' },
  { n: '2', t: 'Personas decken das Spektrum vom Junior bis zum Tech Lead ab.' },
];

const personas = [
  {
    name: 'Alex (28)', role: 'Junior Frontend Developer', img: 'assets/codescanner/alex.webp',
    quote: 'KI-Code spart mir Zeit – aber ich weiß oft nicht, ob ich ihm vertrauen kann.',
    desc: 'Nutzt KI als tägliches Werkzeug, hat aber Unsicherheiten beim Bewerten der Ausgaben. Braucht klare Erklärungen und Handlungsführung statt langer Findings-Listen.',
  },
  {
    name: 'Sarah (34)', role: 'Senior Frontend Developer & Tech Lead', img: 'assets/codescanner/sarah.webp',
    quote: 'KI-Output ist eine Diskussionsgrundlage – nicht die Antwort.',
    desc: 'Sieht KI-Code als Diskussionsgrundlage und braucht effiziente Risiko-Triage für ihr Team. Erwartet Severity-Stufen, Kontext und priorisierte nächste Schritte.',
  },
];

export const Research = () => (
  <section className="section-y container-x">
    <SectionHeading
      num="02" label="RESEARCH & ERKENNTNISSE"
      title="Was die Evaluation gezeigt hat"
      sub="Das finale Konzept wurde mit zwei Methoden evaluiert: einer thematischen Analyse nach Braun & Clarke und einer heuristischen Evaluation nach Nielsen."
    />
    <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-12">
      {statCards.map((s) => (
        <Card key={s.n} className="flex flex-col gap-4 p-8">
          <span className="text-5xl sm:text-6xl font-bold tracking-tighter2 bg-gradient-to-br from-accent to-security bg-clip-text text-transparent">{s.n}</span>
          <span className="text-ink-2 text-[15px] leading-snug">{s.t}</span>
        </Card>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16 text-ink-2 text-base leading-[1.7]">
      <p>
        Bevor das erste Wireframe entstand, stand die Forschung. In einer Online-Befragung mit 121 Teilnehmenden
        wurden Erfahrungen, Einstellungen und Bedürfnisse von Entwicklerinnen und Entwicklern im Umgang mit
        KI-generiertem Code erhoben. Die Stichprobe deckte ein breites Profil ab: Full-Stack-Entwickler (36 %),
        Studierende (24 %) sowie weitere Rollen, mit über der Hälfte der Befragten in 5+ Jahren Berufserfahrung.
      </p>
      <p>
        Parallel wurde eine Konkurrenzanalyse von acht bestehenden Code-Analyse- und Generierungswerkzeugen
        durchgeführt – darunter etablierte Tools wie SonarQube, Snyk und neuere KI-Assistenten wie GitHub
        Copilot Chat und Codex. Die Feature-Matrix zeigte deutlich: Kein bestehendes Tool adressiert die
        spezifische Schnittstelle zwischen KI-generiertem Code, strukturierter Risikoprüfung und nutzerzentrierter
        Vertrauenskalibrierung.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-16">
      {personas.map((p) => (
        <Card key={p.name} className="flex flex-col gap-5 p-8">
          <header className="flex gap-5 items-center">
            <div className="w-[144px] h-[144px] rounded-full overflow-hidden border border-line">
              <img src={p.img} alt="" className="w-full h-full object-cover" data-no-zoom/>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-[38px] font-bold m-0">{p.name}</h3>
              <p className="text-ink-3 text-2xl m-0">{p.role}</p>
            </div>
          </header>
          <blockquote className="m-0 text-lg leading-snug border-l-2 border-accent pl-4 italic">„{p.quote}"</blockquote>
          <p className="text-ink-3 text-md leading-snug m-0">{p.desc}</p>
        </Card>
      ))}
    </div>
    <Caption center>
      Die zwei Personas spannen das Spektrum der Zielgruppe auf: vom Junior Developer mit täglichem KI-Einsatz bis zum Tech Lead mit Review-Verantwortung.
    </Caption>
  </section>
);
