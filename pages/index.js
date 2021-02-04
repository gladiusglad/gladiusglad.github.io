import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const skills = [
  'react',
  'javascript',
  'typescript',
  'HTML',
  'CSS/SCSS/Sass',
  'responsive design',
  'mongoDB',
  'mySQL',
  'node',
  'express',
  'webpack',
  'next.js',
  'java',
  'C#',
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
      <title>gld on FrozenDev</title>
      <meta name="description" content="gld's user page" />
      <meta property="og:title" content="gld on FrozenDev" />
      <meta property="og:description" content="gld's user page" />
      <meta name="twitter:title" content="gld on FrozenDev" />
    </Head>
    <div className="wrapper jumbotron">
      <canvas width={0} height={0} />
      <div className="container">
        <h1 style={{fontWeight: 300}}>hello! i'm</h1>
        <Image unoptimized src="./img/gladgladius-logo.png" width={475} height={220} alt="gladgladius" />
        <div className="skills">
          {skill}<i className="caret" style={{visibility: caret ? 'visible' : 'hidden'}}>_</i>
        </div>
        <div style={{marginTop: '3rem', padding: '3rem', textAlign: 'center'}}>
          <div>
            <a title="gladiusglad" className="contact" href="https://github.com/gladiusglad" target="__blank">
              <svg role="img" height={40} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a title="glad#2095" className="contact" href="https://discord.com/users/443441102805270528" target="__blank">
              <svg role="img" height={40} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"/></svg>
            </a>
          </div>
          <div style={{marginTop: 5}}>
            <a className="contact muted" href="mailto:defoverthought@gmail.com">defoverthought@gmail.com</a>
          </div>
          <div className="muted">more coming soon!</div>
        </div>
      </div>
    </div>
  </>
}
