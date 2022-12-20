import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.svg';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="" className={styles.logo}/>
      <a href="" className={styles.phone}>801 755 3040</a>
      <nav className={styles.nav}>
        <a href="" className={styles.navLink}>About</a>
        <a href="" className={styles.navLink}>FAQ</a>
      </nav>
      <div className={styles.burgerSpacer} />
    </header>
  )
}

export default Nav