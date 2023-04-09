import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
const Settings = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav></SideNav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Settings</h1>
        </Box>
      </Box>
    </div>
  );
};

export default Settings;
