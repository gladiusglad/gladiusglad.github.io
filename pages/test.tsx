import React from 'react'
import Head from 'next/head'
import Section from '../components/section'

export default function Test() {
  return <>
    <Head>
      <title>Test</title>
    </Head>
    <Section title="test" black>
      <p>Test successful!</p>
    </Section>
  </>
}