import React, { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  Divider,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon, ArrowBack as CloseIcon } from "@mui/icons-material";
import {
  ProSidebar,
  Menu as ProMenu,
  MenuItem as ProMenuItem,
  SidebarContent,
} from "react-pro-sidebar";
import Profile from "../assets/images/profile.png";
import Dashboard from "../assets/images/Dashboard.png";
import Leads from "../assets/images/leads.png";
import Buyers from "../assets/images/buyers.png";
import Clients from "../assets/images/client.png";
import Properties from "../assets/images/properties.png";
import OrdersIcon from "../assets/images/orders.png";
import RedBox from "../assets/images/redbox.png";
import CallBack from "../assets/images/callback.png";
import Investments from "../assets/images/investments.png";
import Payment from "../assets/images/payments.png";
import Magik from "../assets/images/magik.png";
import downarrow from "../assets/images/down.png";
import uparrow from "../assets/images/uparrow.png";

const menuItems = [
  { src: Dashboard, label: "Dashboard" },
  { src: Leads, label: "Leads" },
  { src: Buyers, label: "Buyers" },
  { src: Clients, label: "Clients" },
  { src: Properties, label: "Properties" },
  {
    src: OrdersIcon,
    label: "Orders",
    subMenuItems: [{ label: "Transactional" }, { label: "Non-Transactional" }],
  },
  { src: RedBox, label: "Red Box" },
  { src: CallBack, label: "Call Back" },
  { src: Investments, label: "Investments" },
  { src: Payment, label: "Payments" },
  { src: Magik, label: "Magik" },
];

function SideNav() {
  const [orderMenuAnchor, setOrderMenuAnchor] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const handleOrderMenuToggle = (event) => {
    setOrderMenuAnchor(orderMenuAnchor ? null : event.currentTarget);
  };
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <React.Fragment>
      {isMdDown && (
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        >
          <ProSidebar collapsed={!isSidebarOpen}>
            <SidebarContent>
              <ProMenu>
                <Box sx={styles.avatarContainer}>
                  <Avatar
                    sx={styles.avatar}
                    alt="profile"
                    src={Profile}
                  ></Avatar>
                  <Typography variant="body" sx={styles.profile}>
                    Karthik J
                  </Typography>
                  <Typography variant="overline">
                    Partner code: IA234522
                  </Typography>
                  <Typography variant="overline">
                    Referral code: IA234522
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="left"
                  onClick={handleOrderMenuToggle}
                  sx={styles.ordersContainer}
                ></Box>
                <Divider
                  sx={{
                    width: "242px",
                    marginLeft: "-37px",
                  }}
                />
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.subMenuItems ? (
                      <ProMenuItem
                        key={index}
                        className="list-gap"
                        onClick={handleOrderMenuToggle}
                      >
                        <img
                          src={OrdersIcon}
                          alt="Orders Icon"
                          className="image"
                          sx={styles.ordersIcon}
                        />
                        <p
                          style={{
                            ...styles.hover,
                            marginTop: "1px",
                            marginBottom: "-5px",
                          }}
                          variant="body2"
                        >
                          Orders
                        </p>
                        <img
                          src={orderMenuAnchor ? uparrow : downarrow}
                          alt="Arrow Icon"
                          style={{
                            marginTop: "-3px",
                            height: "25px",
                          }}
                        />
                      </ProMenuItem>
                    ) : (
                      <ProMenuItem key={index} className="list-gap">
                        <img
                          src={item.src}
                          className="image"
                          alt={`${item.label} Icon`}
                        />
                        <Typography sx={styles.hover} variant="body2">
                          {item.label}
                        </Typography>
                      </ProMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </ProMenu>
            </SidebarContent>
          </ProSidebar>

          <Menu
            anchorEl={orderMenuAnchor}
            open={Boolean(orderMenuAnchor)}
            onClose={() => setOrderMenuAnchor(null)}
          >
            {menuItems
              .find((item) => item.label === "Orders")
              ?.subMenuItems.map((subItem, subIndex) => (
                <MenuItem
                  key={subIndex}
                  onClick={() => setOrderMenuAnchor(null)}
                  sx={styles.hover}
                >
                  {subItem.label}
                </MenuItem>
              ))}
          </Menu>
        </Drawer>
      )}

      {isMdDown && (
        <IconButton
          color="#6C89A4"
          aria-label="open drawer"
          onClick={handleToggleSidebar}
          sx={{
            display: { sm: "block", md: "none" },
            position: "fixed",
            top: "7px",
            left: "10px",
            zIndex: 3,
          }}
        >
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      {!isMdDown && (
        <Box
          className={`container ${isMdDown && isSidebarOpen ? "expanded" : ""}`}
          sx={{
            width: "16%",
            marginTop: "-8rem",
            position: "fixed",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          {/* Sidebar content for larger screens */}
          <ProSidebar collapsed={!isSidebarOpen}>
            <SidebarContent>
              <ProMenu>
                <Box sx={styles.avatarContainer}>
                  <Avatar
                    sx={styles.avatar}
                    alt="profile"
                    src={Profile}
                  ></Avatar>
                  <Typography variant="body" sx={styles.profile}>
                    Karthik J
                  </Typography>
                  <Typography variant="overline">
                    Partner code: IA234522
                  </Typography>
                  <Typography variant="overline">
                    Referral code: IA234522
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="left"
                  onClick={handleOrderMenuToggle}
                  sx={styles.ordersContainer}
                ></Box>
                <Divider
                  sx={{
                    width: "242px",
                    marginLeft: "-37px",
                  }}
                />
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.subMenuItems ? (
                      <ProMenuItem
                        key={index}
                        className="list-gap"
                        onClick={handleOrderMenuToggle}
                      >
                        <img
                          src={OrdersIcon}
                          alt="Orders Icon"
                          className="image"
                          sx={styles.ordersIcon}
                        />
                        <p
                          style={{
                            ...styles.hover,
                            marginTop: "1px",
                            marginBottom: "-5px",
                          }}
                          variant="body2"
                        >
                          Orders
                        </p>
                        <img
                          src={orderMenuAnchor ? uparrow : downarrow}
                          alt="Arrow Icon"
                          style={{
                            marginTop: "-3px",
                            height: "25px",
                          }}
                        />
                      </ProMenuItem>
                    ) : (
                      <ProMenuItem key={index} className="list-gap">
                        <img
                          src={item.src}
                          className="image"
                          alt={`${item.label} Icon`}
                        />
                        <Typography sx={styles.hover} variant="body2">
                          {item.label}
                        </Typography>
                      </ProMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </ProMenu>
            </SidebarContent>
          </ProSidebar>
          <Menu
            anchorEl={orderMenuAnchor}
            open={Boolean(orderMenuAnchor)}
            onClose={() => setOrderMenuAnchor(null)}
          >
            {menuItems
              .find((item) => item.label === "Orders")
              ?.subMenuItems.map((subItem, subIndex) => (
                <MenuItem
                  key={subIndex}
                  onClick={() => setOrderMenuAnchor(null)}
                  sx={styles.hover}
                >
                  {subItem.label}
                </MenuItem>
              ))}
          </Menu>
        </Box>
      )}
    </React.Fragment>
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
    cursor: "pointer",
    "&:hover": {
      color: "#6C89A4",
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  ordersContainer: {
    cursor: "pointer",
    marginBotttom: "10px",
    "&:hover": {
      color: "#6C89A4",
    },
  },
  ordersIcon: {
    marginRight: "10px",
  },
};

export default SideNav;
