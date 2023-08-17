import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Link } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  useEffect(() => {
    console.log('useEffect')
    console.log(window.location)
    if (window.location.hash === "#exercises") {
      console.log('first')
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
            borderBottom: "3px solid red",
          }}
        >
          Home
        </Link>
        <Link
          component="button"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 950, behavior: "smooth" });
            } else {
              window.location.href = "/#exercises";
            }
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
