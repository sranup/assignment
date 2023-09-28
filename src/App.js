import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";

import "./App.css";
import BullForceLogo from "./BullForce.png";

function App() {
  const [aboutUsMenuAnchor, setAboutUsMenuAnchor] = useState(null);
  const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);

  const handleAboutUsMenuOpen = (event) => {
    console.log("about us open", event.currentTarget);
    setAboutUsMenuAnchor(event.currentTarget);
  };
  const handleAboutUsMenuClose = () => {
    console.log("about us close");
    setAboutUsMenuAnchor(null);
  };

  const handleProductsMenuOpen = (event) => {
    console.log(event.currentTarget);
    setProductsMenuAnchor(event.currentTarget);
  };

  const handleRequestDemoClick = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "black",
            height: "70px",
            margin: 0,
            top: 0,
            left: 0,
            right: 0,
            position: "fixed",
            zIndex: 999,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "90px",
              marginTop: "25px",
            }}
          >
            <img
              src={BullForceLogo}
              alt="BullForce Logo"
              style={{ height: "23px", width: "151px" }}
            />
            <Link
              to="#"
              onClick={handleAboutUsMenuOpen}
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "20px",
              }}
            >
              About Us &#9662;
            </Link>
            <Menu
              anchorEl={aboutUsMenuAnchor}
              open={Boolean(aboutUsMenuAnchor)}
              onClose={handleAboutUsMenuClose}
            >
              <MenuItem onClick={handleAboutUsMenuClose}>About Us 1</MenuItem>
              <MenuItem onClick={handleAboutUsMenuClose}>About Us 2</MenuItem>
            </Menu>
            <Link
              to="#"
              onClick={handleProductsMenuOpen}
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "20px",
              }}
            >
              Our Products &#9662;
            </Link>

            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "20px",
              }}
            >
              Contact Us
            </Link>
          </div>

          <div
            style={{
              marginLeft: "auto",
              marginBottom: "500px",
              marginTop: "-30px",
            }}
          >
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "20px",
              }}
            >
              Sign Up
            </Link>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "20px",
              }}
            >
              Login
            </Link>
            <div
              onClick={handleRequestDemoClick}
              style={{
                width: "22.38%",
                height: "25%",
                paddingLeft: 24,
                paddingRight: 50,
                paddingTop: 25,
                paddingBottom: 10,
                background: "#F74542",
                borderRadius: 38,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
                marginRight: "20px",
                marginTop: "-8px",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Cardium B",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Request A Demo
              </div>
            </div>
            <Link
              to="#"
              onClick={handleProductsMenuOpen}
              style={{
                textDecoration: "none",
                color: "white",
                position: "relative",
                marginRight: "20px",
              }}
            >
              Diplomats &#9662;
            </Link>
          </div>
        </AppBar>
      </Box>
      <RegistrationForm />
    </div>
  );
}

export default App;
