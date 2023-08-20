import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { exercisesOptions, youtubeOptions, fetchData } from "../utils/fetchData";
import { Box } from "@mui/material";
import Detail from "./Detail";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

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
      console.log(exerciseDetailData)
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);

      console.log(exerciseVideosData)
      setExerciseVideos(exerciseVideosData.contents);
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
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
