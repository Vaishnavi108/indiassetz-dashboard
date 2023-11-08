import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
function createData(clientid, name, contact, email,date,status) {
  return { clientid, name, contact, email, date,status};
}
const fontStyle = {
  heading: {
    fontFamily: 'Poppins, sans-serif',
    color: 'rgba(10, 58, 103, 0.8)', 
    fontSize:"14px",
    fontWeight:"400"
  },
  description: {
    fontFamily: 'Poppins, sans-serif',
    color: '#0A3A67',
    fontWeight:"600",
    fontSize:"14px"
  },
 
} 

function status() {
  return (
    <Button
      variant="outlined"
      style={{
        width: "120px",
        height: "30px",
        borderRadius: "20px",
        color:"#0A3A67", 
        borderColor:"#0A3A67"
      }}
    >
      Added
    </Button>
  );
} 
function statustwo() {
  return (
    <Button
      variant="outlined"
      style={{
        width: "120px",
        height: "30px",
        borderRadius: "20px",
        color:"#0A3A67",
        borderColor:"#0A3A67",
      }}
    >
      Interested
    </Button>
  );
}

const rows = [
  createData('NTO1234', 'Amit Singh', 9999999999, 'xyz@gmail.com', '05.06.2023',status()),
  createData('NTO1234', 'Amit Singh', 9999999999, 'xyz@gmail.com', '05.06.2023',statustwo() ),
  createData('NTO1234', 'Amit Singh', 9999999999, 'xyz@gmail.com', '05.06.2023',status()),
  createData('NTO1234', 'Amit Singh', 9999999999, 'xyz@gmail.com', '05.06.2023',statustwo()),
  createData('NTO1234', 'Amit Singh', 9999999999, 'xyz@gmail.com', '05.06.2023',statustwo()),

];

export default function DenseTable() {
  return ( 
    <Box sx={{
      border:"2px solid rgba(15, 62, 106, 0.15)",
      borderRadius:"20px",
      marginTop:"20px",
      width:"98%",
    }}>
    <TableContainer sx={{
    }}>
        <p style={{
          paddingLeft: '20px',
          fontFamily: 'Poppins, sans-serif',
          color: '#0A3A67',
          fontWeight: "500",
          fontSize: "14px"

        }}> Interested Clients</p>
      <Table sx={{ minWidth: 650, }} size="medium"> 
        <TableHead > 
          <TableRow >
               <Box sx={{
      border:"2px solid rgba(10, 58, 103, 0.3)",
      borderRadius:"10px",
       display:'flex', 
    //  justifyContent:"space-evenly",
      alignItems:'center',
      width:"95%",
      height:"45px",
      marginLeft:"25px",
      marginBottom:"10px", 
      backgroundColor:"rgba(15, 62, 106, 0.15)",
    }}>
            <TableCell 
            style={{
              ...fontStyle.heading,
              marginLeft:"30px",
              borderBottom: 'none',
            }} align="left">Client Id</TableCell>
            <TableCell style={{
              ...fontStyle.heading,
              marginLeft:"55px",
              borderBottom: 'none'
            }} align="left">Name</TableCell>
            <TableCell style={{
              ...fontStyle.heading,
              marginLeft:"56px",
              borderBottom: 'none'
            }} align="left">Contact</TableCell>
            <TableCell  style={{
              ...fontStyle.heading,
              marginLeft:"75px",
              borderBottom: 'none'
            }} align="left">Email</TableCell>
            <TableCell style={{
              ...fontStyle.heading,
              marginLeft:"83px",
              borderBottom: 'none'
            }} align="left">Date</TableCell>
            <TableCell style={{
              ...fontStyle.heading,
              marginLeft:"90px",
              borderBottom: 'none'
            }} align="left">Status</TableCell>
            </Box>
          </TableRow>  
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
                <Box sx={{
      border:"2px solid rgba(10, 58, 103, 0.3)",
      borderRadius:"10px",
      display:"flex",
      justifyContent:"space-evenly",
      alignItems: "center",
      width:"95%",
      height:"45px",
      marginLeft:"25px",
      marginBottom:"10px"
    }}>
              <TableCell style={{
                ...fontStyle.heading,
                borderBottom: 'none', 
                maxWidth:"15%"
              }} align="left">{row.clientid}</TableCell>
              <TableCell style={{
                ...fontStyle.heading,
                borderBottom: 'none',
                maxWidth:"15%"
              }}  align="left">{row.name}</TableCell>
              <TableCell style={{
                ...fontStyle.heading,
                borderBottom: 'none',
                maxWidth:"15%"
              }}  align="left">{row.contact}</TableCell>
              <TableCell style={{
                ...fontStyle.heading,
                borderBottom: 'none',
                maxWidth: "15%"
              }}  align="left">{row.email}</TableCell>
              <TableCell style={{
                ...fontStyle.heading,
                borderBottom: 'none',
                maxWidth:"15%"
              }}  align="left">{row.date}</TableCell>
              <TableCell style={{
                ...fontStyle.heading,
                borderBottom: 'none',
                maxWidth:"15%"
              }}  align="left">{row.status}</TableCell>
              </Box>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
