import React from 'react'
import Container from '../container'
import BackTitle from '../backTitle'

import c from '../../lib/className'

import styles from './style.module.scss'

interface SectionProps {
  title: string,
  black?: boolean,
  containerWidth?: string | number
}

export default function Section({title, black, containerWidth, children}: React.PropsWithChildren<SectionProps>) {
  return <div className={c(styles.section, [black, styles.black])}>
    <BackTitle title={title} right={black} />
    <Container className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </Container>
    <Container className={`content ${styles.container}`} width={containerWidth}>
      {children}
    </Container>
  </div>
}