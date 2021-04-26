import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Section from '../components/section'
import Container from '../components/container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import Skills from '../components/skills'
import Project from '../components/project'

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
  const dev = process.env.NODE_ENV === 'development'

  if (!dev) {
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
  }

  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
    </Head>
    <div className={styles.jumbotron}>
      {!dev && <canvas width={0} height={0} className={styles.canvas} />}
      <Container className={styles.container}>
        <div className={styles.hello}>hello! i'm</div>
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
    <Section title="blog">
      <p><Link href="/blog/test">Test</Link></p>
    </Section>
    <Section title="projects" containerWidth="100%" black noContent>
      <Project
        title="calcula"
        desc="Mathematical expression parsers and calculators, currently available in .NET Console and WPF"
        link="https://github.com/gladiusglad/calcula-core"
        img="/img/calcula-logo.png"
        background="#085f75"
        backTitle="#0e9c78"/>
      <Project
        title="avallion"
        desc="A Minecraft Survival server focused on community"
        link="https://avallion.net"
        img="/img/avallion-logo.png"
        background="#14424E"
        backTitle="#a19f13"
        right/>
      <Project
        title="gladiusglad"
        desc="My lovely little website"
        link="https://gladiusglad.github.io"
        img="/img/gladgladius-logo-small-display.png"
        backTitle="#127856"/>
    </Section>
    <Section title="about">
      <p>
        Hello! I'm GladGladius. I'm a new developer currently dabbling in React, Next.js, and more.
        Although still a <em>couple</em> years away from a computer science degree, I'm pursuing <i>web development</i> - mostly front-end.
      </p>
      <p>
        I'm proficient in React, <a href="https://nextjs.org/">Next.js</a>, and TypeScript.
        I'm also experienced in MySQL, MongoDB, Java, and C#. Besides coding, I can do some graphic design and video editing too.
      </p>
    </Section>
    <Container className={styles.comingSoon}>
      more coming soon™!
    </Container>
  </>
}
