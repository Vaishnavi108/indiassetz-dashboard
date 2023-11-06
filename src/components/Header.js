import * as React from 'react';
import { styled,  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle'; 
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Backarrow from '../assets/images/backarrow.png';
import Chat from '../assets/images/chat.png';
import Notification from '../assets/images/notification.png';
import Logout from '../assets/images/logout.png';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#ffffff',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '60ch',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:"#0A3A67"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#0A3A67',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
})); 
  export default function PrimarySearchAppBar() {
      return (
        <Box display="block" position="absolute" right={0} width="85%">
          <Box sx={{ flexGrow: 0 }}>
            <Box
              className="main-div"
              sx={{
                // width: '70%',
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                // justifyContent: "right"
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  width: "35px",
                  height: "35px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                  "&:hover": {
                    width: "35px",
                    height: "35px",
                    backgroundColor: ' #D3D3D3',
                    cursor:'pointer', 
                    WebkitTransition: '.3s ease-in-out',
	                  transition: '.3s ease-in-out'
                  },
                }}
              >
                <img
                  src={Backarrow}
                  alt=""
                  style={{
                    width: "18px",
                    height: "20px",
                    paddingTop: "8px",
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
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                    backgroundColor: ' #D3D3D3',
                    cursor:'pointer', 
                    WebkitTransition: '.3s ease-in-out',
	                  transition: '.3s ease-in-out'
                  },
                  }}
                >
                  <img
                    src={Chat}
                    alt=""
                    style={{
                      width: "25px",
                      height: "25px",
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
                    backgroundColor: ' #D3D3D3',
                    cursor:'pointer', 
                    WebkitTransition: '.3s ease-in-out',
	                  transition: '.3s ease-in-out'
                  },
                  }}
                >
                  <img
                    src={Notification}
                    alt=""
                    style={{
                      width: "18px",
                      height: "20px",
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
                    backgroundColor: ' #D3D3D3',
                    cursor:'pointer', 
                    WebkitTransition: '.3s ease-in-out',
	                  transition: '.3s ease-in-out'
                  },
                  }}
                >
                  <img
                    src={Logout}
                    alt=""
                    style={{
                      width: "20px",
                      height: "25px",
                      alignItems: "center",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                width: "60%",
                height: "60px",
                margin: "20px auto",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
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

  
  
