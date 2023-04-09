import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav></SideNav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>
    </div>
  );
};

export default About;
