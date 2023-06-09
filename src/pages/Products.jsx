import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import ProductList from "./products/ProductList";

const Products = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav></SideNav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ProductList></ProductList>
        </Box>
      </Box>
    </div>
  );
};

export default Products;
