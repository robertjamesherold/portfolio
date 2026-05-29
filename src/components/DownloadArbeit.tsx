import { Button, Card, Pill } from './atoms';
import { IconArrowRight } from '../lib/icons';

export const DownloadArbeit = () => (
  <section className="container-x py-16 sm:py-24 reveal">
    <Card className="p-10 sm:p-12 lg:p-14 flex flex-col gap-6 items-start sm:items-center sm:text-center bg-gradient-to-b from-accent/[.08] to-transparent border-accent/25">
      <Pill tone="amber">BACHELORARBEIT · BEWERTET MIT 1,0</Pill>
      <h3 className="m-0 text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tightish">
        Die ganze Arbeit lesen
      </h3>
      <p className="m-0 text-ink-2 text-base sm:text-lg max-w-[640px] leading-snug">
        Vollständige Bachelorarbeit als PDF — bewertet mit der Bestnote 1,0.
      </p>
      <Button
        href="/bachelorarbeit-codescanner-robert-james-herold.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vollständige Bachelorarbeit als PDF in neuem Tab öffnen"
        icon={<IconArrowRight width={18} height={18} />}
        className="mt-2"
      >
        Dokumentation öffnen (PDF)
      </Button>
    </Card>
  </section>
);
