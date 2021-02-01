import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const overrides = {
  config
}

const theme = extendTheme(overrides)
export default theme
