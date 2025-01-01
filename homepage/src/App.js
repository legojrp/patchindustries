// Import necessary modules from React and Chakra UI
import React, { useState } from 'react';
import { ChakraProvider, Box, Button, SlideFade } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Homepage from './Homepage';
import About from './About';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-r, purple.800, blue.400)',
        color: 'white',
      },
    },
  },
});

function App() {
  const [screen, setScreen] = useState('home');

  return (
    <ChakraProvider theme={theme}>
      <Box as="header" p={4}>
        <Box bgColor="blackAlpha.100" display="flex" justifyContent="center" alignItems="center" maxW="sm" mx="auto" borderRadius="40px">    
          <Button m={4} onClick={() => setScreen('home')} colorScheme="purple" variant={screen === 'home' ? 'solid' : 'unstyled'}>
            Home
          </Button>
          <Button m={4} onClick={() => setScreen('about')} colorScheme="blue" variant={screen === 'about' ? 'solid' : 'unstyled'}>
            About Me
          </Button>
        </Box>
      </Box>

      <Box minHeight="100vh" p={5} overflow="hidden">
        <SlideFade in={screen === 'home'} offsetX="-100%">
          {screen === 'home' && (
            <Homepage />
          )}
        </SlideFade>

        <SlideFade in={screen === 'about'} offsetX="100%">
          {screen === 'about' && (
           <About />  
          )}
        </SlideFade>
      </Box>
    </ChakraProvider>
  );
}

export default App;
