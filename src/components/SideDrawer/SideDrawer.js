import React from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  // if (props.show) {
  //     drawerClasses = ['side-drawer', 'open'];
  // }
  return (
    <nav className={drawerClasses.join(" ")}>
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div className="toolbar-toggle-button">
            <DrawerToggleButton ToggleDrawer={props.ToggleDrawer} />
          </div>
        </nav>
      </header>

      <div className="side-nav-links">
        <div>
          <NavLink
            className="nav-item nav-link"
            to="/"
            onClick={props.ToggleDrawer}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className="nav-item nav-link"
            to="/hajj"
            onClick={props.ToggleDrawer}
          >
            Hajj
          </NavLink>
        </div>
        <div>
          <NavLink
            className="nav-item nav-link"
            to="/umrah"
            onClick={props.ToggleDrawer}
          >
            Umrah
          </NavLink>
        </div>
        <div>
          <NavLink
            className="nav-item nav-link"
            to="/about"
            onClick={props.ToggleDrawer}
          >
            About
          </NavLink>
        </div>
        <div>
          <NavLink
            className="nav-item nav-link"
            to="/contact"
            onClick={props.ToggleDrawer}
          >
            Contact
          </NavLink>
        </div>
      </div>
      {/* <ul className='side-nav-links'>
        <li><NavLink className="nav-item nav-link" to="/" onClick={props.ToggleDrawer}>
            Home
          </NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/hajj" onClick={props.ToggleDrawer}>
            Hajj
          </NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/umrah" onClick={props.ToggleDrawer}>
            Umrah
          </NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/about" onClick={props.ToggleDrawer}>
            About
          </NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/contact" onClick={props.ToggleDrawer}>
            Contact
          </NavLink></li>
        </ul> */}
      <div className="social-buttonss">
        <div className="social-l">
          <a
            href="https://twitter.com/ainul_haramain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="social-l">
          <a
            href="https://www.facebook.com/ainulharamainhajj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="social-l">
          <a
            href="https://www.instagram.com/ainulharamainhajj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="social-l">
          <a
            href="https://www.youtube.com/channel/UCWLoJ_qZBZ_yo-DmvFOAcnQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default sideDrawer;
