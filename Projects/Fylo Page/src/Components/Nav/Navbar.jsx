import React from 'react'
import {Flex, Heading, Link as ChakraLink, HStack} from '@chakra-ui/react';
import logo from './logo.svg'
const Navbar = () => {
  return (
    <Flex 
    alignItems={'center'}
     justifyContent={'space-between'}
     mt={'10px'}
     minHeight={'80px'}
     py={'15px'}
     px={'100px'}
    //  position={'fixed'}
     width={'100%'}
    //  zIndex={'10000'}
     > 
     <Heading 
     ml={"100px"}>
<img src={logo} alt="logo" />
   </Heading>
   <HStack
 w={'20%'}

 justify={'space-between'}
 align={'center'}
 px={'30px'}
 >
 <ChakraLink textDecoration={'underline'} 
 _hover={{
textDecoration: 'overline',
}} 
_active={{
  transform: 'scale(.9)'
}}
href="#">
 Features
</ChakraLink>
<ChakraLink textDecoration={'underline'} 
 _hover={{
textDecoration: 'Overline',
}} 
_active={{
  transform: 'scale(.9)'
}}
href="#">
  Team
</ChakraLink>
<ChakraLink textDecoration={'underline'} 
 _hover={{
textDecoration: 'Overline',
}} 
_active={{
  transform: 'scale(.9)'
}}
href="#">
 Sign In
</ChakraLink>
</HStack>
</Flex>
  )
}
  


export default Navbar