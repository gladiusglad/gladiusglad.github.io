import React from 'react'
import styles from './style.module.scss'

import c from './../../lib/className';

export default function Container({children, className}: {children: React.ReactNode, className?: string}) {
  return <div className={c(styles.container, className)}>
    {children}
  </div>
}