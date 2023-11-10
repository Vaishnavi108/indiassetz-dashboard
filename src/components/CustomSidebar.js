import React from "react";
import { Avatar, Box, Typography, Divider } from "@mui/material";
import { ProSidebar, Menu, MenuItem, SidebarContent } from "react-pro-sidebar";
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

const menuItems = [
  // Define your menu items here
  { src: Dashboard, label: "Dashboard" },
  { src: Leads, label: "Leads" },
  { src: Buyers, label: "Buyers" },
  { src: Clients, label: "Clients" },
  { src: Properties, label: "Properties" },
  { src: Orders, label: "Orders" },
  { src: RedBox, label: "Red Box" },
  { src: CallBack, label: "Call Back" },
  { src: Investments, label: "Investments" },
  { src: Payment, label: "Payments" },
  { src: Magik, label: "Magik" },
];

function SideNav() {
  return (
    <Box
      className="container"
      sx={{ width: "16%", marginTop: "-8rem", position: "fixed" }}
    >
      <ProSidebar>
        <SidebarContent>
          <Menu>
            <Box sx={styles.avatarContainer}>
              <Avatar sx={styles.avatar} alt="profile" src={Profile}></Avatar>
              <Typography variant="body" sx={styles.profile}>
                Karthik J
              </Typography>
              <Typography variant="overline">Partner code: IA234522</Typography>
              <Typography variant="overline">
                Referral code: IA234522
              </Typography>
            </Box>
            <Box display="flex" justifyContent="left"></Box>
            <Divider
              sx={{
                width: "242px",
                marginLeft: "-37px",
              }}
            />
            {menuItems.map((item, index) => (
              <MenuItem key={index} className="list-gap" active>
                <img
                  src={item.src}
                  className="image"
                  alt={`${item.label} Icon`}
                />
                <Typography sx={styles.hover} variant="body2">
                  {item.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </Box>
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
    width: "45px",
    height: "auto",
    marginLeft: "55px",
  },
  profile: {
    mt: 1,
    marginLeft: "50px",
    fontFamily: "Poppins, sans-serif",
    color: "#0A3A67",
  },
  hover: {
    color: "#6C89A4",
    "&:hover": {
      color: "#6C89A4",
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
};
export default SideNav;
