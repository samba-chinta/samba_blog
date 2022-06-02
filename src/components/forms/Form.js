import React from 'react'

import classes from './form.module.css'

const Form = () => {
  return (
    <form className = {classes.form}>
      <h3>Let's Talk</h3>
      <input type="text" placeholder="Name or Organisation Name"/>
      <input type="email" placeholder="Email Address"/>
      <textarea cols={10} rows={5} placeholder="Message"></textarea>
      <input type="submit" value="Send Message"/>
    </form>
  )
}

export default Form;