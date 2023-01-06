import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import fullLogo from '../../images/fullLogo.svg';
import fullLogo2 from '../../images/fullLogo2.svg';
import styles from '../../styles/MobileMenu.module.css';

const Logo = ({inFooter}) => {

  return (
    <div className={inFooter ? styles.footerLogo : styles.logoDiv}>
        <Image src={fullLogo2} alt="All Solutions heating & air conditioning" />
    </div>
  )
}

export default Logo