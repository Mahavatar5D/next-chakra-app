import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { ThemeProvider as EmotionProvider } from '@emotion/react'

import theme from '../shared/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider value='dark' options={theme.config} />
      <EmotionProvider theme={theme}>
        <Component {...pageProps} />
      </EmotionProvider>
    </ChakraProvider>
  )
}

export default App
