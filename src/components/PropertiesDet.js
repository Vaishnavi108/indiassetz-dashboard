import React from 'react'
import Box from '@mui/material/Box'; 

const PropertiesDet = () => {
  return (
    <>
    <Box>
          <Box 
            sx={{
              border: "2px solid rgba(10, 58, 103, 0.3)",
              borderRadius: "10px",    
              marginRight:"20px",
            }}
          > 
            <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            color: '#0A3A67',
            fontWeight: "500",
            fontSize: "14px",
            paddingLeft:"10px"
            }}> Property Description </h3> 
            <p style={{
            fontFamily: 'Poppins, sans-serif',
            color: '#0A3A67',
            fontWeight: "400",
            fontSize: "14px", 
            paddingLeft:"10px"
            }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </p>
          </Box>
          </Box>
    </>
  )
}

export default PropertiesDet