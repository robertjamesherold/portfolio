import { CaseStudyHero, CaseStudySection, Caption, NextProjectCTA } from './shared';

const meta = [
  { k: 'ROLLE', v: 'Brand-Konzept, Visual Design, Webdesign,\nSocial-Media-Konzept' },
  { k: 'DAUER', v: 'Studienprojekt – Modul Cross-Media-Webdesign' },
  { k: 'TOOLS', v: 'Adobe Illustrator, Photoshop, Figma,\nKI-Bildgenerierung' },
  { k: 'SCHWERPUNKT', v: 'Markenentwicklung & Cross-Media-Konsistenz' },
];

export const VillaOliveto = () => (
  <>
    <CaseStudyHero
      tag="STUDIENPROJEKT · CROSS-MEDIA WEBDESIGN · 2024"
      title="Villa Oliveto"
      subline="Wie überträgt man die tief verwurzelte Tradition eines italienischen Familienbetriebs in eine zeitgemäße Markensprache, ohne die Authentizität zu verlieren? Villa Oliveto ist eine konzeptionelle Markenentwicklung für ein fiktives Premium-Olivenöl – vom Markenkern über die Verpackung bis zur digitalen Inszenierung in Web und Social Media."
      meta={meta}
      visual={
        <div className="rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <img
            src="assets/oliveto/thumbnail.avif"
            alt="Villa Oliveto – Cover-Slide mit goldenem Olivenbaum-Logo und Flasche"
            decoding="async"
            className="block w-full h-auto"
          />
        </div>
      }
    />

    <CaseStudySection
      num="01"
      label="BRIEFING & MARKENKERN"
      title="Tradition trifft Premium-Markt"
      intro="Villa Oliveto ist ein fiktiver, italienischer Olivenöl-Hersteller in sechster Generation – mit Sitz in der Region La Marchesa, Foggia. Der Markenkern: traditionelles Handwerk, biologischer Anbau, limitierte Editionen. Der Anspruch: ein Premium-Produkt, das sich klar vom Einheitslook der Olivenöl-Regale abhebt."
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        <div className="text-ink-2 text-[16px] sm:text-[17px] leading-relaxed space-y-5">
          <p>Das Briefing forderte eine vollständige Markenwelt über drei Medien hinweg:</p>
          <ul className="space-y-3 pl-5 list-disc marker:text-accent-soft">
            <li>Produktdesign mit Verpackungssystem für drei Sorten</li>
            <li>Website mit Online-Shop-Anbindung</li>
            <li>Social-Media-Auftritt mit kuratiertem Content-System</li>
          </ul>
          <blockquote className="border-l-2 border-accent pl-6 py-4 pr-4 text-[17px] leading-relaxed text-ink-2 bg-gradient-to-r from-accent/10 to-transparent rounded-r-lg">
            Die zentrale Gestaltungsfrage: Wie kommuniziert man „traditionell", ohne „altmodisch" zu wirken?
          </blockquote>
        </div>
        <div>
          <div
            className="relative rounded-2xl overflow-hidden border border-line-subtle bg-gradient-to-br from-grouped-2 to-grouped-1 flex items-center justify-center"
            style={{ aspectRatio: '4/5' }}
          >
            <img
              src="assets/oliveto/bottle.avif"
              alt="Villa Oliveto – Flasche Traditionale mit Olivenbaum-Logo"
              loading="lazy"
              decoding="async"
              className="h-[90%] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
            />
          </div>
          <Caption>
            Der Markenkern wurde in einem zentralen Logo verankert: ein stilisierter Olivenbaum
            in metallischem Gold, der Tradition und Premium-Anspruch zugleich trägt.
          </Caption>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="02"
      label="ZIELGRUPPE & POSITIONIERUNG"
      title="Marko & Silvia – zwei Wege, eine Marke"
      intro="Aus der strategischen Analyse entstanden zwei Personas, die das Käuferspektrum abdecken."
    >
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="card-base flex flex-col gap-4 p-7">
          <div className="mono text-[11px] tracking-[.18em] text-accent-soft uppercase">
            Persona 01
          </div>
          <h3 className="text-2xl font-bold tracking-tightish">Marko</h3>
          <p className="text-ink-2 text-[15px] leading-relaxed">
            Lifestyle-orientierter Genießer mit hohem Lebensstandard. Bereit, für Qualität
            mehr zu bezahlen, sofern Optik und Geschmack überzeugen.
          </p>
        </div>
        <div className="card-base flex flex-col gap-4 p-7">
          <div className="mono text-[11px] tracking-[.18em] text-accent-soft uppercase">
            Persona 02
          </div>
          <h3 className="text-2xl font-bold tracking-tightish">Silvia</h3>
          <p className="text-ink-2 text-[15px] leading-relaxed">
            Sterneköchin – fachlich anspruchsvoll. Will durch Authentizität und Qualität
            überzeugt werden, nicht durch Marketing.
          </p>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <p className="lede max-w-[1100px]">
          Beide Personas teilen einen Anspruch: kein Standard. Daraus ergab sich die
          Positionierung in zwei Achsen-Diagrammen – zur Konkurrenz (Farchioni, Ölmühle Solling,
          Bio Kontor) deutlich abgehoben in den Quadranten „hochwertiges Design × hohe Qualität"
          sowie „exklusiv × gesund".
        </p>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
          <figure className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1">
              <img
                src="assets/oliveto/gesundes-kreuz.avif"
                alt="Positionierungsmatrix: Exklusiv vs. Gesund – Villa Oliveto im oberen rechten Quadranten"
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </div>
            <figcaption className="mono text-[11px] tracking-[.22em] text-ink-3 uppercase text-center">
              Exklusiv × Gesund
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1">
              <img
                src="assets/oliveto/qualitats-kreuz.avif"
                alt="Positionierungsmatrix: Qualität vs. Design – Villa Oliveto im oberen rechten Quadranten"
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </div>
            <figcaption className="mono text-[11px] tracking-[.22em] text-ink-3 uppercase text-center">
              Qualität × Design
            </figcaption>
          </figure>
        </div>
        <Caption center>
          Die Positionierung wurde gegen drei reale Wettbewerber kartiert. Villa Oliveto
          besetzt bewusst die Premium-Nische, in der Design-Anspruch und Qualitätsversprechen
          zusammenfallen.
        </Caption>
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="03"
      label="MARKENWELT"
      title="Vom Produkt zur Plattform – drei Medien, ein System"
      intro="Die Marke wurde als zusammenhängendes System über drei Hauptmedien hinweg entwickelt – mit konsistenter Bildsprache, wiedererkennbaren Farben (tiefes Anthrazit, goldene Akzente, dunkle Olivgrüns) und einer klassischen Serifenschrift als Marken-Anker."
    >
      <div className="space-y-20 sm:space-y-28">
        <div>
          <div className="mono text-[11px] tracking-[.22em] text-accent-soft uppercase">
            03.1 · Produktdesign
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish mt-3 mb-5">
            Drei Sorten, ein strukturelles System
          </h3>
          <p className="lede max-w-[900px]">
            Traditionale, Basilikum, Knoblauch – jeweils in 250&nbsp;ml Bio-Glasflasche.
            Jede Sorte hat eine eigene Etikettenfarbe, aber dasselbe strukturelle System:
            zentrales Olivenbaum-Emblem, klare Typografie, goldene Akzente. Die Verpackung
            kommuniziert Premium ohne Pomp.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-7 mt-10">
            {[
              { src: 'traditionale.avif', label: 'Traditionale' },
              { src: 'basilikum.avif', label: 'Basilikum' },
              { src: 'knoblauch.avif', label: 'Knoblauch' },
            ].map((b) => (
              <figure key={b.src} className="flex flex-col gap-4">
                <div
                  className="relative rounded-2xl overflow-hidden border border-line-subtle bg-gradient-to-br from-grouped-2 to-grouped-1 flex items-center justify-center"
                  style={{ aspectRatio: '14/10' }}
                >
                  <img
                    src={`assets/oliveto/${b.src}`}
                    alt={`Villa Oliveto – Flasche ${b.label}`}
                    loading="lazy"
                    decoding="async"
                    className="h-[100%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                  />
                </div>
                <figcaption className="mono text-[11px] tracking-[.22em] text-ink-3 uppercase text-center">
                  {b.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div>
          <div className="mono text-[11px] tracking-[.22em] text-accent-soft uppercase">
            03.2 · Website
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish mt-3 mb-5">
            Emotionale Markenführung trifft klare E-Commerce-Pfade
          </h3>
          <p className="lede max-w-[900px]">
            Die Website nutzt großflächige Produktinszenierung, klare Call-to-Actions zum
            Online-Shop, ein Rezept-System als Content-Hub und eine Region-Sektion „Zurück zur
            Natur" zur emotionalen Verankerung. Strukturiert in mehrere Hauptbereiche:
            Landingpage, Produkte, Rezepte, Shop, Newsletter.
          </p>
          <div className="mt-10 mx-auto w-full max-w-[760px] rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line-subtle bg-grouped-2/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 mono text-[10px] tracking-[.18em] text-ink-3 uppercase">
                villaoliveto.de
              </span>
            </div>
            <img
              src="assets/oliveto/website.avif"
              alt="Villa Oliveto – komplette Website (Full-Page-Render)"
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
            />
          </div>
          <Caption center>
            Die Website verbindet emotionale Markenführung mit klaren E-Commerce-Pfaden.
            Wiederkehrende Bildwelten und eine konsistente Typo-Hierarchie ziehen sich durch
            alle Sektionen.
          </Caption>
        </div>

        <div>
          <div className="mono text-[11px] tracking-[.22em] text-accent-soft uppercase">
            03.3 · Social Media
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish mt-3 mb-5">
            Drei Content-Typen, ein Markenkern
          </h3>
          <p className="lede max-w-[900px]">
            Das Social-Media-System wurde in drei Content-Typen strukturiert: Rezepte,
            Qualität (produktinszenierende Mood-Posts) und Sorten (Launch-Content für neue
            Editionen). Jeder Typ hat eine eigene visuelle Sprache, bleibt aber im Markenkern
            verankert.
          </p>

          <div className="mt-12 sm:mt-14 space-y-10 sm:space-y-12">
            {[
              {
                kind: 'qualitat',
                label: 'Qualität',
                desc: 'Produktinszenierende Mood-Posts.',
              },
              {
                kind: 'recept',
                label: 'Rezepte',
                desc: 'Content-Hub mit kuratierten Anwendungsideen.',
              },
              {
                kind: 'sort',
                label: 'Sorten',
                desc: 'Launch-Content für neue Editionen.',
              },
            ].map((row) => (
              <div key={row.kind}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-4 pb-3 border-b border-line-subtle">
                  <span className="mono text-[11px] tracking-[.22em] text-accent-soft uppercase">
                    {row.label}
                  </span>
                  <span className="text-ink-3 text-[14px]">{row.desc}</span>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="rounded-xl overflow-hidden border border-line-subtle bg-grouped-1"
                      style={{ aspectRatio: '1/1' }}
                    >
                      <img
                        src={`assets/oliveto/socials-${row.kind}_${n}.avif`}
                        alt={`Villa Oliveto – Social-Post ${row.label} ${n}`}
                        loading="lazy"
                        decoding="async"
                        className="block w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20">
            <h4 className="text-lg sm:text-xl font-bold tracking-tightish mb-5">
              Im Profil-Kontext
            </h4>
            <div className="flex justify-center">
              <img
                src="assets/oliveto/instagram.avif"
                alt="Villa Oliveto – Instagram-Auftritt"
                loading="lazy"
                decoding="async"
                className="block max-w-full w-auto h-auto max-h-[640px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
              />
            </div>
            <Caption center>
              Drei klar definierte Content-Typen geben dem Auftritt Rhythmus, ohne ihn
              monoton zu machen. Jeder Post folgt eigenen Regeln, aber dem gemeinsamen
              Markenkern.
            </Caption>
          </div>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="04"
      label="REFLEXION"
      title="Was ich aus diesem Projekt mitgenommen habe"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
        <p className="lede">
          Villa Oliveto war für mich die erste vollständige Cross-Media-Markenentwicklung –
          von strategischer Positionierung bis zum konkreten Touchpoint. Was ich daraus
          gelernt habe: Eine Marke ist erst dann tragfähig, wenn jedes Medium dieselbe
          Geschichte erzählt – mit eigenen Mitteln, aber gemeinsamem Kern.
        </p>
        <p className="lede">
          Im Rückblick würde ich heute zwei Dinge anders machen: die Bildwelt stärker in
          einer Bild-Tonalität verankern (statt mehrerer KI-Stile zu mischen) und das
          Designsystem als eigenständiges Dokument formalisieren – genau das, was ich später
          in der Bachelorarbeit umgesetzt habe.
        </p>
      </div>
    </CaseStudySection>

    <NextProjectCTA />
  </>
);
