import CarouselTwo from "./SliderTwo";
import Property from "../assets/images/property.png";
import PropertyOne from "../assets/images/propertyOne.png";
import PropertyTwo from "../assets/images/propertyTwo.png";
import PropertyThree from "../assets/images/propertyThree.png";
import Box from "@mui/material/Box";
import Calendar from "../assets/images/Cal.png";
import Location from "../assets/images/Loc.png";

const fontStyle = {
  heading: {
    fontFamily: "Poppins, sans-serif",
    color: "rgba(255, 255, 255, 1)",
    fontSize: "14px",
    fontWeight: "400",
  },
  description: {
    fontFamily: "Poppins, sans-serif",
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "500",
    fontSize: "12px",
  },
};

const PropertiesInfo = [
  {
    name: "Villa in Goa",
    price: "₹ 1,20,000,000",
    min: "₹ 20,000,000",
    vectorOne: Calendar,
    date: "14.05.2023",
    vectorTwo: Location,
    location: "14.05.2023",
  },
];

function captionTwo() {
  return (
    <Box
      sx={{
        border: "1px solid rgba(10, 58, 103, 0.3)",
        width: "60px",
        height: "17px",
        borderTopLeftRadius: "10px",
        marginTop: "-263px",
        backgroundColor: "white",
        display: "flex",
        position: "absolute",
      }}
    >
      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#0A3A67",
          fontWeight: "600",
          fontSize: "10px",
          margin: "3px 0 0 5px",
        }}
      >
        FRACT-O
      </p>
    </Box>
  );
}

function PropDetails() {
  return (
    <Box>
      <Box
        sx={{
          border: "0px solid rgba(10, 58, 103, 0.3)",
          width: "199px",
          // borderRadius: "10px",
          backgroundColor: "rgba(10, 58, 103, 0.4)",
          marginTop: "-124px",
          position: "absolute",
          height: "110px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          backdropFilter: "blur(40px)",
        }}
      >
        {PropertiesInfo.map((item, index) => (
          <div key={index}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-evenly",
              }}
            >
              <p style={fontStyle.heading}>{item.name}</p>
              <p style={fontStyle.heading}>{item.price} </p>
            </Box>
            <p
              style={{
                ...fontStyle.heading,
                marginRight: "90px",
                marginTop: "-5px",
              }}
            >
              {item.min}
            </p>
            <p
              style={{
                ...fontStyle.description,
                marginRight: "90px",
                marginTop: "-12px",
              }}
            >
              min investment
            </p>
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                marginTop: "-10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginLeft: "10px",
                }}
              >
                <img
                  style={{
                    height: "16px",
                    marginTop: "13px",
                  }}
                  src={item.vectorOne}
                  alt="Calendar"
                />
                <p
                  style={{
                    ...fontStyle.heading,
                    marginLeft: "5px",
                  }}
                >
                  {item.date}
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginLeft: "2px",
                }}
              >
                <img
                  style={{
                    height: "30px",
                    marginTop: "8px",
                  }}
                  src={item.vectorTwo}
                  alt="Location"
                />
                <p
                  style={{
                    ...fontStyle.heading,
                    marginLeft: "-8px",
                  }}
                >
                  {item.location}
                </p>
              </Box>
            </Box>
          </div>
        ))}
      </Box>
    </Box>
  );
}

const InfoTwo = () => {
  const slides = [
    { url: Property, title: "Villa" },
    { url: PropertyOne, title: "Villa" },
    { url: PropertyTwo, title: "Vila" },
    { url: PropertyThree, title: "Villa" },
    { url: Property, title: "Villa" },
    { url: PropertyOne, title: "Villa" },
    { url: PropertyTwo, title: "Villa" },
    { url: PropertyThree, title: "Villa" },
  ];
  const captions = [
    <PropDetails />,
    <PropDetails />,
    <PropDetails />,
    <PropDetails />,
    <PropDetails />,
    <PropDetails />,
    <PropDetails />,
    <PropDetails />,
  ];
  const captionn = [
    captionTwo(),
    captionTwo(),
    captionTwo(),
    captionTwo(),
    captionTwo(),
    captionTwo(),
    captionTwo(),
    captionTwo(),
  ];
  const containerStyles = {
    width: "97%",
    height: "400px",
    margin: "10px 0 0 0",
    paddingLeft: "15px",
  };
  const itemsPerSlide = 4;
  return (
    <Box
      sx={{
        border: "2px solid rgba(15, 62, 106, 0.15)",
        borderRadius: "20px",
        marginTop: "20px",
        width: "98%",
        height: "340px",
      }}
    >
      <p
        style={{
          paddingLeft: "20px",
          fontFamily: "Poppins, sans-serif",
          color: "#0A3A67",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        Similar Properties
      </p>
      <Box>
        <div style={containerStyles}>
          <CarouselTwo
            slides={slides}
            itemsPerSlide={itemsPerSlide}
            captions={captions}
            captionsTwo={captionn}
          >
            {slides.map((item, index) => (
              <PropDetails key={index} />
            ))}
          </CarouselTwo>
        </div>
      </Box>
    </Box>
  );
};
export default InfoTwo;
