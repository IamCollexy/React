import React from 'react'
import { Button } from '@chakra-ui/react'
const Buttons = ({width, height, borderRadius, Text, onClick, }) => {
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
         marginLeft={4}
        marginBottom={1}
        borderRadius={borderRadius}
         >
        {Text}
        </Button>
        
  );
};
export default Buttons