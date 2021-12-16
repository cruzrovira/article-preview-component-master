import {
  Flex,
  Image,
  VStack,
  Text,
  Avatar,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react"

import drawers from "./sources/images/drawers.jpg"
import share from "./sources/images/icon-share.svg"
import avatar from "./sources/images/avatar-michelle.jpg"
import facebok from "./sources/images/icon-facebook.svg"
import twitter from "./sources/images/icon-twitter.svg"
import pinterest from "./sources/images/icon-pinterest.svg"

function App() {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      justifyContent="center"
      alignItems="flex-start"
      py={8}
    >
      <Flex
        w={{ base: "375px", lg: "650px" }}
        h={{ base: "auto", lg: "200px" }}
        maxW="650px"
        boxShadow="md"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Image src={drawers} />
        <VStack bg="white" p={4}>
          <Text fontWeight="700" lineHeight="2">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </Text>
          <Text fontWeight="500">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </Text>
          <Flex
            justifyContent="space-between"
            w="100%"
            h="50px"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Avatar src={avatar} alt="Michelle" h="100%" />
              <Box spacing={0} pl="10px">
                <Text fontWeight="700">Michelle Appleton</Text>
                <Text fontWeight="500">28 Jun 2020</Text>
              </Box>
            </Flex>
            <Popover v>
              <PopoverTrigger>
                <Flex
                  visibility={{ base: "hidden", md: "visible" }}
                  w="32px"
                  h="32px"
                  bg="gray.100"
                  justifyContent="center"
                  align="center"
                  rounded="full"
                  cursor="pointer"
                >
                  <Image src={share} alt="share" h="20px" w="20px" />
                </Flex>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="white">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody>
                  <Flex gap={4} p={2}>
                    <Text fontWeight="700">Share</Text>
                    <Image src={facebok} alt="facebook" h="20px" w="20px" />
                    <Image src={twitter} alt="twitter" h="20px" w="20px" />
                    <Image src={pinterest} alt="pinterest" h="20px" w="20px" />
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </VStack>
        <Flex
          p={4}
          bg="gray.700"
          color="white"
          d={{ base: "flex", md: "none" }}
          w="100%"
          borderBottomRadius={8}
          justifyContent="space-between"
        >
          <Flex gap={4}>
            <Text fontWeight="700">Share</Text>
            <Image src={facebok} alt="facebook" h="20px" w="20px" />
            <Image src={twitter} alt="twitter" h="20px" w="20px" />
            <Image src={pinterest} alt="pinterest" h="20px" w="20px" />
          </Flex>
          <Flex
            w="20px"
            h="20px"
            bg="gray.100"
            justifyContent="center"
            align="center"
            rounded="full"
            cursor="pointer"
          >
            <Image src={share} alt="share" h="16px" w="16px" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
