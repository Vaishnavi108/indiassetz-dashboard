import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Backarrow from "../assets/images/backarrow.png";
import Chat from "../assets/images/chat.png";
import Notification from "../assets/images/notification.png";
import Logout from "../assets/images/logoutt.png";
import { useTheme } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  "&:hover": {
    backgroundColor: "#ffffff",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "60ch",
  },
  [theme.breakpoints.down("md")]: {
    width: "390px",
    marginRight: "-60px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#0A3A67",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#0A3A67",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
}));
export default function PrimarySearchAppBar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginLeft: "12rem",
        position: "static",
      }}
      display="block"
      right={0}
      width="85%"
    >
      <Box sx={{ flexGrow: 0 }}>
        <Box
          className="main-div"
          sx={{
            // width: '70%',
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            // justifyContent: "right"
            [theme.breakpoints.down("md")]: {
              display: "flex",
              justifyContent: "space-evenly",
              flexFlow: "row wrap",
            },
          }}
        >
          <Box
            className="backarrow"
            sx={{
              backgroundColor: "white",
              width: "38px",
              height: "38px",
              borderRadius: "5px",
              marginLeft: "10px",
              [theme.breakpoints.down("md")]: {
                marginLeft: "-140px",
                marginBottom: "20px",
              },

              "&:hover": {
                width: "38px",
                height: "38px",
                backgroundColor: " #D3D3D3",
                cursor: "pointer",
                WebkitTransition: ".3s ease-in-out",
                transition: ".3s ease-in-out",
              },
            }}
          >
            <img
              src={Backarrow}
              alt=""
              style={{
                width: "20px",
                height: "22px",
                paddingTop: "9px",
                paddingLeft: "9px",
                alignItems: "center",
              }}
            />
          </Box>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search clients, properties, services"
                inputProps={{
                  style: { fontStyle: "italic" },
                  "aria-label": "search",
                }}
              />
            </Search>
          </Box>
          <Box>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#0A3A67",
                width: "150px",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <AddCircleIcon></AddCircleIcon>
              ADD
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <Box
              sx={{
                backgroundColor: "white",
                width: "35px",
                height: "35px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                marginLeft: "20px",
                "&:hover": {
                  width: "35px",
                  height: "35px",
                  backgroundColor: " #D3D3D3",
                  cursor: "pointer",
                  WebkitTransition: ".3s ease-in-out",
                  transition: ".3s ease-in-out",
                },
              }}
            >
              <img
                src={Chat}
                alt=""
                style={{
                  width: "27px",
                  height: "27px",
                  alignItems: "center",
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                width: "35px",
                height: "35px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                marginLeft: "20px",

                "&:hover": {
                  width: "35px",
                  height: "35px",
                  backgroundColor: " #D3D3D3",
                  cursor: "pointer",
                  WebkitTransition: ".3s ease-in-out",
                  transition: ".3s ease-in-out",
                },
              }}
            >
              <img
                src={Notification}
                alt="notification"
                style={{
                  width: "16px",
                  height: "21px",
                  alignItems: "center",
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                width: "35px",
                height: "35px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                marginLeft: "20px",
                "&:hover": {
                  width: "35px",
                  height: "35px",
                  backgroundColor: " #D3D3D3",
                  cursor: "pointer",
                  WebkitTransition: ".3s ease-in-out",
                  transition: ".3s ease-in-out",
                },
              }}
            >
              <img
                src={Logout}
                alt=""
                style={{
                  width: "17px",
                  height: "17px",
                  alignItems: "center",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "76%",
            height: "60px",
            margin: "20px auto 20px 177px ",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            [theme.breakpoints.down("md")]: {
              width: "620px",
              marginLeft: "-200px",
            },
          }}
        >
          <p
            style={{
              paddingLeft: "20px",
              color: "#0A3A67",
            }}
          >
            Investment
          </p>
        </Box>
      </Box>
    </Box>
  );
}
