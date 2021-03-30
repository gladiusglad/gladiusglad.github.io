import React, { useState, useEffect } from 'react'

import styles from './style.module.scss'

export default function Skills({skills, ...props}: {skills: string[]} & React.HTMLAttributes<HTMLDivElement>) {
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

    return () => {
      clearInterval(caretInterval)
      timeouts.forEach(t => clearTimeout(t))
    }
  }, [])

  return (
    <div className={styles.skills} {...props}>
      {skill}<i className={styles.caret} style={{visibility: caret ? 'visible' : 'hidden'}}>_</i>
    </div>
  )
}