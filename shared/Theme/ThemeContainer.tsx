import React, { ReactNode } from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { ThemeProvider as EmotionProvider } from '@emotion/react'

import theme from '../theme'

type ThemeContainerProps = {
  children: ReactNode
}

const ThemeContainer: React.FC = ({ children }: ThemeContainerProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider options={theme.config} />
      <EmotionProvider theme={theme}>
        {children}
      </EmotionProvider>
    </ChakraProvider>
  )
}

export default ThemeContainer
