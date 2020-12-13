import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function Ratings() {
  const [tastyValue, setTastyValue] = React.useState(2);
  const [easyValue, setEasyValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Typography component="legend">tasty</Typography>
        <Rating
          name="tasty"
          tastyValue={tastyValue}
          onChange={(event, newTastyValue) => {
            setTastyValue(newTastyValue);
          }}
        />
      </Box>
      <Box component="fieldset" borderColor="transparent">
        <Typography component="legend">easy</Typography>
        <Rating
          name="easy"
          easyValue={easyValue}
          onChange={(event, newEasyValue) => {
            setEasyValue(newEasyValue);
          }}
        />
      </Box>
    </div>
  );
}
