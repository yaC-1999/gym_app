import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const ExerciseVideos = ({ exercisesVideos, name }) => {
  console.log(exercisesVideos);
  // if (!exercisesVideos.lenght) return "loading...";

  return (
    <Grid mt={3} p={2}>
      <Typography variant="h4">
        Watch{" "}
        <span style={{ color: "red", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos:
      </Typography>
      <Grid
      // display="flex" justifyContent="space-around" flexWrap="wrap"
      >
        <ScrollMenu>
          {exercisesVideos?.map((item) => {
            return (
              <Grid xs={2} md={4} p={1} mt={2}>
                <a
                  href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{textDecoration:'none'}}
                >
                  <Card sx={{ minWidth: 345, height: 300 }} onClick={() => {}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.video.thumbnails[0].url}
                        alt={item.video.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {item.video.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
              </Grid>
            );
          })}
        </ScrollMenu>
      </Grid>
    </Grid>
  );
};

export default ExerciseVideos;
