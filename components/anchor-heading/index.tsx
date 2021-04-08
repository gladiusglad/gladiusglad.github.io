import React, { HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import getId from './../../lib/getId';

import styles from './style.module.scss'

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6,
  id?: string,
  noAnchorButton?: boolean
}

export default function Heading({level, children, className, id, noAnchorButton, ...props}: HeadingProps) {
  const Element = `h${level}`
  const newId = id || (children ? getId(children.toString()) : null)

  return (
    // @ts-ignore
    <Element {...props} id={newId} className={styles.heading + (className ? ' ' + className : '')}>
      {!noAnchorButton && 
        <a href={`#${newId}`} className={styles.anchor} aria-label={`Link to ${newId}`} aria-hidden><FontAwesomeIcon icon={faLink} /></a>}
      {children}
    </Element>
  )
}