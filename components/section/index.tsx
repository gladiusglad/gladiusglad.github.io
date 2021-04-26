import React from 'react'
import Container from '../container'
import BackTitle from '../back-title'
import Heading from './../anchor-heading'

import c from '../../lib/className'

import styles from './style.module.scss'

interface SectionProps {
  title: string,
  black?: boolean,
  containerWidth?: string | number,
  noContent?: boolean
}

export default function Section({title, black, containerWidth, noContent, children}: React.PropsWithChildren<SectionProps>) {
  return <div className={c(styles.section, [black, styles.black])}>
    <BackTitle title={title} right={black} />
    <Container className={styles.container}>
      <Heading level={1} className={styles.title}>{title}</Heading>
    </Container>
    <Container className={c(styles.container, [!noContent, 'content'])} width={containerWidth}>
      {children}
    </Container>
  </div>
}