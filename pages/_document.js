import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body style={{
                margin:" 1px"
            }}>
            <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
