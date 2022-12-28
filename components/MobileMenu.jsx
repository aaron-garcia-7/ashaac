import React from 'react'
import { Link } from 'react-scroll';
import styles from '../styles/MobileMenu.module.css';
import Logo from './imgComponents/Logo';

const MobileMenu = ({menu, setMenu}) => {
    const menuStyles = {
        opacity: menu ? 1 : 0,
        pointerEvents: menu ? 'all' : 'none',
    }
  return (
    <aside className={styles.menu} style={menuStyles}>
      <Logo dark={true}/>
      <ul className={styles.linkList}>
            <li>
              <Link className={styles.navLink}
                to=""
                smooth={'easeInOutQuint'}
                // offset={50}
                duration={800}
                delay={40}
                onClick={() => setMenu(false)}
                >
              Contact
            </Link>
            </li>
            <li>
              <Link className={styles.navLink}
                to="services"
                smooth={'easeInOutQuint'}
                // offset={50}
                duration={800}
                delay={40}
                onClick={() => setMenu(false)}
                >
              Services
            </Link>
            </li>
            <li>
              <Link className={styles.navLink}
                to=""
                smooth={'easeInOutQuint'}
                // offset={50}
                duration={800}
                delay={40}
                onClick={() => setMenu(false)}
                >
              About
            </Link>
            </li>
            <li>
              <Link className={styles.navLink}
                to=""
                smooth={'easeInOutQuint'}
                // offset={50}
                duration={800}
                delay={40}
                onClick={() => setMenu(false)}
                >
              FAQ
            </Link>
            </li>
        </ul>
        <div className={styles.altMethods}>
          <a href="">801 755 3040</a>
          <a href="">ashaacutah@gmail.com</a>
        </div>
    </aside>
  )
}

export default MobileMenu