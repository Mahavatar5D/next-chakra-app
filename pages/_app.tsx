import React from 'react'
import type { AppProps } from 'next/app'

import ThemeContainer from '../shared/Theme/ThemeContainer'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default App
