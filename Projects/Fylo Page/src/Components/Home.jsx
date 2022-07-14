import React from 'react'
import {Box} from '@chakra-ui/react';
import Hero from './Hero/Hero';
import Curve from './Curve/Curve';
import Productive from './Productive/Productive';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <Box
    px={'100px'}
    width={'100%'}>
<Hero/>
<Curve/>
<Productive/>
<Subscribe/>
<Footer/>
</Box>
  )
}

export default Home