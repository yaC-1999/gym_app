import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Link,
  Stack,
  Chip,
} from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  // 3/4 sit-up
  return (
    // <Grid xs={12} display="flex">
      <Grid  xs={12} md={4} sm={6} p={1}>
        <Link
          href={`/exercise/${exercise.id}`}
          sx={{
            textDecoration: "none",
            textTransform: "capitalize",
          }}
        >
          <Card
          
            sx={{
              minWidth:'400px', height:'500px',
              ":hover": { boxShadow: "  0.1em 0.1em 1em rgba(0, 0, 0, 0.3);" },
            }}
          >
            <CardMedia
              sx={{ height: '370px' }}
              image={exercise.gifUrl}
              title={exercise.name}
            />
            <CardContent>
              <Stack direction="row" spacing={1} pb={2}>
                <Chip label={exercise.bodyPart} color="error" />
                <Chip label={exercise.equipment} color="warning" />
              </Stack>
              <Typography variant="h5">{exercise.name}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    // </Grid>
  );
};

export default ExerciseCard;
