import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography, FormControl,Select,MenuItem,FormHelperText } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import axios from 'axios';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [part,setpart] = useState('All')
  const handleChange = (event) => {
    setBodyPart(event.target.value);
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'x-rapidapi-key': 'b074a0976bmsh21ef395bb1cb7eap15db1fjsn25e330bd3352',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setBodyParts(['all', ...response.data]);
      } catch (error) {
        console.error('Error fetching body parts:', error);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
        params: {
          limit: '10',
          offset: '0'
        },
        headers: {
          'x-rapidapi-key': 'b074a0976bmsh21ef395bb1cb7eap15db1fjsn25e330bd3352',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };      
      try {
        const response = await axios.request(options);
        const exercisesData = response.data
        const searchedExercises = exercisesData.filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        console.error('Error searching exercises:', error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="0px" justifyContent="center" p="0px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '100px', xs: '30px' } }} mb="49px" mt="20px" textAlign="center" color="#FFF">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Stack direction='column'>
      <Box position="relative" mb="0px" mt='10px'>
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1000px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '10px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{ bgcolor: '#0000ff', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box 
  sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    p: '20px' 
  }}
>
  <Stack 
    direction='row' 
    sx={{ 
      position: 'relative', 
      width: '70%', 
      p: '20px', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Typography 
      sx={{ 
        color: '#ffffff', 
        mt: 0, 
        mr: 2, 
        fontSize: '15px' ,
        fontFamily:'poppins'
      }} 
      fontWeight={300}
    >
      Filter:
    </Typography>
    <FormControl 
      variant="standard" 
      sx={{ 
        minWidth: 100, 
        mt:0.5,
        '& .MuiSelect-icon': {
          color: 'white',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'white',
        },
      }}
    >
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={bodyPart}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{
          color: 'white', 
          fontFamily:'poppins'
        }}
      >
        {
          bodyParts.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))
        }
      </Select>
      <FormHelperText></FormHelperText>
    </FormControl>
  </Stack>
</Box>

      </Stack>
    </Stack>
  );
};

export default SearchExercises;
