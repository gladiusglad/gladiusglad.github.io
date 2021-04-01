import Head from 'next/head'

import '../styles/global.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gladiusglad.github.io/" />
      <meta property="og:site_name" content="gladgladius" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content="gladiusglad.github.io" />
      <meta name="theme-color" content="#2eb185" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
