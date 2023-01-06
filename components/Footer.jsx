import React, { useState } from 'react'
import styles from '../styles/Footer.module.css';
import Heart from './imgComponents/Heart';
import Logo from './imgComponents/Logo';

const Footer = ({theme, setTheme}) => {

  return (
    <footer className={styles.footer}>
      <div className={styles.leftSide}>
        <Logo inFooter={true}/>
        <p>© 2023</p>
      </div>
      <div className={styles.rightSide}>
        <a href="https://aarongarciacreative.com/" target="_blank" rel="noreferrer" className={styles.credits}>Website made with <Heart /> by Aaron Garcia</a>
      </div>
    </footer>
  )
}

export default Footer