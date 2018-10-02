import React from 'react';
import classes from './SideDrawer.css';

const sideDrawer =(props)=>{
    let sideDrawerClasses = classes.SideDrawer;
    if(props.show){
        sideDrawerClasses = classes.SideDrawer + ' ' + classes.Show;
    }
    return(
    <div className={sideDrawerClasses}>
        <ul>
            <li><a href='/'>work</a></li>
            <li><a href='/'>about</a></li>
        </ul>
    </div>);
    };
    
export default sideDrawer;