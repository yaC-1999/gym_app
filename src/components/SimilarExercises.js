import React from "react";
import { Grid, Typography } from "@mui/material";
import HorizontalScollbar from "./HorizontalScollbar";
import Loading from "./Loading";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Grid mt={2}>
      <Typography variant="h3" mb={5} mt={2}>
        Exercises that target the same{" "}
        <span style={{ color: "red" }}>muscle group</span>{" "}
      </Typography>
      <Grid>
        {targetMuscleExercises.length ? (
          <ScrollMenu>
            {targetMuscleExercises?.map((item) => {
              return <ExerciseCard exercise={item} />;
            })}
          </ScrollMenu>
        ) : (
          // <HorizontalScollbar data={targetMuscleExercises} />
          <Loading />
        )}
      </Grid>

      <Typography variant="h3" mb={5} mt={2}>
        Exercises that target the same{" "}
        <span style={{ color: "red" }}>equipment</span>{" "}
      </Typography>
      <Grid>
        {equipmentExercises.length ? (
          <ScrollMenu>
            {equipmentExercises?.map((item) => {
              return <ExerciseCard exercise={item} />;
            })}
          </ScrollMenu>
        ) : (
          // <HorizontalScollbar data={targetMuscleExercises} />
          <Loading />
        )}
      </Grid>
    </Grid>
  );
};

export default SimilarExercises;
