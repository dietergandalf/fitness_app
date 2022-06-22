import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
      <Typography 
        onClick={() => scrollPrev()} 
        
      >
      <img 
        src={LeftArrowIcon} 
        alt="right-arrow" 
      />
      </Typography>
  );
};

export default LeftArrow;