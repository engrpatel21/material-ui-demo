import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { AcUnit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typoStyles: {
    flex: 1,
  }
}))

const Header = () => {

  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typoStyles} >This is our header</Typography>
        <AcUnit/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
