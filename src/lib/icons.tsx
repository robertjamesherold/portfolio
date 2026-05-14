import type { SVGProps } from 'react';

const I = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props} />
);

export const IconBriefcase = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="M6 14a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2l2 2h6a2 2 0 0 1 2 2v1"/><path d="M2 13h20l-2.45 7.34A2 2 0 0 1 17.65 22H6.35a2 2 0 0 1-1.9-1.66Z"/></I>
);
export const IconSend = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></I>
);
export const IconArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></I>
);
export const IconWand = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="m7 21-4.348-4.348a2 2 0 0 1 0-2.828l14.142-14.142a2 2 0 0 1 2.828 0l4.348 4.348a2 2 0 0 1 0 2.828L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></I>
);
export const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></I>
);
export const IconChart = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></I>
);
export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></I>
);
export const IconClose = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></I>
);
export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.37 1.88.72 2.77a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.31-1.31a2 2 0 0 1 2.11-.45c.89.35 1.82.59 2.77.72A2 2 0 0 1 22 16.92z"/></I>
);
export const IconDownload = (p: SVGProps<SVGSVGElement>) => (
  <I {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></I>
);
