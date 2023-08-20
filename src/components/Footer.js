import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid m={1} display="flex" justifyContent="center" alignItems="center">
      <Typography variant="subtitle2">Made by <span style={{color:'red'}} >Yasamin</span> :)</Typography>
    </Grid>
  );
};

export default Footer;
