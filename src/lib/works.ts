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
/*
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
      src: 'assets/codescanner/thumbnail.avif',
      alt: 'CodeScanner Dashboard auf MacBook',
      objectPosition: 'center',
    },
    locked: true,
},*/
  {
    route: 'villa-oliveto',
    href: '/villa-oliveto',
    year: '2024',
    context: 'Studienprojekt · Cross-Media-Webdesign',
    title: 'Villa Oliveto',
    blurb:
      'Italienische Familientradition aus 6 Generationen, modern erzählt. Markenwelt über Produkt, Web und Social Media hinweg.',
    disciplines: ['Brand Design', 'Webdesign', 'Social Media', 'Packaging'],
    image: {
      src: 'assets/oliveto/thumbnail.avif',
      alt: 'Villa Oliveto – Cover-Slide mit Logo und Flasche',
      objectPosition: 'center',
    },
  },
  {
    route: 'garden-connect',
    href: '/garden-connect',
    year: '2024',
    context: 'Studienprojekt · Mobile Design',
    title: 'Garden Connect',
    blurb:
      'Eine Urban-Gardening-App, die Pflanzenidentifikation, AR-Planung und lokale Community in einem System zusammenführt.',
    disciplines: ['Mobile UX', 'iOS Design', 'AR-Konzeption', 'Prototyping'],
    image: {
      src: 'assets/gardenconnect/thumbnail.avif',
      alt: 'Garden Connect – Pflanzenidentifikations-Flow auf drei iPhones',
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
      src: 'assets/av-medien/thumbnail.avif',
      alt: 'Schülerhilfe – Animatic Schlüsselmoment',
      objectPosition: 'center',
    },
  },
];
