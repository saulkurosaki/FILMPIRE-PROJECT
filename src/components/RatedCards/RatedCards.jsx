import React from 'react';
import { Typography, Box } from '@mui/material';
import useStyles from './styles';
import { Movie } from '..';

const RatedCards = ({ title, data }) => {

    const classes = useStyles();

  return (
    <Box>
        <Typography variant='h5' gutterBottom>
            {title}
        </Typography>

        <Box display='flex' flexWrap='wrap' className={classes.container}>
            {data?.results.map((movie, index) => (
                <Movie key={movie.id} movie={movie} i={index} />
            ))}
        </Box>
    </Box>
  )
}

export default RatedCards