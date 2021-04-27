import Head from 'next/head'
import React from 'react'
import Container from '../container'
import { DateTime } from 'luxon'

import styles from './style.module.scss'
import Navbar from '../navbar'

export default function Blog(props) {
  const metadata = props.metadata

  return <>
    <Head>
      <title>{metadata.title} - gladgladius</title>
    </Head>
    <Navbar />
    <div className={styles.jumbotron}>
      <div className={styles.backLeft}><span className={styles.bold}>blog</span>blogblog</div>
      <Container className={styles.container}>
        <h1 className={styles.title}>{metadata.title.toLowerCase()}</h1>
        <h2 className={styles.info}>
          <span className={styles.date}>{DateTime.fromObject(metadata.date).toLocaleString(DateTime.DATE_SHORT)}
          </span> &bull; <a className={styles.topic} href={`/topic/${metadata.topic}`}>{metadata.topic}</a>
        </h2>
      </Container>
    </div>
    <Container>
      {props.children}
    </Container>
  </>
}