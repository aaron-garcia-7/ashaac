import React from 'react'
import Image from 'next/image';
import { Link } from 'react-scroll';
import styles from '../styles/ToTop.module.css';
import arrow from '../images/arrow.svg';

const ToTop = ({fromTop}) => {

    const activeStyle = {
        opacity: 1,
        pointerEvents: 'all',
        transform: 'translate(0, 0)',
    }

  return (
        <Link to="top" 
        className={styles.toTop}
        style={fromTop ? activeStyle : null}
        smooth={'easeInOutQuint'}
        duration={800}
        delay={40}
        >
            <Image src={arrow} alt=""/>
        </Link>
  )
}

export default ToTop