import { CaseStudyHero, CaseStudySection, Caption, NextProjectCTA } from './shared';

const meta = [
  { k: 'ROLLE', v: 'Konzept, Drehbuch, Storyboard, Animation, Schnitt' },
  { k: 'DAUER', v: 'Studienprojekt – Modul Design audio-visueller Medien' },
  { k: 'TOOLS', v: 'Adobe After Effects, Premiere Pro,\nKI-Voice-Over' },
  { k: 'FORMAT', v: '30 Sekunden · 16:9 · Full HD' },
  { k: 'SCHWERPUNKT', v: 'Storytelling, Storyboard, Animation' },
];

const acts = [
  {
    n: 'Akt 1',
    title: 'Der Traum beginnt.',
    body:
      'Ein Mädchen sitzt im Klassenzimmer und träumt von ihrer Zukunft: Ärztin, Pilotin, Designerin, Architektin, Astronautin. Die Szene verschwimmt, die Berufe wechseln im Rhythmus.',
  },
  {
    n: 'Akt 2',
    title: 'Die Realität.',
    body:
      'Schnitt auf ein Matheheft. Eine rote „5−" in dicken Kreisen. Der Bruch ist hart und gewollt.',
  },
  {
    n: 'Akt 3',
    title: 'Die Lösung.',
    body:
      'Eine Lehrerin beugt sich über das Mädchen. Geduldig, konzentriert. Aus dem Bruch wird eine Brücke. Endkarte: „Schülerhilfe. Gemeinsam zu besseren Noten."',
  },
];

