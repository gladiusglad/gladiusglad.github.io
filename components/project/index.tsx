import React from 'react'
import { Slide } from 'react-awesome-reveal'

import styles from './style.module.scss'

import c from '../../lib/className'
import BackTitle from '../backTitle'

interface ProjectProps {
  title: string,
  desc: string,
  background?: string,
  backTitle?: string,
  img?: string,
  link?: string,
  black?: boolean,
  right?: boolean
}

export default function Project({title, desc, background, backTitle, img, link, black, right}: ProjectProps) {
  return (
    <Slide triggerOnce direction={right ? 'right' : 'left'}>
      <a className={styles.anchor} href={link}>
        <div className={c(styles.project, [right, styles.right], [black, styles.black])} style={{backgroundColor: background}}>
          <BackTitle title={title} startLength={4} right={right} className={styles.backTitle} style={{color: backTitle}} noAnim />
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{desc}</p>
        </div>
      </a>
    </Slide>
  )
}