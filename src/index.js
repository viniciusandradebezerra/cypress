import React from 'react'
import * as ReactDOM from 'react-dom/client'
import HookForm from './HookForm'
import { ChakraProvider, Box, Container } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Container>
          <HookForm />
        </Container>
      </Box>
    </ChakraProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(<App />)