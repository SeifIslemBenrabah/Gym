import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import axios from 'axios';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        let url = 'https://exercisedb.p.rapidapi.com/exercises';
        if (bodyPart !== 'all') {
          url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
        }
        
        const options = {
          method: 'GET',
          url: url,
          params: {
            limit: '10',
            offset: '0'
          },
          headers: {
            'x-rapidapi-key': 'b074a0976bmsh21ef395bb1cb7eap15db1fjsn25e330bd3352',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        setExercises(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '10px' } }}>
      <Typography variant="h4" fontWeight="bold" color="#fff" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
       Exercises
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '70px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
  {exercises.length > 9 && (
    <Pagination
      color="standard"
      shape="rounded"
      defaultPage={1}
      count={Math.ceil(exercises.length / exercisesPerPage)}
      page={currentPage}
      onChange={paginate}
      size="large"
      sx={{
        '& .MuiPaginationItem-root': {
          color: 'white', // Text color of the pagination items
        },
        '& .MuiPaginationItem-page.Mui-selected': {
          backgroundColor: 'white', // Background color of the selected page
          color: '#000', // Text color of the selected page
        },
        '& .MuiPaginationItem-ellipsis': {
          color: 'white', // Text color of the ellipsis
        },
        '& .MuiPaginationItem-previousNext': {
          color: 'white', // Text color of the previous/next buttons
        },
        '& .MuiPaginationItem-previousNext.Mui-disabled': {
          color: 'grey', // Text color of the disabled previous/next buttons
        }
      }}
    />
  )}
</Stack>
    </Box>
  );
};

export default Exercises;
