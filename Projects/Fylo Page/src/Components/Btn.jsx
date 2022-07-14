import React from 'react'
import { Button } from '@chakra-ui/react'
const Btn = ({width, height,  Text, onClick, borderRadius}) => {
  return (
 
        <Button 
         w={width}
         h={height}
         onClick={onClick}
         bgColor={'blue'}
         color={'white'}
         _hover={{
          backgroundColor: '#2D60EC',
         }}
         marginLeft={'87px'}
        borderRadius={borderRadius}
        marginTop={'-50px'}
         >
        {Text}
        </Button>
        
  );
};

export default Btn