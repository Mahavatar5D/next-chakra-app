import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import AppFooter from '../AppFooter'

const MasterPage: React.FC = () => {
  return (
    <Html lang="pt-br">
      <Head />
      <title>Quiz</title>
      <body>
        <Main />
        <NextScript />
      </body>
      <AppFooter />
    </Html>
  )
}

export default MasterPage
