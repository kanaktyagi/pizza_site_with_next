import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from './PizzaCard'

function PizzaList() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
    <p className={styles.desc}>
    It tastes like bread tomato and cheese, chewy, moist, slightly acidic, and sharp. 
    Then once you apply toppings, that changes it. Ham and pineapple, adds salty, sweet 
    and juicy. Pepperoni adds a meatiness and spice.
    </p>
    <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
         <PizzaCard/>
    </div>
    </div>
  )
}

export default PizzaList