import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import WhatIsAShark from "./sections/WhatIsAShark";
import Evolution from "./sections/Evolution";
import Taxonomy from "./sections/Taxonomy";
import ThresherOverview from "./sections/ThresherOverview";
import ThresherSpeciesSection from "./sections/ThresherSpeciesSection";
import Comparison from "./sections/Comparison";
import Conservation from "./sections/Conservation";
import SourcesAndCredits from "./sections/SourcesAndCredits";

function App() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhatIsAShark />
        <Evolution />
        <Taxonomy />
        <ThresherOverview />
        <ThresherSpeciesSection />
        <Comparison />
        <Conservation />
        <SourcesAndCredits />
      </main>
      <Footer />
    </>
  );
}

export default App;
