import Header from "./components/Header";
import Info from "./components/Info";
import SideNav from "./components/CustomSidebar";
import Details from "./components/Details";
import PropertiesDet from "./components/PropertiesDet";
import BasicTable from "./components/Tabledesc";
import SimilarProperty from "./components/SimilarProperties";
import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";

const itemsWithHeadingAndDescriptionTwo = [
  { heading: "Bedrooms", description: "2" },
  { heading: "Bathrooms", description: "2" },
  { heading: "Lifts", description: "2" },
  { heading: "Built-up", description: "1200 sq.ft." },
];
const itemsWithHeadingAndDescriptionThree = [
  { heading: "Total asset value", description: "1,20,000,000" },
  { heading: "Min. investment", description: "20,000,000" },
  { heading: "Deadline", description: "14.05.2023" },
];

const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <Header/>
      <SideNav />
      <Box
        sx={{
          backgroundColor: "white",
          width: "65%",
          height: "1406px",
          marginLeft: "23rem",
          borderRadius: "5px",
          [theme.breakpoints.down("md")]: {
            width: "610px",
            marginLeft: "-4px",
            height: "1850px",
          },
        }}
      >
        <p
          style={{
            paddingLeft: "20px",
            color: "#0A3A67",
            paddingTop: "20px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Prestige
        </p>
        <Info />
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-evenly",
            marginRight: "20px",
            marginTop: "10px",
          }}
        >
          <Details inputData={itemsWithHeadingAndDescriptionTwo} />
          <Details inputData={itemsWithHeadingAndDescriptionThree} />
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            marginLeft: "15px",
          }}
        >
          <PropertiesDet />
          <BasicTable />
          <SimilarProperty />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
