import { Box } from '@chakra-ui/react'
import React from 'react'
import  bcd from './bg-curve-desktop.svg'

const Curve = () => {
  return (
  <Box
  mt={'50px'}
  alignSelf="center">
    <img width={'100%'} src={bcd} alt='bgcurvedesktop' />
  </Box>
  )
}

export default Curve