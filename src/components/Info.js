import Section from "./Slider";
import Prestigeone from "../assets/images/prestigeone.png";
import Prestigetwo from "../assets/images/prestigetwo.jpg";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const itemsWithHeadingAndDescription = [
  { heading: "Property Category", description: "Residential" },
  { heading: "Property Type", description: "Villa" },
  { heading: "Age of the Property", description: "Above 5 years" },
  { heading: "No. of floors", description: "12" },
  { heading: "Property on floor", description: "1" },
  { heading: "Property facing", description: "North" },
  { heading: "Lift Availability ", description: "Yes(2)" },
  { heading: "Closed parking", description: "1" },
  { heading: "Opened parking", description: "2" },
  { heading: "Occupancy status", description: "Occupied" },
  { heading: "Furnishing", description: "Unfurnished " },
  { heading: "Location", description: "Bangalore" },
];

const fontStyle = {
  heading: {
    fontFamily: "Poppins, sans-serif",
    color: "#6C89A4",
    fontSize: "14px",
    fontWeight: "200",
  },
  description: {
    fontFamily: "Poppins, sans-serif",
    color: "#0A3A67",
    fontWeight: "500",
    fontSize: "14px",
  },
};

const Info = () => {
  const theme = useTheme();
  const slides = [
    { url: Prestigeone, title: "prestige" },
    { url: Prestigetwo, title: "boat" },
  ];
  const containerStyles = {
    width: "460px",
    height: "310px",
    margin: "0 0 0 20px",
    paddingLeft: "20px",
  };
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            [theme.breakpoints.down("md")]: {
              justifyContent: "center",
              marginRight: "40px",
            },
          }}
        >
          <Box>
            <div style={containerStyles}>
              <Section slides={slides} />
            </div>
          </Box>
          <Box
            sx={{
              border: "2px solid rgba(10, 58, 103, 0.3)",
              borderRadius: "30px",
              marginLeft: "70px",
              width: "340px",
              height: "315px",
              [theme.breakpoints.down("md")]: {
                marginTop: "20px",
                width: "550px",
                paddingLeft: "10px",
                marginLeft: "30px",
              },
            }}
          >
            {itemsWithHeadingAndDescription.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "15px",
                  height: "27px",
                  width: "90%",
                  justifyContent: "space-between",
                  marginTop: "-2px",
                  [theme.breakpoints.down("md")]: {
                    marginRight: "-20px",
                  },
                }}
                key={index}
              >
                <h2 style={fontStyle.heading}>{item.heading}</h2>
                <p style={fontStyle.description}>{item.description}</p>
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Info;
