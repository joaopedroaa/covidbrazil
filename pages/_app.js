import '../styles/globals.css'

import Head from 'next/head'



function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, height=device-height, shrink-to-fit=no, viewport-fit=cover' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
