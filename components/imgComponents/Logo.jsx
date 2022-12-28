import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import fullLogo from '../../images/fullLogo.svg';
import fullLogo2 from '../../images/fullLogo2.svg';
import styles from '../../styles/MobileMenu.module.css';

const Logo = (dark) => {
    const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // if (isDark) {
    //     setDarkTheme(true);
    // }
    isDark ? setDarkTheme(true) : null;
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if(e.matches) {
            setDarkTheme(true);
        } else {
            setDarkTheme(false);
        }
    })
  }, []);

  return (
    <div className={styles.logoDiv}>
        <Image src={!darkTheme ? fullLogo : fullLogo2} alt="All Solutions heating & air conditioning" />
    </div>
  )
}

export default Logo