import React from 'react'
import Footer from '../components/footer'
import Head from 'next/head'

import '../styles/global.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import useSystemTheme from 'react-use-system-theme'

function MyApp({ Component, pageProps }) {
  const theme = useSystemTheme()
  const faviconSuffix = theme ? `-${theme}` : ''

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gladiusglad.github.io/" />
      <meta property="og:image" content="https://gladiusglad.github.io/img/gladgladius-banner.jpg" />
      <meta property="og:site_name" content="gladgladius" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content="gladiusglad.github.io" />
      <meta name="twitter:image" content="https://gladiusglad.github.io/img/gladgladius-banner.jpg" />
      <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/icon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="96x96" href={`/icon/favicon${faviconSuffix}-96x96.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/icon/favicon${faviconSuffix}-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/icon/favicon${faviconSuffix}-16x16.png`} />
      <link rel="shortcut icon" type="image/x-icon" href={`/favicon${faviconSuffix}.ico`} />
      <meta name="msapplication-TileColor" content="#2eb185" />
      <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#2eb185" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
