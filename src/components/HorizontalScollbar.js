import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/system";

const HorizontalScollbar = ({ data, bodyPart, setBodyPart }) => {
  console.log(data);
  return (
    // <Grid container p="20px" justifyContent="center">
      <ScrollMenu>
        {data.map((item) => {
          return (
            <Box m="10px">
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            </Box>
          );
        })}
      </ScrollMenu>
    // </Grid>
  );
};

export default HorizontalScollbar;
