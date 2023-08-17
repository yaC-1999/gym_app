import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { exercisesOption, exercisesOptions } from "../utils/fetchData";
import { fetchData } from "../utils/fetchData";
import HorizontalScollbar from "./HorizontalScollbar";

const SearchExercise = ({
  setExercises,
  bodyPart,
  setBodyPart,
  setCurrentPage,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    console.log("search clicked!");
    if (searchValue) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchValue) ||
          exercise.target.toLowerCase().includes(searchValue) ||
          exercise.equipment.toLowerCase().includes(searchValue) ||
          exercise.bodyPart.toLowerCase().includes(searchValue)
      );
      setSearchValue("");
      setExercises(searchedExercises);
      setCurrentPage(1);
      window.scrollTo({ top: 1300, behavior: "smooth" });
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Grid container>
        <Grid xs={12}>
          <Typography
            fontWeight={700}
            mb="50px"
            textAlign="center"
            sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          >
            Awesome Exercises You Should Know
          </Typography>
        </Grid>
        <Grid xs={12} display="flex" justifyContent="end">
          <TextField
            height="56px"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            type="text"
            sx={{
              input: {
                fontWeight: "700",
              },
              width: "100%",
            }}
            color="error"
          />
          <Button
            variant="contained"
            color="error"
            sx={{
              position: "absolute",
              height: "56px",
              width: "200px",
              boxShadow: "none",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container p="20px" mt="40px">
        <HorizontalScollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Grid>

      {/* <Box position="relative" mb="72px"></Box> */}
    </Stack>
  );
};

export default SearchExercise;
