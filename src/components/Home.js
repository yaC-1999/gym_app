import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "./Exercises";
import HomeBanner from "./HomeBanner";
import SearchExercise from "./SearchExercise";

const Home = () => {
  return (
    <Box>
      <HomeBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  );
};

export default Home;
