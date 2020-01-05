import React from 'react';
import { Link, NavLink } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import'./SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    // if (props.show) {
    //     drawerClasses = ['side-drawer', 'open'];
    // }
    return (
    <nav className={drawerClasses.join(' ')}>
        
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className='toolbar-toggle-button'>
                    <DrawerToggleButton ToggleDrawer={props.ToggleDrawer} />
                </div> 
            </nav>
        </header>

        <ul className='side-nav-links'>
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
        </ul>
        <div className='social-buttons'>
            <ul>
              <li><a href='https://twitter.com/ainul_haramain' target="_blank"><i class="fab fa-twitter"></i></a></li>
              <li><a href='https://www.facebook.com/ainulharamainhajj' target="_blank"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href='https://www.instagram.com/ainulharamainhajj/' target="_blank"><i class="fab fa-instagram"></i></a></li>
              <li><a href='https://www.youtube.com/channel/UCWLoJ_qZBZ_yo-DmvFOAcnQ' target="_blank"><i class="fab fa-youtube"></i></a></li>
            </ul>
      </div>
    </nav>
    )
};

export default sideDrawer