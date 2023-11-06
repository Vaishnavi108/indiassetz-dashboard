import { Avatar, Box, Typography } from "@mui/material";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Divider from '@mui/material/Divider';
import Profile from "../assets/images/profile.png";
import Dashboard from "../assets/images/Dashboard.png";
import Leads from "../assets/images/leads.png";
import Buyers from "../assets/images/buyers.png";
import Clients from "../assets/images/client.png";
import Properties from "../assets/images/properties.png";
import Orders from "../assets/images/orders.png";
import RedBox from "../assets/images/redbox.png";
import CallBack from "../assets/images/callback.png";
import Investments from "../assets/images/investments.png";
import Payment from "../assets/images/payments.png";
import Magik from "../assets/images/magik.png"; 


function SideNav() {
  return (
    <div className="container" style={{
      width:"16%",
    }}> 
      <ProSidebar>  
        <SidebarContent>
          <Menu> 
             <Box sx={styles.avatarContainer}>
          <Avatar sx={styles.avatar} alt="profile" src={Profile}></Avatar>
          <Typography variant="body" sx={styles.profile}>Karthik J</Typography>
           <Typography variant="overline" >Partner code: IA234522</Typography>
           <Typography variant="overline" >Referral code: IA234522</Typography>
        </Box> 
        <Box display="flex" justifyContent="right">
          <Divider width='242px'  />
        </Box>
            <MenuItem className="list-gap" active>   
            <img src={Dashboard} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Dashboard</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={Leads} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Leads</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={Buyers} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Buyers</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={Clients} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover}  variant="body2">Clients</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={Properties} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Properties</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={Orders} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Orders</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={RedBox} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Red Box</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={CallBack} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Call Back</Typography>
            </MenuItem>
            <MenuItem className="list-gap" active>   
            <img src={Investments} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Investments</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={Payment} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Payments</Typography>
            </MenuItem>
             <MenuItem className="list-gap" active>   
            <img src={Magik} className="image" alt="Dashboard Icon" /> 
              <Typography sx={styles.hover} variant="body2">Magik</Typography>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}

const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    my: 3,
    color: "#6C89A4",
    fontFamily: "Poppins",
  },
  avatar: {
    width: "40px",
    height: "auto",
    marginLeft: "55px",
  },
  profile: {
    mt: 1,
    marginLeft: "50px",
    fontFamily: 'Poppins, sans-serif',
    color:"#0A3A67"
  },
  hover: {
     color: '#6C89A4',
    "&:hover":{
      color:"#6C89A4",
      cursor:"pointer",
      fontWeight: "bold",
    }
}
  };
export default SideNav;


