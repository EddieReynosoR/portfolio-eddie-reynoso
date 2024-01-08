import { NavBar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <Home/>
        <Content/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
