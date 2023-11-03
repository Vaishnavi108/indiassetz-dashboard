import * as React from 'react';
import { styled,  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle'; 
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Backarrow from '../assets/backarrow.png';
import Chat from '../assets/chat.png';
import Notification from '../assets/notification.png';
import Logout from '../assets/logout.png';

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
    <Box sx={{ flexGrow: 0 }}>
      <div className='main-div'
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      > 
        <div
          style={{
            backgroundColor: "white",
            width: "35px",
            height: "35px",
            borderRadius: "5px",
            marginLeft: "10px",
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
        </div> 
        <div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search clients, properties, services"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> 
        </div>
        <div>
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
        </div>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <div
            style={{
              backgroundColor: "white", 
              width: "35px", 
              height: "35px", 
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center", 
              borderRadius: "5px",
              marginLeft: "20px",
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
          </div>
          <div
            style={{
              backgroundColor: "white", 
              width: "35px", 
              height: "35px",
              display: "inline-flex", 
              alignItems: "center", 
              justifyContent: "center", 
              borderRadius: "5px",
              marginLeft: "20px",
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
          </div>
          <div
            style={{
              backgroundColor: "white", 
              width:"35px",
              height: "35px", 
              display: "inline-flex", 
              alignItems: "center", 
              justifyContent: "center",
              borderRadius: "5px",
              marginLeft: "20px",
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
          </div>
        </Box>
      </div>
     <Box 
  style={{
    backgroundColor: 'white',
    width: '60%',
    height: '60px',
    margin: '20px auto', 
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left', 
  }}
>
    <p 
    style={{
        paddingLeft: '20px',
        color: "#0A3A67"
    }}>Investment</p>
</Box>
    </Box>
  );
}

  
  
