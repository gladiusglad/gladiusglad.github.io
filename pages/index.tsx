import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/section'
import Container from '../components/container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/index.module.scss'

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
  let typing, skillIndex = 0, currentLength = 0
  const timeouts = []
  const [caret, setCaret] = useState(true)
  const [skill, setSkill] = useState('')

  const addTimeout = (callback, ms) => {
    timeouts.push(setTimeout(callback, ms))
  }

  const typeSkill = () => {
    typing = true
    let currentSkill = skills[skillIndex]

    currentLength++
    setSkill(currentSkill.substring(0, currentLength))

    if (currentLength === currentSkill.length) {
      typing = false
      addTimeout(deleteSkill, 2000)
    } else {
      addTimeout(typeSkill, Math.random() * 150 + 15)
    }
  }

  const deleteSkill = () => {
    typing = true
    let currentSkill = skills[skillIndex]

    currentLength--
    setSkill(currentSkill.substring(0, currentLength))

    if (currentLength === 0) {
      typing = false
      if (skillIndex === skills.length - 1) {
        skillIndex = 0
      } else {
        skillIndex++
      }
      addTimeout(typeSkill, 50)
    } else {
      addTimeout(deleteSkill, (currentLength === currentSkill.length - 1) ? 300 : 20)
    }
  }

  useEffect(() => {
    addTimeout(typeSkill, 1000)
    const caretInterval = setInterval(() => setCaret((prev) => typing || !prev), 500)

    const fluid = async () => {
      const WebglFluid = (await import('webgl-fluid')).default
      WebglFluid(document.querySelector('canvas'), {
        BLOOM: false,
        SUNRAYS: false
      })
    }

    fluid()
    
    return () => {
      clearInterval(caretInterval)
      timeouts.forEach(t => clearTimeout(t))
    }
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
        <Image unoptimized src="./img/gladgladius-logo.png" width={475} height={220} alt="gladgladius" />
        <div className={styles.skills}>
          {skill}<i className={styles.caret} style={{visibility: caret ? 'visible' : 'hidden'}}>_</i>
        </div>
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
    <Section title="About">
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
        It was at that moment that I found my true passion - <strike>stealing code</strike> web development.
        I've been coding ever since!
      </p>
    </Section>
    <Container className={styles.comingSoon}>
      more coming soon™!
    </Container>
  </>
}
