import React from "react"

import Card from "../UI/Card"
import Education from "./Education"
import Skills from "./Skills"
import classes from "../styles/eduskills.module.css"

const EduSkills = () => {
  return (
    <Card className = {classes.eduskills}>
      <Education/>
      <Skills/>
    </Card>
  )
}

export default EduSkills