import React from 'react'
import styles from '../../styles/Shared.module.css';

const Star = () => {
  return (
    <div className={styles.star}>
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7046 5.64766L10.0588 5.16402L7.85229 0L5.6458 5.17182L0 5.64766L4.28735 9.33736L2.99958 14.8212L7.85229 11.9116L12.705 14.8212L11.4251 9.33736L15.7046 5.64766ZM7.85229 10.4528L4.89983 12.2236L5.68506 8.88492L3.0781 6.63834L6.5174 6.34192L7.85229 3.19826L9.19503 6.34972L12.6343 6.64614L10.0274 8.89272L10.8126 12.2314L7.85229 10.4528Z"/>
    </svg>
    </div>
  )
}

export default Star