import React, { Component } from "react"; //imrc
import "./navBar.css" //you have to import your CSS


// to import from node modules just do x from 'x';

// cc
class NavBar extends Component {
  state = {};
  render() {
    return  (
    <div className="navbar">NavBar will be here!</div>); 
 }

  test() {
    console.log("this is a test");
  }
}

export default NavBar;
