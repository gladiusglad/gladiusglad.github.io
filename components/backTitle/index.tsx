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

export default function BackTitle({title, style, className, right, startLength = 2, endRepeat = 5, noAnim}: BackTitleProps) {
  const backTitle = title.toLowerCase().replace(/\s/g, ''),
    backTitleStart = right ?
      backTitle.substring(0, startLength) :
      backTitle.substring(backTitle.length - startLength),
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
