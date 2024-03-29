import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../assets/icons/right-arrow.png';

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
      <Typography 
        onClick={() => scrollNext()} 
        
      >
        <img 
          src={RightArrowIcon} 
          alt="right-arrow" 
        />
      </Typography>
  );
};

export default RightArrow;