import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  exercisesOptions,
  youtubeOptions,
  fetchData,
} from "../utils/fetchData";
import { Box } from "@mui/material";
import Detail from "./Detail";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );

      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exercisesOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exercisesOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        name={exerciseDetail.name}
        exercisesVideos={exerciseVideos}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
