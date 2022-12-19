import React from 'react'
import styles from '../styles/HeroText.module.css';
import Text1 from './heroText/Text1';
import Text2 from './heroText/Text2';
import Text3 from './heroText/Text3';
import Text4 from './heroText/Text4';

const HeroText = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.slider}>
            <Text1 />
            <h1 className={styles.a11y}>heating</h1>
            <Text2 />
            <h1 className={styles.a11y}>air conditioning</h1>
            <Text3 />
            <h1 className={styles.a11y}>ventilation</h1>
            <Text4 />
            <h1 className={styles.a11y}>a cozy home</h1>
            <br />
            <Text1 />
        </div>
    </div>
  )
}

export default HeroText