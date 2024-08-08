import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png' 
const NavBar = () => {
  return (
    <Stack
  direction="row"
  sx={{ 
    gap: { sm: '70px', xs: '40px' },
    justifyContent: 'none',
    bgcolor: '#000033',
    px: '20px'
  }}
>
  <Link sx={{ 
    display: 'flex', 
    alignItems: 'center', // Ensure alignment of child items
    mt: { sm: '0px', xs: '0px' }, // Apply margin-top here
    textDecoration: 'none'
  }}>
    <img 
      src={Logo} 
      alt="logo" 
      style={{ width: '40px', height: '40px', margin: '5px 20px' }} 
    />
  </Link>
  <Stack
    direction="row"
    gap="30px"
    fontSize="24px"
    alignItems="flex-end"
    fontFamily='poppins'
  >
    <Link 
      to="/" 
      style={{ textDecoration: 'none', color: "#ffffff", borderBottom: '3px solid #ffffff' }}
    >
      Home
    </Link>
    <a 
      href='#exercises' 
      style={{ textDecoration: 'none', color: "#ffffff" }}
    >
      Exercises
    </a>
  </Stack>
</Stack>

  )
}

export default NavBar
