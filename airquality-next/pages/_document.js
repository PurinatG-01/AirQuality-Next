import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
      <Head>
        <title>MUICT Senior 2020 : Air Quality </title>∏
        <link rel="shortcut icon" href="/static/muict_logo.ico" />
      </Head>
        <body style={{margin:0,}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument