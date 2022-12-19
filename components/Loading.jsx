import React from 'react'
import styles from '../styles/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingFrame}>
        <h1 className={styles.title}>All Solutions</h1>
        <div className={styles.wrapper}>
            <div className={styles.slider}>
                <h1>heating</h1>
                <h1>air conditioning</h1>
                <h1>ventilation</h1>
                <h1>a cozy home</h1>
                <h2>heating + air conditioning</h2>
            </div>
        </div>
    </div>
  )
}

export default Loading