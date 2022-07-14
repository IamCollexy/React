import React from 'react'
import {Box, Heading, Flex, Text, Input} from '@chakra-ui/react'
import Btn from '../Btn'
const Subscribe = () => {
  return (
    <Flex 
    alignItems={'center'}
    justifyContent={'space-between'}
    pt={'60px'}
    px={'100px'}
    width='100%'
    bgColor='#575989'>
    <Box
    mt={'30'}
    width={'50%'}
    color='white'
    marginBottom={"100px"}>
<Heading 
mb='30'>
    Get early access today
</Heading>
<Text>
    It only takes a minute to sign up and our free starter tier is <br/>
    extremely generous. If you have any questions, our support team<br/>
    would be happy to help you.
</Text>
    </Box>
    <Box
    width={'50%'}
    mt={'-15'}
    mb={'10'}
    >
        <Input placeholder="email@example.com" bgColor={'white'} width='80%' ml={'15%'} mb='50px'/>
        <Btn  
        width={'200px'}
       height={'40px'}
      Text={'Get Started for free'}
      onClick={() =>{
        alert("Hey What's Good?");
      }}
      paddingLeft={'30px'}
      borderRadius={'5px'}
         >
        {Text}

        </Btn>
          </Box>
    </Flex>
  )
}

export default Subscribe