import React, { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../Assets/icon.png";
import { Link } from "react-router-dom";
import { env } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import logo from "./logo.png"
const Topbar = () => {
  let navigate = useNavigate();
  const { user, setUser, admin, setAdmin, userName, setCartData } =
    useContext(UserContext);

  let userDelete = async () => {
    try {
      let response = await axios.delete(`${env.api}/temp`);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    userDelete();
    setUser(null);
    setAdmin(false);
    navigate("/");
    setCartData([]);
    window.localStorage.clear();
  };
  return (
    <>
      <Navbar
        className="p-4"
        collapseOnSelect
        expand="lg"
        
        style={{backgroundColor:'ORANGE',color:"black",boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}
      >
        <Container>
          <img style={{ width: "100px" ,MARGIN:'20PX 0PX 0PX 0PX'}} src='https://urbansurf.ca/wp-content/uploads/2019/05/Rental-logo-600x347.png' alt={icon} />
          <Navbar.Toggle>
          :
          </Navbar.Toggle>
          <Navbar.Brand aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "1.1rem" }}>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/equipment">
                View Equipments
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
            </Nav>
            <Nav>
              {!window.localStorage.getItem("app-token") ? (
                <Nav.Link as={Link} to="/login">
                  Login<LoginIcon style={{color:'BLACK'}}/>
                </Nav.Link>
              ) : (
                ""
              )}
              {!window.localStorage.getItem("app-token") ? (
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              ) : (
                ""
              )}
              {window.localStorage.getItem("app-token") ? (
                <Nav.Link>
                  <b>
                    Welcome <br />
                    <div className="px-3">
                      {window.localStorage.getItem("user")}
                    </div>
                  </b>
                </Nav.Link>
              ) : (
                ""
              )}
              {window.localStorage.getItem("app-token") &&
              window.localStorage.getItem("Admin") ? (
                <Nav.Link className="m-auto" as={Link} to="/admin">
                  Admin Access<AdminPanelSettingsIcon/>
                </Nav.Link>
              ) : (
                ""
              )}
              {window.localStorage.getItem("app-token") ? (
                <Nav.Link className="m-auto" as={Link} to="/cart">
                 View Cart <ShoppingCartIcon/>
                </Nav.Link>
              ) : (
                ""
              )}
              {window.localStorage.getItem("app-token") ? (
                <Nav.Link className="m-auto" onClick={logout}>
                  Log Out<LogoutIcon/>
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;