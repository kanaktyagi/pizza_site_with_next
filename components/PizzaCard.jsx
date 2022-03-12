import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Image from 'next/image'
function PizzaCard() {
  return (
    <div className={styles.container}>
    <Image src="/img/pizza.png" alt="" width="500" height="500"/>
    <h1 className={styles.title}>Farm House </h1>
    <span className={styles.price}> $ 19.90 </span>
    <p className={styles.desc}>
    Loaded with vegetables like capcicum,onion,paneer 
    mushroom loaded with cheese and corn to give you a marvelous 
    experience
    </p>
    </div>
  )
}

export default PizzaCard