import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em'
})

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const overrides = {
  breakpoints,
  config
}

const theme = extendTheme(overrides)
export default theme
