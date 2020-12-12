import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
 
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          World of the day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {" "}
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          {" "}
          well meaning
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> learn more</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
