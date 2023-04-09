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
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AnalyticsGeoChart from "../charts/AnalyticsGeoChart";
import AnalyticsPieChart from "../charts/AnalyticsPieChart";
import AnalyticsBarChart from "../charts/AnalyticsBarChart";
import CountUp from "react-countup";

const Analytics = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav></SideNav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} xl={5}>
              <Stack spacing={2} direction="column">
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 48 + "%", height: 100 + "%" }}
                    className="gradient "
                  >
                    <CardContent>
                      <div className="iconStyle ">
                        <Typography
                          gutterBottom
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Total Visitors
                        </Typography>
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        <CountUp start={0} end={290} delay={0.8}></CountUp>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Last Day
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 48 + "%", height: 100 + "%" }}
                    className="gradientLight "
                  >
                    <CardContent>
                      <div className="iconStyle ">
                        <Typography
                          gutterBottom
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Total Visitors
                        </Typography>
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        <CountUp start={0} end={2100} delay={0.8}></CountUp>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 48 + "%", height: 100 + "%" }}
                    className="gradient "
                  >
                    <CardContent>
                      <div className="iconStyle ">
                        <Typography
                          gutterBottom
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Total Visitors
                        </Typography>
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        <CountUp start={0} end={5200} delay={0.8}></CountUp>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Last Month
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 48 + "%", height: 100 + "%" }}
                    className="gradientLight "
                  >
                    <CardContent>
                      <div className="iconStyle ">
                        <Typography
                          gutterBottom
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Total Visitors
                        </Typography>
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        <CountUp start={0} end={26000} delay={0.8}></CountUp>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        Last Year
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={7} xl={7}>
              <Card sx={{ height: 60 + "vh", overflow: "auto" }}>
                <CardContent
                  sx={{ height: 60 + "vh", width: "100%", overflow: "auto" }}
                >
                  <AnalyticsBarChart></AnalyticsBarChart>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={8} xl={9}>
              <Card sx={{ height: 50 + "vh", overflow: "auto" }}>
                <CardContent
                  sx={{ height: 60 + "vh", width: "100%", overflow: "auto" }}
                >
                  <AnalyticsGeoChart></AnalyticsGeoChart>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4} xl={3}>
              <Card sx={{ height: 50 + "vh", overflow: "auto" }}>
                <CardContent>
                  <div className="PaddingALL">
                    <span className="producttitle">Popular Products</span>
                  </div>

                  <AnalyticsPieChart></AnalyticsPieChart>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Analytics;
