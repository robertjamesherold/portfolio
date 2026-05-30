import type { Route } from './router';

export type Work = {
  route: Route;
  href: string;
  year: string;
  context: string;
  title: string;
  blurb: string;
  disciplines: string[];
  image: { src: string; alt: string; objectPosition?: string };
  locked?: boolean;
};

export const works: Work[] = [
  {
    route: 'codescanner',
    href: '/codescanner',
    year: '2026',
    context: 'Bachelorarbeit · IU Internationale Hochschule',
    title: 'CodeScanner',
    blurb:
      'Ein KI-gestütztes Analyse-Tool für mehr Vertrauen in KI-generierten Code – vom Research bis zum vollständigen Designsystem.',
    disciplines: ['UX/UI Design', 'Research', 'Designsystem', 'Visual Design'],
    image: {
      src: '/assets/codescanner/prototyp_04-1200.avif',
      alt: 'CodeScanner Dashboard auf MacBook',
      objectPosition: 'center',
    },
  },
  {
    route: 'villa-oliveto',
    href: '/villa-oliveto',
    year: '2024',
    context: 'Studienprojekt · Product & Social Media Design',
    title: 'Villa Oliveto',
    blurb:
      'Italienische Familientradition aus 6 Generationen, modern erzählt. Markenwelt über Produkt, Web und Social Media hinweg.',
    disciplines: ['Brand Design', 'Webdesign', 'Social Media', 'Packaging'],
    image: {
      src: '/assets/oliveto/thumbnail.avif',
      alt: 'Villa Oliveto – Cover-Slide mit Logo und Flasche',
      objectPosition: 'center',
    },
  },
  {
    route: 'schuelerhilfe',
    href: '/schuelerhilfe',
    year: '2025',
    context: 'Studienprojekt · Design audio-visueller Medien',
    title: 'Träume werden wahr',
    blurb:
      'Ein 30-Sekunden-Werbespot für die Schülerhilfe – von Plot über Drehbuch und Storyboard bis zum fertigen Animatic.',
    disciplines: ['Konzept & Drehbuch', 'Storyboard', 'Animation', 'Schnitt'],
    image: {
      src: '/assets/av-medien/thumbnail.avif',
      alt: 'Schülerhilfe – Animatic Schlüsselmoment',
      objectPosition: 'center',
    },
  },
];
