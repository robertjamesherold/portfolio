import { CodeScannerHero } from '../CodeScannerHero';
import { KontextProblem } from '../KontextProblem';
import { Research } from '../Research';
import { Methodik } from '../Methodik';
import { IterativerProzess } from '../IterativerProzess';
import { Loesung } from '../Loesung';
import { DesignSystem } from '../DesignSystem';
import { Evaluation } from '../Evaluation';
import { Fazit } from '../Fazit';
import { NextProjectCTA } from './shared';

export const CodeScannerCaseStudy = () => (
  <>
    <CodeScannerHero />
    <KontextProblem />
    <Research />
    <Methodik />
    <IterativerProzess />
    <Loesung />
    <DesignSystem />
    <Evaluation />
    <Fazit />
    <NextProjectCTA />
  </>
);
