import React from 'react';
import { Button, Typography } from '@material-ui/core'

const PracticeMUI = () => {
  return ( 
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography color='primary' variant='h1'>
        Hello There
      </Typography>
      <Button color='secondary' variant='outlined' >
        First Button Here</Button>
    </div>
   );
}
 
export default PracticeMUI;