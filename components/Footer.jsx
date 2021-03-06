import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from 'next/image';
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit='cover'/>
      </div>
       <div className={styles.item}>
          <div className={styles.card}>
          <h2 className={styles.motto}>
          OH YES, WE DID. THE LAMA PIZZA,
          WELL BAKED SLICE OF PIZZA
          </h2>
          </div>
          <div className={styles.card}>
          <h1 className={styles.title}>
          FIND OUR RESTAURANTS
          </h1>
          <p className={styles.text}>
          165 R. Don Road #304.
          <br />Bangalore, 560031
          <br />(602) 894-1010
          </p>
          <p className={styles.text}>
          165 E. ER Road #234.
          <br />NewYork, 560031
          <br />(602) 894-1010
          </p>
          <p className={styles.text}>
          165 R. Don Road #104.
          <br />Hyderabad, 560031
          <br />(602) 894-1010
          </p>
          <p className={styles.text}>
          165 W. Caroll St #124.
          <br />Chennai, 560031
          <br />(602) 894-1010
          </p>
          </div>
          <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
          MONDAY UNTIL FRIDAY
          <br/>
          </p>
          <p className={styles.text}>
          SATURDAY - SUNDAY
          <br /> 12:00 - 24:00
          </p>
          </div>
       </div>
    </div>
  )
}

export default Footer