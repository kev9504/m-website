import React from 'react';
import classes from './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props => (
    <header className={classes.Toolbar}>
    <nav className={classes.Navigation}>
        <div className={classes.ToolbarLogo}>
        <a href="/">LOGO</a></div>
        
        <div className={classes.Spacer}/>
        
        <div className={classes.NavigationItems}>
            <ul>
                <li><a href="/">work</a></li>
                <li><a href="/">about</a></li>
            </ul>
        </div>
        
        <div className={classes.drawer}> 
        <DrawerToggleButton 
        toggleHandler={props.toggleHandler}/>
        </div>
        
    </nav>
    </header>
    );
    
export default toolbar;