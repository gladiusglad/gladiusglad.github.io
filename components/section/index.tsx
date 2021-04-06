import React from 'react'
import Container from '../container'
import Fade from '../fade'
import { keyframes } from "@emotion/react"

import c from '../../lib/className'

import styles from './style.module.scss'

const backTitleStartLength = 2,
  backTitleEndRepeat = 5;

interface SectionProps {
  title: string,
  black?: boolean
}

export default function Section({title, black, children}: React.PropsWithChildren<SectionProps>) {
  const backTitle = title.toLowerCase().replace(/\s/g, ''),
    backTitleStart = black ?
      backTitle.substring(0, backTitleStartLength) :
      backTitle.substring(backTitle.length - backTitleStartLength),
    backTitleEnd = backTitle.repeat(backTitleEndRepeat),
    backTitleKeyframes = keyframes`
      from {
        transform: translate3d(${black ? '' : '-'}100em, 0, 0);
        letter-spacing: 5em;
      }
      to {
        transform: translate3d(0, 0, 0);
        letter-spacing: normal;
      }
    `

  return <div className={c(styles.section, [black, styles.black])}>
    <Fade keyframes={backTitleKeyframes} className={styles.backTitleFade} duration={2000} >
      <h1 className={styles.backTitle}>{black ? backTitleEnd : backTitleStart}<span className={styles.bold}>{backTitle}</span>{black ? backTitleStart : backTitleEnd}</h1>
    </Fade>
    <Container className={`content ${styles.container}`}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </Container>
  </div>
}