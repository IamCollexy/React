import React from 'react'
import {Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
import './productive.css'
import icon from './icon-arrow.svg'
// import {FaQuoteLeft} from 'react-icons/fa'
import avt from './avatar-testimonial.jpg'
import illustration from './illustration-2.svg'
const Productive = () => {
  return (
    <Flex
    alignItems={'center'}
    justifyContent={'space-between'}
    mt={'0px'}
    px={'100px'}
    width={'100%'}

    bgColor={'#f8f8fe'}
    pb='100'>
    <Box 
    width={'50%'}>
<Heading
mt={'10'}
mb={'10'}> 
    Stay productive, wherever you are 
</Heading>
<Text
mb={15}
fontSize={'16px'}>
    Never let Location be an Issue when accessing your files. Fylo has you <br/>
    covered for all of your storage needs.
    <br/> 
    <br/> 
    Securely share files and folders with friends, family and colleagues for <br/>
    live collaboration. No email attachment required!
</Text>
<section>
<a style={{marginRight: "8", fontSize:"16px"}}
 href="#">
<u>See how Fylo works</u>
</a>
<Image src={icon} alt="Fav" ml={1} width={'20px'} height={'4'} mt={'6px'}/>
</section>

<Box
bgColor={'white'}
width="55%"
padding={5}
mt={10}
pl={10}>
{/* <FaQuoteLeft/> */}
<Text
mt={5}
fontSize="13px">
    Fylo has improved our team productivity by<br/>
    an order of magnitude. Since making the <br/>
    switch our team has become a well-oiled <br/>
    collaboration machine.  
</Text>
<Flex>
<Box
boxSize='40px'
>
<Image src={avt} 
alt="Avtr" 
boxSize='40px' 
height='40px' 
width='40px' 
mt='5' 
borderRadius='100px'/>
</Box>
<Box 
mt={6}
fontSize='10px'
ml={2} >
   <Text
   fontWeight='bold'>
        Kyle Burton
        </Text>
    <Text
    fontSize={'10'}>
        Founder & CEO, Huddle
    </Text>
</Box>
    </Flex>
</Box>
    </Box> 
   <Box
   width={'50%'}
   pl={'50px'}
   >
    <Image  src={illustration} alt='illustration' width='100%'  />
   </Box>
    </Flex>
    
    
  )
}

export default Productive