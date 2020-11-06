import Document, { Html, Head, Main, NextScript } from 'next/document'


import siteConfig from '../data/config.json'

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='pt-br' dir='ltr'>
        <Head>
          <meta name='application-name' content={siteConfig.APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={siteConfig.APP_NAME} />
          <meta name='description' content={siteConfig.APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content={siteConfig.THEME_COLOR} />

          {/* Icons */}
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='shortcut icon' href='/icons/android-chrome-192x192.png' />
          <link rel='manifest' href='/manifest.json' />

          {/* Stylesheet */}
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />


          <style>{
            `
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `
          }</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
      </Html>
    )
  }
}
