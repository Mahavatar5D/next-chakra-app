import React from 'react'
import { Heading, Link } from '@chakra-ui/react'

const Index: React.FC = () => {
  return (
    <Heading as="h1" size="2xl" mb="2">
        Hello <Link color="teal.500" href="https://nextjs.org">Next js.</Link>
    </Heading>
  )
}

export default Index
