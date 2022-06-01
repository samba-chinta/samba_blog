import React from "react"
import classes from './card.module.css'

const Card = (props) => {
  const card_classes = `${classes.card} ${props.className}`
  return (
    <div className = {card_classes}>
      {props.children}
    </div>
  )
}

export default Card