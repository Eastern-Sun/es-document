import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function EsDocumentApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tài liệu EasternSun</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default EsDocumentApp
