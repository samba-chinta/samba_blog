import React from "react"

import classes from "./education.module.css"

const Education = () => {
  return (
    <div className={classes.education}>
      <h3>Education</h3>
      <ol>
        <li>
          <p>Gayatri Vidya Parishad College of Engineering (B.Tech)</p>
          <div className={classes.details}>
            {/* <span>B.Tech (CSE)</span> */}
            <span>2019-Present</span>
            <span>Percentage - 86.25%</span>
          </div>
        </li>
        <li>
          <p>TLMSM Junior College (Intermediate)</p>
          <div className={classes.details}>
            {/* <span>Intermediate (M.P.C)</span> */}
            <span>2017-2019</span>
            <span>Percentage - 97.9%</span>
          </div>
        </li>
        <li>
          <p>Sri Sarada Vidyanikethan High School (10th)</p>
          <div className={classes.details}>
            {/* <span>10th Standard</span> */}
            <span>2016-2017</span>
            <span>CGPA - 10.0</span>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default Education