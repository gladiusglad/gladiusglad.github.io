import React from 'react'
import { Slide } from 'react-awesome-reveal'
import BackTitle from '../backTitle'
import Container from '../container'

import styles from './style.module.scss'
import containerStyles from '../container/style.module.scss'

import c from '../../lib/className'
import Image from 'next/image'

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
        <div className={styles.wrapper}>
          <a
            className={c(styles.project, containerStyles.width, [right, styles.right], [black, styles.black])}
            style={{backgroundColor: background}}
            href={link}>
            <Container className={styles.content}>
              <BackTitle title={title} startLength={10} right={right} className={styles.backTitle} style={{color: backTitle}} noAnim />
              {img && 
                <div className={styles.img}>
                  <Image src={img} width={480} height={480} unoptimized />
                </div>}
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{desc}</p>
            </Container>
          </a>
        </div>
    </Slide>
  )
}