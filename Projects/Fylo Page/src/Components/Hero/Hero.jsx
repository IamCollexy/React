import { Box, Flex, Heading, Text, Input, Image} from '@chakra-ui/react'
import React from 'react'
import illustration from './illustration-1.svg'
import Buttons from './Buttons'
const Hero1 = () => {
  return (
   <Flex
   alignItems={'center'}
   justifyContent={'space-between'}
   mt={'50px'}
   px={'100px'}
   width={'100%'}
   mb={'155px'}>
    <Box
    paddingLeft={'0px'}
    marginLeft={'0px'}
    mt={'20px'}
    width={'50%'}
    height={'auto'}
    >
  
<Heading 
width={'100%'}>
  All your files in one secure<br />location, accessible anywhere.
</Heading>

<Text
mt={'30px'}>
  Fylo stores your most important files in a secure location. Access<br/>
  them wherever you need, share and collaborate with friends, family, <br/>
  and co-workers.
</Text>
<Box 
>
<Input placeholder ='Enter your email....' size={'md'} mt={"30px"} w={'auto'} mb='0' />
<Buttons
       width={'200px'}
       height={'40px'}
      Text={'Get Started'}
      onClick={() =>{
        alert("Hey What's Good?");
      }}
      paddingLeft={'30px'}
       />
</Box>
</Box>
<Box
width={'50%'}
>
<Image width={'100%'} src={illustration} alt="illustration-1" m={'auto'} />
</Box>
   </Flex>
  )
}

export default Hero1