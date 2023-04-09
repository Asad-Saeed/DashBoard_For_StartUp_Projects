import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../components/DashBoard.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccordionHomeDash from "../components/AccordionHomeDash";
import HomeBarChart from "../charts/HomeBarChart";
import CountUp from "react-countup";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav></SideNav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={8} xl={9}>
              <Stack spacing={2} direction="row">
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradient "
                >
                  <CardContent>
                    <div className="iconStyle">
                      <CreditCardIcon></CreditCardIcon>
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      <span>$</span>
                      <CountUp start={0} end={2300} delay={0.8}></CountUp>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      Total Earning
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradientLight "
                >
                  <CardContent>
                    <div className="iconStyle">
                      <ShoppingBagIcon></ShoppingBagIcon>
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      <CountUp start={0} end={130} delay={0.8}></CountUp>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      Total Order
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4} md={4} xl={3}>
              <Stack spacing={2}>
                <Card
                  sx={{ maxWidth: 100 + "%" }}
                  className="allcontentleft gradientLight"
                >
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="PaddingALL">
                      <span className="pricetitle">$203K</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card
                  sx={{ maxWidth: 100 + "%" }}
                  className="allcontentleft gradient"
                >
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="PaddingALL">
                      <span className="pricetitle">$203K</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={8} xl={9}>
              <Card sx={{ height: 60 + "vh", overflow: "auto" }}>
                <CardContent>
                  <HomeBarChart></HomeBarChart>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4} xl={3}>
              <Card sx={{ height: 60 + "vh", overflow: "auto" }}>
                <CardContent>
                  <div className="PaddingALL">
                    <span className="producttitle">Popular Products</span>
                  </div>

                  <AccordionHomeDash></AccordionHomeDash>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
