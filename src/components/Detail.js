import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const extraDetail = [
    { icon: BodyPartImage, name: exerciseDetail.bodyPart },
    { icon: TargetImage, name: exerciseDetail.target },
    { icon: EquipmentImage, name: exerciseDetail.equipment },
  ];
  return (
    <Grid container mt={4}>
      <Grid xs={7} 
      display='flex' justifyContent='center'
      >
        <Card sx={{ maxWidth:'600px', boxShadow: "none" }}>
          <CardMedia
            component="img"
            image={exerciseDetail.gifUrl}
            alt={exerciseDetail.name}
          />
        </Card>
      </Grid>
      <Grid xs={5} pl={2} pr={2}>
        <Typography
          variant="h3"
          sx={{ textTransform: "capitalize" }}
          fontWeight="bold"
        >
          {exerciseDetail.name}
        </Typography>
        <Typography variant="body1" color="#4F4C4C" p={1} pt={3}>
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>
            {exerciseDetail.name}
          </span>{" "}
          bup is one of the best exercises to target your{" "}
          {exerciseDetail.target}. It will help you improve your mood and gain
          energy.
        </Typography>{" "}
        {extraDetail.map((item) => {
          return (
            <Card sx={{ display: "flex", boxShadow: "none", padding: "5px" }}>
              <Grid  display="flex" alignItems="center">
                <Grid
                 
                  p={2}
                  sx={{ backgroundColor: "#FFF2DB", borderRadius: "50%" }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 40, height: 40 }}
                    image={item.icon}
                    alt={item.name}
                  />
                </Grid>
                <Grid  pl={2}>
                  <Typography
                    component="div"
                    variant="h6"
                    textTransform="capitalize"
                  >
                    {item.name}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Detail;
