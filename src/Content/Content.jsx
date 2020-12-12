import { Grid } from "@material-ui/core";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} >
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={4} >
        <ProductCard />
      </Grid>
      <Grid item xs={12} sm={4} >
        <ProductCard />
      </Grid>
    </Grid>
  );
};

export default Content;
