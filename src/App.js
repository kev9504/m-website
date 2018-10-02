import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import classes from './App.css';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state={ 
    toggle: false,
  }
  
  toggleHandler=()=>{
    this.setState(prevState =>{
      return{
        toggle: !prevState.toggle
      };
    });
    console.log(this.state);
  }
  render() {
    let sideDrawer;
    let backdrop;
    
    if (this.state.toggle){
      backdrop = <Backdrop toggleHandler={this.toggleHandler}/>;
    }
    return (
      <div className={classes.App}>
      <Toolbar toggleHandler={this.toggleHandler}/>
      <SideDrawer show={this.state.toggle}/>
      {backdrop}
      <div>
      BODY
      </div>
      
      <div>
      FOOTER
      </div>
      </div>
    );
  }
}

export default App;
