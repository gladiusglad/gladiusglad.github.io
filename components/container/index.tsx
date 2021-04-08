import React from 'react'
import styles from './style.module.scss'

import c from './../../lib/className'

interface ContainerProps {
  style?: React.CSSProperties,
  width?: string | number,
  className?: string
}

export default function Container({children, className, width, style}: React.PropsWithChildren<ContainerProps>) {
  return <div className={c(styles.container, [!width, styles.padding], [!width, styles.maxWidth], className)} style={{width: width, ...style}}>
    {children}
  </div>
}