import React from "react";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid Item>Header</Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            Content will go here
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
