import { SectionHeading } from './atoms';

const FIGMA_SRC =
"https://embed.figma.com/proto/dxboDqm5gbLBZe8lTPbvcV/02_InteraktivePrototypen?team_id=1616649823764838779&node-id=1-7200&page-id=0%3A1&starting-point-node-id=1%3A7200&content-scaling=contain&scaling=contain&embed-host=share"
export const Prototyp = () => (
  <section className="section-y container-x reveal">
    <SectionHeading
      num="06" label="INTERAKTIVER PROTOTYP"
      title="CodeScanner zum Anfassen"
      sub="Der finale Figma-Prototyp bildet den Bearbeitungspfad vollständig ab – Übersicht, Bereinigen, Absichern und Optimieren als zusammenhängende Klickstrecke. Nutzende erleben den geführten Workflow direkt im Browser."
    />

    <div className="mt-12 sm:mt-16 rounded-2xl border border-line-subtle bg-grouped-1 p-3 sm:p-4">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-bg">
        <iframe
          src={FIGMA_SRC}
          title="CodeScanner – Interaktiver Figma-Prototyp"
          loading="lazy"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  </section>
);
