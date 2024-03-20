import { MacbookScrollDemo } from "../MacbookScrollDemo";

import { ThreeDCardDemo } from "../ThreeDCardDemo";
import Para from "../Para";
import { StickyScrollRevealDemo } from "../StickyScrollRevealDemo";
import { CardHoverEffectDemo } from "../CardHoverEffectDemo";
import { TracingBeamDemo } from "../TracingBeamDemo";

export default function Home() {
  return (
    <>
      <ThreeDCardDemo />
      <MacbookScrollDemo />
      <CardHoverEffectDemo />
      <TracingBeamDemo />
      <StickyScrollRevealDemo />
      <Para />
    </>
  );
}
