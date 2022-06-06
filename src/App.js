import React from "react"

import Navigation from "./components/navigation/Navigation"
import About from "./components/home/About"
import EduSkills from "./components/home/EduSkills"
import Project from "./components/home/Project"
import Contact from "./components/home/Contact"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Navigation/>
      <About/>
      <EduSkills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App