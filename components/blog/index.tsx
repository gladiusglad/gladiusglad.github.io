import Head from 'next/head'
import React from 'react'

import styles from './style.module.scss'

export default function Blog(props) {
  return <>
    <Head>
      <title>{props.metadata.title}</title>
    </Head>
    <div className={styles.blog}>
      {props.children}
    </div>
  </>
}