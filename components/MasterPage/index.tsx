import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import AppFooter from '../AppFooter'

const MasterPage: React.FC = () => {
  return (
    <Html lang="pt-br">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      <Head />
      <title>Quiz</title>
      <body>
        {/* Make Color mode to persists when you refresh the page. */}
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
      <AppFooter />
    </Html>
  )
}

export default MasterPage
