import { NavBar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";
import { Content } from "./pages/Content/Content";
import { useSections } from "./hooks/useSections";

import { useEffect } from "react";

function App() {
  
  const { 
    projectRef,
    skillRef,
    experienceRef,
    certificationRef, 
    setClosestSection } = useSections()

  useEffect(() => {
    const handleScroll = () => {
      const refs = [projectRef, skillRef, experienceRef, certificationRef];
      const distances = refs.map(ref =>
        ref.current
          ? Math.abs(ref.current.getBoundingClientRect().top)
          : Infinity
      );

      const minDistanceIndex = distances.indexOf(Math.min(...distances));

      let closestSection: string;

      switch (minDistanceIndex) {
        case 0:
          closestSection = "Projects";
          break;
        case 1:
          closestSection = "Skills";
          break;
        case 2:
          closestSection = "Experience";
          break;
        default:
          closestSection = "Certifications";
          break;
      }

      setClosestSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [projectRef, skillRef, experienceRef, certificationRef, setClosestSection]);

  return (
    <>
      <div id="home"></div>
      <NavBar/>
      <main>
        <Home/>
        <AboutMe/>
        <Content />
      </main>
      <Footer/>
    </>
  )
}

export default App;