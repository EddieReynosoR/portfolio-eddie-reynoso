import { NavBar } from "./components/Navbar"
import { Home } from "./components/Home"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { Content } from "./components/Content"

function App() {

  return (
    <>
      <div id="home"></div>
      <NavBar/>
      <main>
        <Home/>
        <AboutMe/>
        <Content/>
      </main>
      <Footer/>
    </>
  )
}

export default App
