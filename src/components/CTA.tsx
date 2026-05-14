import { Button } from './atoms';
import { IconSend, IconPhone } from '../lib/icons';

export const CTA = () => (
  <section id="contact" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 flex justify-center reveal">
    <div
      className="max-w-[1100px] w-full text-center flex flex-col gap-6 items-center rounded-3xl border border-accent/30 px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24"
      style={{
        background: 'radial-gradient(ellipse 600px 300px at 50% 0%, rgba(97,95,255,.25), transparent 70%), #11131A',
      }}
    >
      <h2 className="m-0 text-3xl sm:text-5xl lg:text-[64px] leading-[1.1] font-bold tracking-tighter2">
        Lust, ein konkretes Projekt<br />zu besprechen?
      </h2>
      <p className="m-0 text-base sm:text-lg text-ink-2 max-w-[700px]">
        Ich freue mich auf den Austausch – über UX-Konzepte, Mensch-KI-Kollaboration und alles dazwischen.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center w-full sm:w-auto">
        <Button href="mailto:robertjamesherold@icloud.com" icon={<IconSend />} className="w-full sm:w-auto sm:min-w-[270px]">
          Kontakt aufnehmen
        </Button>
        <Button variant="ghost" href="tel:+4900000000000" icon={<IconPhone />} className="w-full sm:w-auto sm:min-w-[270px]">
          Telefonisch kontaktieren
        </Button>
      </div>
    </div>
  </section>
);
