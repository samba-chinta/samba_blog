import React from "react"

import Form from "../forms/Form"
import Card from "../UI/Card"
import classes from "../styles/contact.module.css"

const Contact = (props) => {
  return (
    <Card className={classes['contact-wrapper']} id="contact">
      <div className={classes['contact-details']}>
        <h3>Contact</h3>
        <a href="mailto:sambasivareddychinta@gmail.com">Email: sambasivareddychinta@gmail.com</a>
        <a href="tel:+917337375243">Phone Number: (+91)7337375243</a>
        <a href="https://github.com/samba-chinta">Github: samba-chinta</a>
        <a href="https://instagram.com/sambachinta_2787">Instagram: sambachinta_2787</a>
      </div>
      <Form/>
    </Card>
  )
}

export default Contact