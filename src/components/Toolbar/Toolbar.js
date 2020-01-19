import React from "react";
import {NavLink, Link} from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar" >
    <nav className="toolbar-navigation" id='nav'>
      <div className="toolbar-navigation-items social-linkss">
            <ul className='link-transition'>
              <li><a href='https://twitter.com/ainul_haramain' target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" alt="yes"></i></a></li>
              <li><a href='https://www.facebook.com/ainulharamainhajj' target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href='https://www.instagram.com/ainulharamainhajj/' target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href='https://www.youtube.com/channel/UCWLoJ_qZBZ_yo-DmvFOAcnQ/featured' target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
            </ul>
      </div>
      
      <div className="logo"><Link to="/">Ainul Harmain</Link></div>
      
        <div className="toolbar-navigation-items nav-links navbar-nav">
          <ul>
            <li><NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/hajj">
            Hajj
          </NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/umrah">
            Umrah
          </NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink></li>
            <li><NavLink className="nav-item nav-link" to="/contact">
            Contact
          </NavLink></li>
          </ul>
      </div>
     <div className='toolbar-toggle-button'>
        <DrawerToggleButton ToggleDrawer={props.ToggleDrawer} />
    </div> 
    </nav>
  </header>
);

export default toolbar;
