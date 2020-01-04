import React from 'react';
import './DrawerToggleButton.css'

const drawerToggleButton = props => (
    <button className='toggle-button' onClick={props.ToggleDrawer}> 
        <i class="material-icons">menu</i>
    </button>
);

export default drawerToggleButton