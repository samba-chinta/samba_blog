import React from "react"

import About from "./components/home/About"
import EduSkills from "./components/home/EduSkills"
import Project from "./components/home/Project"
import Contact from "./components/home/Contact"

const App = () => {
  return (
    <div>
      <About/>
      <EduSkills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App