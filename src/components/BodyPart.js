import React from 'react';
import { Stack, Typography } from '@mui/material';

import * as icons from '../assets/icons';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const Icon = icons[`${item}`] || item === "lower arms" && icons.lower_arms || item === "upper arms" && icons.upper_arms || item === "lower legs" && icons.lower_legs || item === "upper legs" && icons.upper_legs;
    
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            
            sx={{
                borderTop: bodyPart === item ? '4px solid #FF2625' : '',
                backgroundColor:'#FFF',
                borderBottomLeftRadius:'20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px',
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
            }}
        >
            <img src={Icon} alt="dumbbell" style={{ width:'80px', height: '80px'}} />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
        </Stack>
    )
}

export default BodyPart