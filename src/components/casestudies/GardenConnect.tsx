import { CaseStudyHero, CaseStudySection, Caption, Placeholder, NextProjectCTA } from './shared';

const meta = [
  { k: 'ROLLE', v: 'UX/UI Konzeption, iOS Mobile Design, Prototyping' },
  { k: 'DAUER', v: 'Studienprojekt – Modul Mobile Design' },
  { k: 'TOOLS', v: 'Figma, Adobe InDesign' },
  { k: 'PLATTFORM', v: 'iOS (Native, iPhone)' },
  { k: 'SCHWERPUNKT', v: 'Mobile UX, AR-Konzeption, Designsystem' },
];

type Feature = {
  n: string;
  title: string;
  body: string;
  image?: { src: string; alt: string };
  placeholder?: string;
};

const features: Feature[] = [
  {
    n: '01',
    title: 'Pflanzenidentifikation',
    body:
      'Die Kamera erkennt Pflanzen auf einen Klick. Erkannte Pflanzen können direkt in den persönlichen Pflegeplan übernommen werden – mit automatischen Erinnerungen für Gießen, Düngen, Ernten und kontextbezogenen Pflegetipps.',
    image: {
      src: 'assets/gardenconnect/pflanzenidentifikation.avif',
      alt: 'Garden Connect – Pflanzenidentifikations-Flow auf drei iPhones (Kamera → Erkennung → Pflegeplan)',
    },
  },
  {
    n: '02',
    title: 'AR-Garten',
    body:
      'Pflanzen werden über die Kamera virtuell im realen Raum platziert – auf Balkon, Terrasse oder im Garten. Die App bewertet, ob der gewählte Standort ideal ist (Licht, Boden, Klima) und speichert Platzierungen in einer persönlichen Galerie.',
    image: {
      src: 'assets/gardenconnect/ar-finder.avif',
      alt: 'Garden Connect – AR-Flow auf drei iPhones (Kamera-AR → Pflanzenauswahl → Standortbewertung)',
    },
  },
  {
    n: '03',
    title: 'Community-Projekte',
    body:
      'Lokale Gartenprojekte werden auf einer Karte sichtbar gemacht. Nutzer können Projekte entdecken, sich als Helfer eintragen, im Chat mit Initiatoren kommunizieren oder eigene Projekte starten – inklusive Helfer-Verwaltung, Budget und Zielgruppen-Definition.',
    image: {
      src: 'assets/gardenconnect/community.avif',
      alt: 'Garden Connect – Community-Flow auf drei iPhones (Projektliste → Karte → Projekt-Tooltip)',
    },
  },
];