export const Schuelerhilfe = () => (
  <>
    <CaseStudyHero
      tag="STUDIENPROJEKT · DESIGN AUDIO-VISUELLER MEDIEN · 2025"
      title="Träume werden wahr"
      subline='Wie übersetzt man eine Markenbotschaft in eine emotionale Mini-Geschichte? „Träume werden wahr" ist ein konzeptioneller TV-Werbespot für die Schülerhilfe – von Plot über Drehbuch und Storyboard bis zum fertigen Animatic. 30 Sekunden, drei Akte, eine klare Botschaft: Bildung öffnet Wege.'
      meta={meta}
      visual={
        <div className="rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <video
            src="assets/av-medien/animatic.mp4"
            autoPlay
            muted
            
            playsInline
            controls
            preload="metadata"
            poster="assets/av-medien/schlüsselmoment_01.avif"
            className="block w-full h-auto"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      }
    />

    <CaseStudySection
      num="01"
      label="KONZEPT & STORYLINE"
      title="Drei Akte in dreißig Sekunden"
      intro="Jede Werbung muss in den ersten Sekunden eine Geschichte aufmachen. Mein Konzept folgt einer klassischen Drei-Akt-Struktur – komprimiert auf 30 Sekunden."
    >
      <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
        {acts.map((a) => (
          <div key={a.n} className="card-base flex flex-col gap-3 p-7">
            <div className="mono text-[11px] tracking-[.22em] text-accent-soft uppercase">
              {a.n}
            </div>
            <h3 className="text-xl font-bold tracking-tightish">{a.title}</h3>
            <p className="text-ink-2 text-[15px] leading-relaxed">{a.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1">
        <img
          src="assets/av-medien/plot.avif"
          alt="Plot-Übersicht mit Drei-Akt-Struktur"
          loading="lazy"
          decoding="async"
          className="block w-full h-auto"
        />
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="02"
      label="DREHBUCH & VOICE-OVER"
      title="Vom Konzept zum geschriebenen Wort"
      intro="Aus dem Plot wurde ein vollständiges Drehbuch im klassischen Drei-Spalten-Format: Szene, Beschreibung, Voice-Over. Jede Einstellung mit Kameraführung, Bildinhalt und gesprochener Zeile dokumentiert."
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div>
          <p className="lede">
            Das Voice-Over ist als innerer Monolog des Mädchens gestaltet – nicht als
            Werbestimme, sondern als persönliche Erzählung, die den emotionalen Bogen trägt:
          </p>
          <blockquote className="mt-8 border-l-2 border-accent pl-6 py-5 pr-7 text-[17px] leading-relaxed text-ink-2 bg-gradient-to-r from-accent/10 to-transparent rounded-r-lg">
            „Wenn ich einmal groß bin, dann werde ich vielleicht mal Ärztin … oder Pilotin
            … vielleicht Designerin … oder Architektin. Oder vielleicht flieg ich auch zum
            Mond und werde Astronautin. Aber das hält mich dabei meine Träume zu erreichen
            nicht ab."
          </blockquote>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="rounded-xl overflow-hidden border border-line-subtle bg-grouped-1"
            >
              <img
                src={`assets/av-medien/drehbuch_0${n}.avif`}
                alt={`Drehbuch Seite ${n}`}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="03"
      label="STORYBOARD"
      title="Bildkomposition und Kameraführung"
      intro="Das Storyboard wurde frame-genau ausgearbeitet – nicht als grobe Skizze, sondern mit klaren Bildkompositionen, Kameraanweisungen und Übergangslogik. Pro Szene: Bildinhalt, Kamerabewegung, Voice-Over-Zuordnung, Übergang zur nächsten Szene."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {Array.from({ length: 8 }).map((_, i) => {
          const num = String(i + 1).padStart(2, '0');
          return (
            <figure
              key={i}
              className="rounded-xl overflow-hidden border border-line-subtle bg-grouped-1"
            >
              <img
                src={`assets/av-medien/szene_${num}.avif`}
                alt={`Storyboard Szene ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
              />
              <figcaption className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase text-center px-2 py-2 border-t border-line-subtle">
                Szene {i + 1}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-10">
        <div>
          <h4 className="text-lg font-bold tracking-tightish mb-3">Übergangslogik</h4>
          <ul className="space-y-3 text-ink-2 text-[15px] leading-relaxed pl-5 list-disc marker:text-accent-soft">
            <li>Sanfte Überblendungen in den Traumsequenzen → Fluss, Rhythmus</li>
            <li>Maskierte Wipes zwischen den Berufen → Flow ohne harte Schnitte</li>
            <li>Harter Zoom-Punch beim Übergang zum Matheheft → emotionaler Bruch</li>
            <li>Langsamer Zoom-Out in der Nachhilfe-Szene → Auflösung, Ruhe</li>
          </ul>
        </div>
        <Caption>
          Jede Szene wurde mit Bildkomposition, Kamerabewegung und Übergangslogik
          dokumentiert. Die Übergänge folgen dem dramaturgischen Bogen.
        </Caption>
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="04"
      label="ANIMATION & UMSETZUNG"
      title="Aus dem Storyboard wird ein Spot"
      intro="Aus dem Storyboard entstand das fertige Animatic – mit eigens gezeichneten Figuren, gestalteten Hintergründen, Voice-Over (KI-generiert), Sound-Effekten und orchestralem Score. 30 Sekunden, 8 Szenen, eine durchgängige Charakterführung."
    >
      <p className="lede max-w-[1100px]">
        Die Animation arbeitet bewusst mit Standbild-Kompositionen plus Kamera-Moves – statt
        aufwändiger Charakteranimation. Das hat zwei Gründe: Erstens passt es zum
        Werbespot-Tempo (kurze, prägnante Bilder), zweitens lenkt es nicht vom Voice-Over ab.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
        {[1, 2, 3, 4].map((n) => (
          <figure
            key={n}
            className="rounded-xl overflow-hidden border border-line-subtle bg-grouped-1"
          >
            <img
              src={`assets/av-medien/schlüsselmoment_0${n}.avif`}
              alt={`Animatic – Schlüsselmoment ${n}`}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
              style={{ aspectRatio: '16/9', objectFit: 'cover' }}
            />
            <figcaption className="mono text-[10px] tracking-[.22em] text-ink-3 uppercase text-center px-2 py-2 border-t border-line-subtle">
              Moment {n}
            </figcaption>
          </figure>
        ))}
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="05"
      label="REFLEXION"
      title="Was Bewegtbild für UX/UI bedeutet"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
        <p className="lede">
          Auf den ersten Blick ist ein Werbespot weit weg von Interface Design. Beim zweiten
          Blick nicht: Storytelling, Rhythmus und gezielte Aufmerksamkeitslenkung sind
          dieselben Skills, die in modernen App-Interfaces über Page-Transitions,
          Mikro-Interaktionen und Onboarding-Flows entscheiden.
        </p>
        <p className="lede">
          Was ich aus diesem Projekt mitgenommen habe: <strong className="text-ink-1">Timing
          ist Design.</strong> Eine halbe Sekunde länger oder kürzer kann eine Aussage
          komplett verändern. Diese Sensibilität für Bewegung und Rhythmus fließt heute in
          jedes Interface-Projekt ein, an dem ich arbeite.
        </p>
      </div>
    </CaseStudySection>

    <NextProjectCTA />
  </>
);
