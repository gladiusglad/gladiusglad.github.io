import React from 'react'
import Container from '../container'

import styles from './style.module.scss'

const backTitleStartLength = 2,
  backTitleEndRepeat = 3;

interface SectionProps {
  title: string,
  gray?: boolean
}

export default function Section({title, gray = true, children}: React.PropsWithChildren<SectionProps>) {
  let backTitle = title.toLowerCase(),
    backTitleStart = backTitle.substring(backTitle.length - backTitleStartLength),
    backTitleEnd = backTitle.repeat(backTitleEndRepeat);

  return <div className={styles.section}>
    <h1 className={styles.backTitle}>{backTitleStart}<span className={styles.bold}>{backTitle}</span>{backTitleEnd}</h1>
    <Container className="content">
      <h1 className={styles.title}>{title}</h1>
      {children}
    </Container>
  </div>
}