export const GardenConnect = () => (
  <>
    <CaseStudyHero
      tag="STUDIENPROJEKT · MOBILE DESIGN · 2024"
      title="Garden Connect"
      subline="Stadtbewohner wollen gärtnern, scheitern aber oft an Zeit, Wissen und fehlender Anleitung. Garden Connect ist ein konzeptioneller iOS-App-Entwurf, der drei Bereiche zusammenführt: KI-gestützte Pflanzenidentifikation, AR-Visualisierung für die Gartenplanung und ein Community-System für lokale Garten-Projekte."
      meta={meta}
      visual={
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {[
            {
              src: 'gardenconnect/identification.avif',
              alt: 'Garden Connect – Pflanzenidentifikation (Zucchini-Detail)',
              label: 'Pflanzenidentifikation',
            },
            {
              src: 'gardenconnect/ar.avif',
              alt: 'Garden Connect – AR-Garten (virtuelle Pflanze auf Balkon)',
              label: 'AR-Garten',
            },
            {
              src: 'gardenconnect/projekte.avif',
              alt: 'Garden Connect – Community-Projekte mit Karte und Tab-Bar',
              label: 'Community',
            },
          ].map((p) => (
            <figure key={p.src} className="flex flex-col gap-4">
              <div
                className="relative rounded-2xl overflow-hidden  flex items-center justify-center p-4 sm:p-6"
                style={{ aspectRatio: '9/16' }}
              >
                <img
                  src={`assets/${p.src}`}
                  alt={p.alt}
                  decoding="async"
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
              </div>
              <figcaption className="mono text-[11px] tracking-[.22em] text-ink-3 uppercase text-center">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      }
    />

    <CaseStudySection
      num="01"
      label="PROBLEM & IDEE"
      title="Gärtnern ohne Vorwissen – wie?"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <p className="lede">
          Urban Gardening ist ein wachsender Trend – aber für viele Einsteiger eine Hürde.
          Welche Pflanze passt an welchen Standort? Wie oft gießen? Wann ernten? Bestehende
          Apps (etwa PictureThis) lösen Teilprobleme, aber keiner verbindet die drei zentralen
          Phasen: Lernen, Planen, Gemeinsam machen.
        </p>
        <p className="lede">
          Garden Connect setzt genau dort an: Eine App, die Pflanzen identifiziert, virtuell
          platziert und lokale Communities verbindet – als integriertes System, nicht als
          Sammlung isolierter Tools.
        </p>
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="02"
      label="DREI HAUPTFEATURES"
      title="Pflanzenidentifikation · AR-Garten · Community"
    >
      <div className="space-y-16 sm:space-y-24">
        {features.map((f) => (
          <div key={f.n} className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="mono text-[11px] tracking-[.22em] text-accent-soft uppercase">
                Feature {f.n}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish mt-3 mb-5">
                {f.title}
              </h3>
              <p className="lede">{f.body}</p>
            </div>
            {f.image ? (
              <div className="rounded-2xl overflow-hidden p-5 sm:p-7 flex items-center justify-center min-h-[300px]">
                <img
                  src={f.image.src}
                  alt={f.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-auto max-h-[520px] object-contain"
                />
              </div>
            ) : (
              <Placeholder
                label={f.placeholder ?? ''}
                ratio="16/10"
                hint="aus Mobile-Abgabe – Screens"
              />
            )}
          </div>
        ))}
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="03"
      label="DESIGNSYSTEM & iOS-PATTERNS"
      title="iOS-nativ gedacht, nicht iOS-nachgebaut"
      intro="Garden Connect nutzt iOS-Konventionen konsequent: SF Pro Schriftfamilie mit voller Hierarchie-Skala, eine Tab-Bar mit fünf Hauptsektionen (Start, Pflanzen, Kamera, Galerie, Projekte), native Modal-Patterns für Permissions und Bestätigungen, und ein Farbsystem aus Primärgrün, beigem Tertiary und neutralen Greys."
    >
      <p className="lede max-w-[1100px]">
        Auch Edge Cases wurden gestaltet: leere Formularfelder mit Pflichtfeld-Markierungen,
        Validierungs-Hints, Bestätigungs-Modals beim Verlassen ohne Speichern,
        Permission-Prompts beim Importieren von Kontakten. Das macht den Klickdummy zu einem
        realistischen Mini-Produkt, nicht zu einer Galerie schöner Screens.
      </p>
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-12">
        <div>
          <div className="rounded-2xl h-full overflow-hidden border border-line-subtle bg-grouped-1 flex items-center justify-center ">
            <img
              src="assets/gardenconnect/designsytem.avif"
              alt="Garden Connect – Designsystem-Sheet mit SF Pro Typografie-Hierarchie und Farbsystem"
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
            />
          </div>
          <Caption>Typo-Hierarchie und Farbsystem auf einen Blick.</Caption>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden border border-line-subtle bg-grouped-1 flex items-center justify-center h-full min-h-[300px]">
            <img
              src="assets/gardenconnect/edge-cases.avif"
              alt="Garden Connect – Projektansicht mit Pflichtfeld-Markierungen, Validierungs-Hints und Speichern-Bestätigung"
              loading="lazy"
              decoding="async"
              className="block w-full h-auto max-h-[520px] object-contain"
            />
          </div>
          <Caption>
            Edge Cases als ernstgenommener Teil des Designs: Pflichtfeld-Markierungen,
            Validierungs-Hints, Speichern-Flow.
          </Caption>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection
      num="04"
      label="KLICKDUMMY & PROTOTYP"
      title="Vom Mockup zum bedienbaren Prototyp"
      intro="Garden Connect existiert als klickbarer Figma-Prototyp – mit funktionierender Tab-Navigation, Screen-Transitions und durchgängigen Interaktionspfaden. Der Prototyp deckt alle drei Hauptfeatures vollständig ab, inklusive Onboarding, Settings und Profilbereich."
    >
      <div className="mt-8 rounded-2xl overflow-hidden border border-line-subtle bg-[#1e1e1e]">
        <div className="relative w-full" style={{ paddingBottom: '70%' }}>
          <iframe
            src="https://embed.figma.com/proto/QhzIrTI4iQaL6V2YY7cywG/Herold-Robert_James_102203618_MobileDesign_P3_A_Klickdummy?page-id=8030%3A17550&node-id=8030-17551&starting-point-node-id=8030%3A17551&scaling=scale-down&content-scaling=responsive&embed-host=share&hide-ui=1"
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            title="Garden Connect – Figma Prototyp"
          />
        </div>
      </div>
      <p className="text-ink-3 text-sm mt-4">
        Klicke durch den Prototyp – Tab-Navigation, Flows und Interaktionen sind vollständig bedienbar.
        <a
          href="https://embed.figma.com/proto/QhzIrTI4iQaL6V2YY7cywG/Herold-Robert_James_102203618_MobileDesign_P3_A_Klickdummy?page-id=8030%3A17550&node-id=8030-17551&starting-point-node-id=8030%3A17551&content-scaling=fixed&embed-host=share"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-accent-soft hover:underline"
        >
          Im Vollbild öffnen ↗
        </a>
      </p>
    </CaseStudySection>

    <CaseStudySection
      num="05"
      label="REFLEXION"
      title="Was Garden Connect gezeigt hat"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">
        <p className="lede">
          Das Projekt war meine erste vollständige Mobile-Konzeption – von Konkurrenzanalyse
          über Designsystem bis zum klickbaren Prototyp. Was ich gelernt habe: Mobile UX ist
          nicht „kleinere Screens", sondern eine eigene Denkweise mit eigenen Patterns,
          eigenem Spacing und eigenen Erwartungshaltungen.
        </p>
        <p className="lede">
          Was ich heute anders machen würde: Eine echte Nutzertest-Phase mit der Zielgruppe
          einbauen – die Annahmen über „typische Urban Gardener" stützen sich aktuell auf
          Sekundärrecherche und nicht auf Gespräche mit echten Nutzern. Diesen Anspruch habe
          ich später in der Bachelorarbeit konsequent eingelöst.
        </p>
      </div>
    </CaseStudySection>

    <NextProjectCTA />
  </>
);
