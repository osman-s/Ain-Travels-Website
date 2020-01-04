import React from 'react';
import'./SideDrawer.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

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
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Hajj</a></li>
            <li><a href='/'>Umrah</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
        <div className='social-buttons'>
            <ul>
              <li><a href='https://twitter.com/ainul_haramain' target="_blank"><i class="fab fa-twitter"></i></a></li>
              <li><a href='https://www.facebook.com/ainulharamainhajj' target="_blank"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href='https://www.instagram.com/ainulharamain/' target="_blank"><i class="fab fa-instagram"></i></a></li>
              <li><a href='https://www.youtube.com/channel/UCiBIqsvCBB2xbh0v5z2WTEA' target="_blank"><i class="fab fa-youtube"></i></a></li>
            </ul>
      </div>
    </nav>
    )
};

export default sideDrawer