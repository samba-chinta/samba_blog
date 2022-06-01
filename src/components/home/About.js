import React from "react"

import Card from "../UI/Card"
import classes from "./about.module.css"

const About = () => {
  return (
    <Card className = {classes['about-me']}>
      <h3>About Me</h3>
      <p>
        I'm <b>Chinta Venkata Naga Gopi Samba Siva Reddy</b>.Currently, I am pursuing
        undergraduate <b>Computer Science</b> degree from "Gayatri Vidya Parishad College of 
        Engineering", Visakhapatnam. I am currently working on Full Stack Web development with
        primary skills includes HTML, CSS, JavaScript, Python, CPP, React.js, Node.js and Java.
      </p>
    </Card>
  )
}

export default About