import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Armwrestling-logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="300px" height="200px" />
        <Typography variant="h5" pb="40px">
          Made with 
          <span role="img" aria-label="heart">
            ❤️
          </span> 
          by Malte
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer