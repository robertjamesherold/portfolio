import { Eyebrow } from './atoms';
import { IconArrowRight } from '../lib/icons';
import { works } from '../lib/works';
import { navigate } from '../lib/router';

export const WorkGrid = () => (
  <section id="work" className="section-y container-x reveal">
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-end mb-16 sm:mb-20">
      <div>
        <Eyebrow num="01" label="ARBEITSPROBEN" />
        <h2 className="title mt-5 sm:mt-6">Ausgewählte Fallstudien</h2>
      </div>
      <p className="lede">
        Drei Projekte aus dem Studium – jedes mit anderem Schwerpunkt:
        argumentative UX-Tiefe, cross-mediale Markenführung, Mobile UX und narratives
        Bewegtbild.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
      {works.map((w) => (
        <a
          key={w.href}
          href={w.href}
          onClick={(e) => {
            e.preventDefault();
            if (w.locked) {
              window.dispatchEvent(new CustomEvent('show-locked-modal'));
              return;
            }
            navigate(w.href);
          }}
          className="group relative card-base overflow-hidden flex flex-col p-0 transition hover:border-line"
          style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}
        >
          {/* Preview image */}
          <div className="relative aspect-[16/10] overflow-hidden border-b border-line-subtle bg-grouped-2">
            <img
              src={w.image.src}
              alt={w.image.alt}
              loading="lazy"
              decoding="async"
              data-no-zoom
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: w.image.objectPosition ?? 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="mono text-[10px] tracking-[.22em] uppercase bg-bg/70 backdrop-blur-md text-ink-1 border border-line/60 rounded-full px-3 py-1.5">
                {w.year}
              </span>
              {w.locked && (
                <span className="mono text-[10px] tracking-[.22em] uppercase bg-accent/15 backdrop-blur-md text-[#A8A6FF] border border-accent/40 rounded-full px-3 py-1.5">
                  Gesperrt bis 28.05.
                </span>
              )}
            </div>
          </div>

          {/* Card content */}
          <div className="p-7 sm:p-8 flex flex-col gap-5 flex-1">
            <div className="mono text-[11px] tracking-[.18em] text-ink-3 uppercase">
              {w.context}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish">
              {w.title}
            </h3>

            <p className="text-ink-2 text-[15px] leading-relaxed">{w.blurb}</p>

            {/* Discipline chips — the part that says what kind of work this was */}
            <ul className="flex flex-wrap gap-2 mt-1">
              {w.disciplines.map((d) => (
                <li
                  key={d}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium bg-grouped-3/60 border border-line text-ink-2"
                >
                  {d}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end mt-auto pt-5 border-t border-line-subtle">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent-soft group-hover:translate-x-1 transition-transform">
                Case Study ansehen
                <IconArrowRight width={16} height={16} />
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);
