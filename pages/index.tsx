import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/section'
import Container from '../components/container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/index.module.scss'
import Skills from '../components/skills'

const title = 'gladgladius',
  description = 'hello! i\'m a new developer currently dabbling in react, java, and more. learn more about me!',
  skills = [
    'react',
    'javascript',
    'html',
    'css/scss/sass',
    'mongoDB',
    'mySQL',
    'webpack',
    'next.js',
    'java',
    'c#',
    'wpf',
    'graphics',
    'video editing',
  ]

export default function Home() {

  useEffect(() => {
    const fluid = async () => {
      const WebglFluid = (await import('webgl-fluid')).default
      WebglFluid(document.querySelector('canvas'), {
        BLOOM: false,
        SPLAT_INTERVAL: 12000
      })
    }

    fluid()
  }, [])

  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
    </Head>
    <div className={styles.jumbotron}>
      <canvas width={0} height={0} className={styles.canvas} />
      <Container className={styles.container}>
        <h1 style={{fontWeight: 300, marginBottom: '-0.5rem'}}>hello! i'm</h1>
        <Image unoptimized src="./img/gladgladius-logo.png" width={475} height={220} alt="gladgladius" className={styles.image} />
        <Skills style={{marginTop: '4rem'}} skills={skills} />
        <div style={{marginTop: '4rem', textAlign: 'center'}}>
          <div>
            <a title="gladiusglad" className={`${styles.contact} ${styles.icon}`} href="https://github.com/gladiusglad" target="__blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a title="glad#2095" className={`${styles.contact} ${styles.icon}`} href="https://discord.com/users/443441102805270528" target="__blank">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
          <div style={{marginTop: 5}}>
            <a className={`${styles.contact} ${styles.email}`} href="mailto:defoverthought@gmail.com">defoverthought@gmail.com</a>
          </div>
        </div>
      </Container>
    </div>
    <Section title="about">
      <p>
        Hello! I'm GladGladius. I'm a new developer currently dabbling in React, Next.js, and more.
        Although still a <em>couple</em> years away from a computer science degree, I'm pursuing <i>web development</i> - mostly front-end.
      </p>
      <p>
        I'm proficient in React, <a href="https://nextjs.org/">Next.js</a>, and TypeScript.
        I'm also experienced in MySQL, MongoDB, Java, and C#. Besides coding, I can do some graphic design and video editing too.
      </p>
      <p>
        I love coding. I've been doing it since I was 8! As any other self-respecting nerdy preteen, I started with coding simple games.
        First with <a href="https://scratch.mit.edu/">Scratch</a>, then <em>real</em> game engines such as GameMaker and Unity.
        But I also dipped my toes in website-making - I'd steal some HTML by Inspect Element-ing websites and restyle it with my own CSS.
        My first deep dive, though, was not until 2020 when I wrote a website for a Minecraft server.
        It was at that moment that I found my true passion - <s>stealing code</s> web development.
        I've been coding ever since!
      </p>
    </Section>
    <Container className={styles.comingSoon}>
      more coming soon™!
    </Container>
  </>
}
