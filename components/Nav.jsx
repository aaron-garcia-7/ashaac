import React from 'react'
import { Link } from 'react-scroll';
import Image from 'next/image'
import logo from '../images/logo.svg';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="" className={styles.logo}/>
      <a href="" className={styles.phone}>801 755 3040</a>
      <nav className={styles.nav}>
        <Link to="about"                 
          className={styles.navLink}
          smooth={'easeInOutQuint'}
          duration={800}
          delay={40}
          >
          About
        </Link>
        <Link to="FAQ"                 
          className={styles.navLink}
          smooth={'easeInOutQuint'}
          duration={800}
          delay={40}
          >
          FAQ
        </Link>
      </nav>
      <div className={styles.burgerSpacer} />
    </header>
  )
}

export default Nav