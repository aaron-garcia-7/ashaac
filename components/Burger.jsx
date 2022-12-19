import React from 'react'
import styles from '../styles/Burger.module.css';

const Burger = ({menu, setMenu}) => {
  

  return (
    <div className={!menu ? styles.menu : styles.active} onClick={() => setMenu(prev => !prev)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
    </div>
    )
}

export default Burger