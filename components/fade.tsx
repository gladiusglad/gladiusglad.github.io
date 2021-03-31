import React, { ReactNode } from "react"
import { keyframes } from "@emotion/react"
import Reveal from "react-awesome-reveal"
import { RevealProps } from "react-awesome-reveal/dist/Reveal"

const fadeInRightLight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export default function Fade({keyframes = fadeInRightLight, duration = 500, ...props}: React.PropsWithChildren<RevealProps>) {
  return (
    <Reveal keyframes={keyframes} duration={duration} triggerOnce cascade {...props} />
  )
}