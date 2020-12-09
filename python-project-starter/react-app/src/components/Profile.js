import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles/MainPageStyles';

export default function Profile() {
  const classes = useStyles();

  return (
    <Box className={ classes.mainpageContainer }>
      <div>
          This is a profile
      </div>
    </Box>
  );
}
