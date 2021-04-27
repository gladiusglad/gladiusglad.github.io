import Image from 'next/image'

import styles from './style.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.navLogo}>
        <Image unoptimized src="/img/navbar-logo.png" layout="intrinsic" width={72} height={72} alt="menu" />
      </a>
    </nav>
  )
}