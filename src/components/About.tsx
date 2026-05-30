import { Eyebrow } from './atoms';

const meta = [
  { k: 'Standort', v: 'Bad Soden-Salmünster, DE' },
  { k: 'Sprachen', v: 'Deutsch · Englisch (B2)' },
  { k: 'Zertifikat', v: 'Meta Front-End Developer' },
];

const skills = [
  'UX Research',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Motion Design',
  'Brand Design',
];

const tools = ['Figma', 'Illustrator', 'Photoshop', 'InDesign', 'React'];

export const About = () => (
  <section id="about" className="section-y container-x border-t border-line-subtle reveal">
    <Eyebrow num="02" label="ÜBER MICH" />
    <h2 className="title mt-5 sm:mt-6 max-w-[18ch]">Der Mensch hinter den Projekten.</h2>

    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 mt-14 sm:mt-20 items-start">
      <div className="space-y-6 text-ink-2 text-[17px] sm:text-[19px] leading-[1.65] max-w-[62ch] order-2 lg:order-1">
        <p>
          Ich bin <span className="text-ink-1 font-medium">Robert</span> – Mediendesigner mit
          Schwerpunkt UX/UI, aktuell im letzten Semester meines Bachelorstudiums an der IU
          Internationale Hochschule. Davor habe ich meine Fachhochschulreife in Gestaltung an
          der Gutenbergschule Frankfurt gemacht und arbeite seit&nbsp;2017 freiberuflich im
          Webdesign.
        </p>
        <p>
          Meine Arbeitsweise ist ruhig und fokussiert. Ich höre zu, stelle die richtigen
          Fragen und liefere dann – konstant und termingerecht. Offene Kommunikation und
          saubere Zusammenarbeit sind mir wichtiger als Selbstdarstellung.
        </p>
        <p>
          Neben dem Studium war ich ein halbes Jahr in der Studierendenvertretung aktiv und
          habe dort gelernt, wie man unterschiedliche Interessen unter einen Hut bringt – eine
          Fähigkeit, die im Design-Alltag ständig gebraucht wird.
        </p>
      </div>

      <div className="relative order-1 lg:order-2 w-full max-w-[560px] mx-auto lg:mx-0 lg:justify-self-end">
        <div className="absolute -inset-3 sm:-inset-4 -z-10 rounded-3xl bg-accent/10 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" />
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1">
          <img
            src="/assets/common/landscape-1200.avif"
            srcSet="/assets/common/landscape-400.avif 400w, /assets/common/landscape-800.avif 800w, /assets/common/landscape-1200.avif 1200w, /assets/common/landscape-1600.avif 1600w"
            sizes="(min-width: 1024px) 45vw, (min-width: 640px) 80vw, 100vw"
            alt="Robert James Herold"
            loading="lazy"
            decoding="async"
            data-no-zoom
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <div className="mt-16 sm:mt-20 pt-8 border-t border-line-subtle grid sm:grid-cols-3 gap-6 sm:gap-10">
      {meta.map((m) => (
        <div key={m.k} className="flex flex-col gap-1.5">
          <div className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase">{m.k}</div>
          <div className="text-[15px] text-ink-1">{m.v}</div>
        </div>
      ))}
    </div>

    <div className="mt-12 sm:mt-14 grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 items-start">
      <div className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase pt-1.5">Tools</div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-ink-2">
        {tools.map((t, i) => (
          <span key={t} className="flex items-center gap-5">
            {t}
            {i < tools.length - 1 && <span className="text-ink-3">·</span>}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6 grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 items-start">
      <div className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase pt-1.5">Skills</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] text-ink-2 border border-line-subtle"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </section>
);
