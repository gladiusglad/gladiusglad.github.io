import React from 'react'
import Fade from '../fade'
import { keyframes } from "@emotion/react"

import c from '../../lib/className'

import styles from './style.module.scss'

interface BackTitleProps {
  title: string,
  style?: React.CSSProperties,
  className?: string,
  right?: boolean,
  startLength?: number,
  endRepeat?: number,
  noAnim?: boolean
}

const stringInLength = (str: string, length: number, reverse?: boolean) => {
  if (length === str.length) {
    return str
  } else if (length < str.length) {
    if (reverse) {
      return str.substring(str.length - length)
    } else {
      return str.substring(0, length)
    }
  } else {
    const repeat = str.repeat(~~(length / str.length)),
      remainder = length % str.length

    if (reverse) {
      return str.substring(str.length - remainder) + repeat
    } else {
      return repeat + str.substring(0, remainder)
    }
  }
}

export default function BackTitle({title, style, className, right, startLength = 2, endRepeat = 5, noAnim}: BackTitleProps) {
  const backTitle = title.toLowerCase().replace(/\s/g, ''),
    backTitleStart = stringInLength(backTitle, startLength, !right),
    backTitleEnd = backTitle.repeat(endRepeat),
    backTitleKeyframes = keyframes`
      from {
        transform: translate3d(${right ? '' : '-'}${7.5 * title.length + 62.5}em, 0, 0);
        letter-spacing: 5em;
      }
      to {
        transform: translate3d(0, 0, 0);
        letter-spacing: normal;
      }
    `

  const h1 = (
    <h1 className={c(styles.backTitle, [right, styles.right], className)} style={style}>
      {right ? backTitleEnd : backTitleStart}
      <span className={styles.bold}>{backTitle}</span>
      {right ? backTitleStart : backTitleEnd}
    </h1>
  )

  return <>
    {noAnim ? h1 :
      <Fade keyframes={backTitleKeyframes} className={styles.backTitleFade} duration={2000} >
        {h1}
      </Fade>
    }
  </>
}
