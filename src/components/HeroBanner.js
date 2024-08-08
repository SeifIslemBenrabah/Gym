import React from 'react'
import {Box , Button , Stack, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg:'212px' , xs:'70px'},
      ml: {sm:'50px'}, pt: '20px', pr: '20px', p:'20px'
      }} position="relative" >
      <Typography color="#0000ff" fontSize="80px" fontWeight="600">
        Gym Club
      </Typography>
      <Typography color="#ffffff" fontSize="40px" fontWeight="700" sx={{ lg:'44px' , xs:'40px'}}>
      Train Hard, Stay Strong
      </Typography>
      <Typography color="#ffffff" fontSize="22px" lineHeight="35px" mb={1}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" href='#exercises'>Explore Exercises</Button>
        <img src={HeroBannerImage}  alt="banner" className="hero-banner-img" style={{ width: 'auto', height: '220%' }} />
    </Box>
  )
}

export default HeroBanner
