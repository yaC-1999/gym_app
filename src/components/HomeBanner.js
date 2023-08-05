import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import bannerImage from "../assets/images/banner.png";

const HomeBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", md: "150px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Grid container justifyContent="space-between">
        <Grid xs={12} md={6}>
          <Typography color="red" fontWeight="600" fontSize="26px">
            Fitness Club
          </Typography>
          <Typography
            fontWeight="700"
            sx={{ fontSize: { md: "44px", xs: "40px" } }}
          >
            Sweat, Smile <br /> And Repeat
          </Typography>
          <Typography fontSize="22px" lineHeight="35px" mb={3}>
            Check out the most effective exercises{" "}
          </Typography>
          <Button variant="contained" color="error" href="#exercises">
            Explor Exercises
          </Button>
        </Grid>
        <Grid
          md={6}
        //   sx={{}}
        //   //   mt="-330px"
          sx={{
            zIndex: 1,
            display: { md: "flex", xs: "none" },
            mt: { lg: "-330px", md: "-270px"},
          }}
        >
          <Card
            style={{
              boxShadow: "none",
              borderRadius: "none",
              background: "none",
              maxHeight: "800px",
            }}
          >
            <CardMedia
              component="img"
              style={{ zIndex: 1 }}
              image={bannerImage}
              title="banner"
            />
          </Card>
        </Grid>
      </Grid>
      <Stack></Stack>
    </Box>
  );
};

export default HomeBanner;
