import React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Link,
  Button,
  Text,
  Flex,
  Image,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import avatar from './avatar.png';

import { FaGithub, FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, purple.800, blue.400)",
        color: "white",
      },
    },
  },
});

const About = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        align="center"
        justify="top"
        p={2}
        minH="100vh"
        width="100%"
      >
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="space-around"
          w="100%"
          maxW="1000px"
          p={6}
          borderRadius="lg"
        >
          {/* Left Section */}
          <Box flex="1" textAlign="left">
            <VStack align="flex-end" spacing={4}>
              <Heading as="h2" size="lg" textAlign="right" color="whiteAlpha.800">
                <Text color="whiteAlpha.800" >
                Hi, my name is
                </Text>
              </Heading>
              <Heading as="h1" size="2xl" textAlign="right" color="whiteAlpha.800">
                <Text
                  sx={{
                      background: "linear-gradient(90deg,rgb(166, 166, 249), #ffffff)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                >
                 <u>John Patch</u>
                </Text>
              </Heading>
              <Text fontSize="lg" color="whiteAlpha" textAlign="right">
                Computer, Space, and Aviation Enthusiast
              </Text>
                <Spacer m="4"/>
              <Text fontSize="md" color="whiteAlpha">
                With five years of programming experience, I've worked on extensive codebases and contributed to developing a suite of applications for my high school. Currently, I am expanding my skills in web development, working with Machine Learning, and building projects with AI models, such as Gemini AQA. 
              </Text>
            </VStack>
          </Box>

          {/* Right Section */}
          <Box flex="1" textAlign="right">
            <VStack spacing={4}>
              <Image
                boxSize="300px"
                borderRadius="full"
                alt="John Patch"
                src={avatar}
              />
              <HStack spacing={4}>
                <Button
                  as={Link}
                  href="https://github.com/legojrp"
                  target="_blank"
                  colorScheme="blackAlpha"
                  variant="solid"
                >
                  <FaGithub />
                </Button>
                <Button
                  as={Link}
                  href="https://www.linkedin.com/in/john-patch-70443032a"
                  target="_blank"
                  colorScheme="blue"
                  variant="solid"
                >
                  <FaLinkedin />
                </Button>
                <Button
                  as={Link}
                  href="mailto:johnrenfordpatch@gmail.com"
                  target="_blank"
                  colorScheme="teal"
                  variant="solid"
                >
                  <FaEnvelopeOpen />
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Flex>

        {/* Additional Info Section */}

      </Flex>
    </ChakraProvider>
  );
};

export default About;
