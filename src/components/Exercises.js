import React, { useState, useEffect } from "react";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import { Grid, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({
  exercises,
  setExercises,
  bodyPart,
  currentPage,
  setCurrentPage,
}) => {
  const exercisesPerPage = 9;

  const handlePaginate = (e, value) => {
    console.log(value);
    setCurrentPage(value);
    window.scrollTo({ top: 1300, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exercisesOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exercisesOptions
        );
      }
      setCurrentPage(1);
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <Grid container p="20px" justifyContent="center">
      {
        currentExercise.map((exercises, index) => {
          return <ExerciseCard key={index} exercise={exercises} />;
        })
      }

      <Grid xs={12} mt="100px">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="error"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={handlePaginate}
            size="large"
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Exercises;
