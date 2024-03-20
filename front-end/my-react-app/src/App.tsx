import HeroScrollDemo from "./components/HeroScrollDemo";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { TracingBeamDemo } from "./components/TracingBeamDemo";
import { StickyScrollRevealDemo } from "./components/StickyScrollRevealDemo";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import { GridBackgroundDemo } from "./components/GridBackgroundDemo";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individual" element={<HeroScrollDemo />} />
        <Route path="/Work Experience" element={<TracingBeamDemo />} />
        <Route path="/web" element={<StickyScrollRevealDemo />} />
        <Route path="/technology" element={<CardHoverEffectDemo />} />
      </Routes>
      <GridBackgroundDemo />
    </>
  );
}
