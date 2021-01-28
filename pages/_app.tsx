import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
