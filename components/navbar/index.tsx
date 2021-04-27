import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.scss'

export default function Navbar() {
  return (
    <Link href="/">
      <a className={styles.navLogo}>
        <Image unoptimized src="/img/navbar-logo.png" layout="intrinsic" width={72} height={72} alt="menu" />
      </a>
    </Link>
  )
}