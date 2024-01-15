import { NavBar } from "./components/Navbar"
import { Home } from "./components/Home"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { Content } from "./components/Content"
import {  useEffect } from "react"
import { useSections } from "./hooks/useSections"

function App() {
  
  const { 
    projectRef,
    skillRef,
    experienceRef,
    certificationRef, 
    closestSection,
    setClosestSection } = useSections()

  useEffect(()=>{
    const handleScroll = () => {
      const distances = [
        projectRef.current 
        ? Math.abs(projectRef.current.getBoundingClientRect().top) : Infinity,
        skillRef.current 
        ? Math.abs(skillRef.current.getBoundingClientRect().top) : Infinity,
        experienceRef.current 
        ? Math.abs(experienceRef.current.getBoundingClientRect().top) : Infinity,
        certificationRef.current 
        ? Math.abs(certificationRef.current.getBoundingClientRect().top) : Infinity,
      ]

      

      // Find the index of the section with the minimum distance
      const minDistanceIndex = distances.indexOf(Math.min(...distances))

      console.log()
      setClosestSection(
        minDistanceIndex === 0
        ? "Projects"
        : minDistanceIndex === 1
        ? "Skills"
        : minDistanceIndex === 2
        ? "Experience"
        : "Certifications"
      )
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll)

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
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

export default App
