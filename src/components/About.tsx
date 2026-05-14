import { Eyebrow } from './atoms';

const tools = [
  { name: 'Figma', level: 95 },
  { name: 'Illustrator', level: 90 },
  { name: 'Photoshop', level: 80 },
  { name: 'InDesign', level: 75 },
  { name: 'React', level: 70 },
];

const ToolBar = ({ name, level }: { name: string; level: number }) => (
  <div className="flex items-center gap-4">
    <span className="text-[14px] text-ink-2 w-24 shrink-0">{name}</span>
    <div className="flex-1 h-1.5 bg-grouped-2 rounded-full overflow-hidden">
      <div
        className="h-full bg-accent rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export const About = () => (
  <section id="about" className="section-y container-x border-t border-line-subtle reveal">
    <Eyebrow num="02" label="ÜBER MICH" />
    <h2 className="title mt-5 sm:mt-6">Der Mensch hinter den Projekten</h2>

    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mt-12 sm:mt-16">
      {/* Left: Photo + Quick Facts */}
      <div className="flex flex-col gap-8">
        <div className="relative aspect-[4/5] max-w-[320px] rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1">
          <img
            src="assets/common/portrait.avif"
            alt="Robert James Herold"
            loading="lazy"
            decoding="async"
            data-no-zoom
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="card-base p-6 flex flex-col gap-5 max-w-[320px]">
          <div>
            <div className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase mb-2">Sprachen</div>
            <div className="text-[15px] text-ink-2">
              Deutsch <span className="text-ink-3">(Muttersprache)</span><br />
              Englisch <span className="text-ink-3">(B2)</span>
            </div>
          </div>
          <div>
            <div className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase mb-2">Standort</div>
            <div className="text-[15px] text-ink-2">Bad Soden-Salmünster, Deutschland</div>
          </div>
          <div>
            <div className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase mb-2">Zertifikate</div>
            <div className="text-[15px] text-ink-2">Meta Front-End Developer</div>
          </div>
        </div>
      </div>

      {/* Right: Text + Tools */}
      <div className="flex flex-col gap-10">
        <div className="space-y-5 text-ink-2 text-[16px] sm:text-[17px] leading-relaxed max-w-[680px]">
          <p>
            Ich bin Robert – Mediendesigner mit Schwerpunkt UX/UI, aktuell im letzten Semester
            meines Bachelorstudiums an der IU Internationale Hochschule. Davor habe ich meine
            Fachhochschulreife in Gestaltung an der Gutenbergschule Frankfurt gemacht und
            arbeite seit 2017 freiberuflich im Webdesign.
          </p>
          <p>
            Meine Arbeitsweise ist ruhig und fokussiert. Ich höre zu, stelle die richtigen
            Fragen und liefere dann – konstant und termingerecht. In Teams bringe ich Themen
            aktiv voran, ohne dabei die Perspektiven anderer aus dem Blick zu verlieren.
            Offene Kommunikation und saubere Zusammenarbeit sind mir wichtiger als
            Selbstdarstellung.
          </p>
          <p>
            Neben dem Studium war ich ein halbes Jahr in der Studierendenvertretung aktiv
            und habe dort gelernt, wie man unterschiedliche Interessen unter einen Hut bringt –
            eine Fähigkeit, die im Design-Alltag ständig gebraucht wird.
          </p>
        </div>

        <div>
          <div className="mono text-[11px] tracking-[.22em] text-ink-3 uppercase mb-5">
            Tools & Technologien
          </div>
          <div className="flex flex-col gap-3.5 max-w-[400px]">
            {tools.map((t) => (
              <ToolBar key={t.name} name={t.name} level={t.level} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-line-subtle max-w-[680px]">
          {['UX Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Motion Design', 'Brand Design'].map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-3.5 py-2 rounded-full text-[13px] font-medium bg-grouped-2/60 border border-line text-ink-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
