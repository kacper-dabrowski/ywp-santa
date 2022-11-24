import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' style={{width:'100vw'}}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}