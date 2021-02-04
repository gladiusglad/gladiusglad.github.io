import Head from 'next/head'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://frozendev.tk/" />
      <meta property="og:site_name" content="FrozenDev" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content="frozendev.tk" />
      <meta name="theme-color" content="#4de0af" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
