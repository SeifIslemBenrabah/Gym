import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="30px" sx={{ flexDirection: { lg: 'row' }, p: '100px', alignItems: 'center', width: '100%' ,bgcolor:'#000033'}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image"  />
      <Stack sx={{ gap: { lg: '3px', xs: '10px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" color='#fff'>
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } ,  display: { xs: 'none', lg: 'block' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } ,  display: { xs: 'block', lg: 'none' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best exercises to target your {target}. It will help you improve your{' '} mood and gain energy.
        </Typography>
        <Stack sx={{gap: { lg: '10px', xs: '20px' } }}>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="20px" alignItems="center">
            <Button sx={{ background: '#0000FF', borderRadius: '50%', width: '50px', height: '50px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '20px', height: '20px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '20px', xs: '20px' } }} color='#fff'>
              {item.name}
            </Typography>
          </Stack>
        ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;