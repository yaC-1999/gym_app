import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Exercises from "./Exercises";
import HomeBanner from "./HomeBanner";
import SearchExercise from "./SearchExercise";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <Box>
      <HomeBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setCurrentPage={setCurrentPage}
      />
       <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default Home;
