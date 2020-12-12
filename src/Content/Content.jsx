import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "../ProductCard/ProductCard";
import contentDetail from "./ContentDetails";

const Content = () => {
  const [content, setContent] = useState(contentDetail);

  const contentCard = content.map((details) => (
    <Grid item xs={12} sm={4}>
      <ProductCard {...details} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {contentCard}
    </Grid>
  );
};

export default Content;
