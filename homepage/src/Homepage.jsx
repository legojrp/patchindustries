import React from "react";
import { VStack, Heading, Link, Button, Text, Flex, Spacer } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGamepad, FaBook, FaClock } from 'react-icons/fa';
import { extendTheme } from '@chakra-ui/react';

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

const Homepage = () => {
    return (
        <>
        <VStack spacing={8}>
              <Heading as="h1" size="2xl" textAlign="center" mt={10}>
                Patch Industries
              </Heading>
              <Text fontSize="xl" textAlign="center">
                Learning, Building, and Deploying
              </Text>

              {/* Links Section */}
              <VStack spacing={6} width="full">

                <Flex width="full" maxW="md" alignItems="center">
                  <Button
                    as={Link}
                    href="https://github.com/"
                    colorScheme="gray"
                    leftIcon={<FaGithub />}
                    isExternal
                    width="full"
                  >
                    GitHub
                  </Button>
                </Flex>

                <Flex width="full" maxW="md" alignItems="center">
                  <Button
                    as={Link}
                    href="https://hseschedule.app/"
                    colorScheme="red"
                    leftIcon={<FaClock />}
                    isExternal
                    width="full"
                  >
                    HSE Schedule
                  </Button>
                </Flex>

                <Flex width="full" maxW="md" alignItems="center">
                  <Button
                    as={Link}
                    href="https://ldsdocs.patchindustries.com"
                    colorScheme="purple"
                    leftIcon={<FaBook />}
                    isExternal
                    width="full"
                  >
                    LDS Docs Searcher
                  </Button>
                </Flex>

                <Flex width="full" maxW="md" alignItems="center">
                  <Button
                    as={Link}
                    href="https://linkedin.com/"
                    colorScheme="blue"
                    leftIcon={<FaLinkedin />}
                    isExternal
                    width="full"
                  >
                    LinkedIn
                  </Button>
                </Flex>

                <Flex width="full" maxW="md" alignItems="center">
                  <Button
                    as={Link}
                    href="https://patchindustries.com/turtle"
                    colorScheme="teal"
                    leftIcon={<FaGamepad />}
                    isExternal
                    width="full"
                  >
                    Turtle Game
                  </Button>
                </Flex>
              </VStack>

              <Spacer />
              <Text textAlign="center" fontSize="sm" mt={10}>
                © {new Date().getFullYear()} Patch Industries. All rights reserved.
              </Text>
            </VStack>
        </>
    )
}

export default Homepage