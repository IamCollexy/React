import { Box, Flex, Image, VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import logo from './logo.svg';
import iconPhone from './icon-phone.svg';
import iconEmail from './icon-email.svg';
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <Box
    px={'100px'}
    width={"100%"}
    bgColor='#07043B'
    pt={'100px'}
    >
<Image mb={"30px"} src={logo} alt="logo" />
<Flex
justify={'space-between'}
width="90%">
  <VStack>
 
      <Flex
      justifyContent={'space-between'}
      mb={'10px'}>
        <Image src={iconPhone} alt="phone" mr={'30px'} />
        <Text color="white">
        Phone: +1-543-123-4567
      </Text>
      </Flex>

      <Flex
      width="100%">
     
        <Image src={iconEmail} alt="email" mr={'25px'} />
        <Text color="white">
          example@Fylo.com
        </Text>
      </Flex>
  </VStack>
  <VStack>
   <Text color="white"
   >
    About Us 
    </Text>
   <Text color="white"
   >
    Jobs 
    </Text>
   <Text color="white"
   >
   Press
    </Text>
   <Text color="white">
    Blog
    </Text>
  </VStack>
  <VStack>
<Text color="white">
Contact Us
</Text>
<Text color="white">
Terms
</Text>
<Text color="white">
Privacy
</Text>
  </VStack>
  <Box>
  <HStack gap={2}>
<FaFacebook color='white' />
<FaTwitter color='white'/>
<FaInstagram color='white'/>
 </HStack>
 </Box>
</Flex>
</Box>

  )
}

export default Footer