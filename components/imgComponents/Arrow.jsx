import React from 'react'

const Arrow = ({col3}) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.93846 18L0 16.0615L13.2923 2.76923H1.38462V0H18V16.6154H15.2308V4.70769L1.93846 18Z" fill={col3 ? '#4D527E' : '#5D9AC5'}/>
    </svg>
    )
}

export default Arrow