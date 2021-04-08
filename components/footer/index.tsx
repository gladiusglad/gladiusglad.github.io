import React from 'react'

import styles from './style.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p style={{float: 'left'}}>Copyright © 2021, GladGladius</p>
      <p style={{float: 'right'}}>All rights reserved</p>
      <div style={{clear: 'both'}} />
      <div className={styles.fin}>fin.</div>
    </div>
  )
}
