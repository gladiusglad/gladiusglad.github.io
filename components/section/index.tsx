import React from 'react'
import Container from '../container'
import Fade from '../fade'
import { keyframes } from "@emotion/react"

import c from '../../lib/className'

import styles from './style.module.scss'

const backTitleStartLength = 2,
  backTitleEndRepeat = 5;

const backTitleKeyframes = keyframes`
  from {
    transform: translate3d(-100em, 0, 0);
    letter-spacing: 5em;
  }
  to {
    transform: translate3d(0, 0, 0);
    letter-spacing: normal;
  }
`

interface SectionProps {
  title: string,
  black?: boolean
}

export default function Section({title, black, children}: React.PropsWithChildren<SectionProps>) {
  let backTitle = title.toLowerCase().replace(/\s/g, ''),
    backTitleStart = backTitle.substring(backTitle.length - backTitleStartLength),
    backTitleEnd = backTitle.repeat(backTitleEndRepeat);

  return <div className={c(styles.section, [black, styles.black])}>
    <Fade keyframes={backTitleKeyframes} className={styles.backTitleFade} duration={2000} >
      <h1 className={styles.backTitle}>{backTitleStart}<span className={styles.bold}>{backTitle}</span>{backTitleEnd}</h1>
    </Fade>
    <Container className={`content ${styles.container}`}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </Container>
  </div>
}