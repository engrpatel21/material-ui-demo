import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  helloThereStyle: {
    fontStyle: 'oblique',
    color: 'red'
  },
  buttonStyles: {
    color: 'green'
  }
});

const PracticeMUI = () => {

  const classes = useStyles()

  return ( 
    <div className={classes.root}>
      <Typography color='primary' variant='h1' className={classes.helloThereStyle}>
        Hello There
      </Typography>
      <Button color='secondary' variant='outlined' >
        First Button Here</Button>
    </div>
   );
}
 
export default PracticeMUI;