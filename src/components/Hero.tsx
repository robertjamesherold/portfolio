import { Pill, Button } from './atoms';
import { IconBriefcase, IconSend } from '../lib/icons';

const stats = [
  { b: 'Research', s: 'Strategy' },
  { b: 'Lean UX', s: 'Iteration' },
  { b: 'Interface', s: 'Design' },
  { b: 'Design', s: 'Systems' },
];

export const Hero = () => (
  <section id="about" className="section-y container-x pt-20 sm:pt-24 lg:pt-28">
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
      <div>
        <Pill>DESIGN PORTFOLIO</Pill>
        <h1 className="display mt-5 sm:mt-6">
          Von der Idee zum Interface – durchdacht und crossmedial.
        </h1>
        <p className="lede mt-6 max-w-[780px]">
          Ich bin <b className="text-ink-1">Robert James Herold</b>, UX/UI Designer mit Leidenschaft für
          konzeptionell fundierte Gestaltung. Ob Mobile App, Markenauftritt oder Bewegtbild – ich denke
          Produkte <b className="text-ink-1">vom Nutzer aus</b> und bringe sie visuell auf den Punkt.
          Was alle Arbeiten verbindet: <b className="text-ink-1">Timing, Rhythmus und gezielte Aufmerksamkeitsführung</b> –
          ob in einer Page-Transition oder einem Storyboard.
        </p>
        <div className="flex flex-wrap gap-3.5 mt-8">
          <Button href="#work" icon={<IconBriefcase />}>Projekte ansehen</Button>
          <Button variant="ghost" href="#contact" icon={<IconSend />}>Kontaktiere mich</Button>
        </div>
        <ul className="grid grid-cols-2 xl:grid-cols-4 gap-6 mt-12 sm:mt-16 pt-8 border-t border-line-subtle max-w-[760px]">
          {stats.map((s) => (
            <li key={s.b} className="flex flex-col gap-1">
              <b className="text-2xl sm:text-3xl font-bold text-accent">{s.b}</b>
              <span className="mono text-[10px] sm:text-[11px] uppercase tracking-[.18em] text-ink-3">{s.s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
 
          <img
            src="assets/common/portrait.avif"
            alt="Portrait Robert James Herold"
            decoding="async"
            data-no-zoom
            className="w-full h-full object-cover"
            style={{ borderRadius: 'inherit', filter: 'saturate(.95) contrast(1.05)' }}
          />
       </div>
    </div>
  </section>
);
