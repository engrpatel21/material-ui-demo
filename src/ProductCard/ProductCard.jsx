import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 14,
  }
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const {avatarSrc, title, subTitle, description, imgSrc} = props

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={avatarSrc}
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />
      <CardMedia style={{ height: "150px" }} image={imgSrc} />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Title
        </Typography>
        <Typography variant="h5" component="h2">
          h2 as h5
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          secondaryText
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> Buy Now</Button>
        <Button size="small"> Offer</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
