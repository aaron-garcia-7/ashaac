import React from 'react'
import styles from '../styles/MobileMenu.module.css';

const MobileMenu = ({menu, setMenu}) => {

    const menuStyles = {
        opacity: menu ? 1 : 0,
        pointerEvents: menu ? 'all' : 'none',
    }
  return (
    <aside className={styles.menu} style={menuStyles}>MobileMenu</aside>
  )
}

export default MobileMenu