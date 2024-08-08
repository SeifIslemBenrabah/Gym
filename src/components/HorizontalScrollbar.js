
import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Stack, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box 
  sx={{ 
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    gap:{lg:'60px',xs:'0px'} , 
    padding: '20px' 
  }}
>
  {data.map((item) => (
    <Box
      key={item.id || item}
      sx={{ 
        margin: '20px', 
        flex: '1 0 21%', // Adjust the flex-basis as needed
        maxWidth: '300px'  // Ensure the items don't get too large
      }}
      title={item.id || item}
    >
      {bodyParts 
        ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> 
        : <ExerciseCard exercise={item} /> 
      }
    </Box>
  ))}
</Box>

  
  
);

export default HorizontalScrollbar;
