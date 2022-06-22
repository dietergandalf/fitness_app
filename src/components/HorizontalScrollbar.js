import React from 'react';
import { Box } from '@mui/material';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

//import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import RightArrow from '../utils/RightArrow';
import LeftArrow from '../utils/LeftArrow';




const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    {isBodyParts ? 
                      <BodyPart 
                        item={item} 
                        bodyPart={bodyPart} 
                        setBodyPart={setBodyPart} 
                      /> : 
                      <ExerciseCard 
                        exercise={item} 
                      />}
                </Box>
                )
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar