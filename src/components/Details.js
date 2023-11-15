import Box from "@mui/material/Box";
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

function Details({ inputData }) {
  return (
    <>
      <Box
        sx={{
          border: "2px solid rgba(10, 58, 103, 0.3)",
          borderRadius: "20px",
          marginTop: "20px",
          width: "60%",
          height: "80px",
          marginLeft: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            marginLeft: "22px",
            marginTop: "10px",
            width: "90%",
          }}
        >
          {inputData.map((item, index) => (
            <div key={index}>
              <h2 style={fontStyle.heading}>{item.heading}</h2>
              <p style={fontStyle.description}>{item.description}</p>
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
}
export default Details;
