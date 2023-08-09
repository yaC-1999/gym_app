import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Card
      onClick={() => {
        setBodyPart(item);
      }}
      sx={{
        // padding: "20px 30px",
        background: "none",
        borderBottom: bodyPart === item ? "3px solid red" : "",
        boxShadow: "none",
        borderRadius: "0",
        ":hover": {
          boxShadow: "  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);",
        },
      }}
    >
      <Grid
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        height="150px"
        width="150px"
      >
        <FitnessCenterIcon fontSize="large" color="error" />
        <Typography
          fontSize="20px"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {item}
        </Typography>
      </Grid>
    </Card>
  );
};

export default BodyPart;
