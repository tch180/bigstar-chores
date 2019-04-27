import React, {Component} from 'react';
// import styled from 'styled-components' import RaisedButton from
// 'material-ui/RaisedButton'; import Popover from 'material-ui/Popover'; import
// Menu from 'material-ui/Menu'; import MenuItem from 'material-ui/MenuItem';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; import
// getMuiTheme from 'material-ui/styles/getMuiTheme';
import Homepage from '../components/Homepage';
import {Link} from "react-router-dom";

// const Navstyle = styled.div` background-color: darkblue; background-image:
// url("https://i.imgur.com/tiho3XF.jpg"); background-repeat: no-repeat;
// background-position: center; background-size:cover; /* background-size:
// 1600px 300px; */ color: white; text-transform: uppercase; font-weight: 400;
// h1{ margin-bottom: 1px;     margin-top: 0px;     border-bottom-width: 1px; }
// div {     width:25%; } `

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
///////////////
// not needed since removing MaterialUI
///////////////
  // handleTouchTap = (event) => {
  //   // This prevents ghost click.
  //   event.preventDefault();

  //   this.setState({open: true, anchorEl: event.currentTarget});
  // };

  // handleRequestClose = () => {
  //   this.setState({open: false});
  // };

  render() {
    return (

///////////////
// If signed in remove Signup & Sign from navbar, change to sign out
///////////////

     
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">BigStar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
      {/* ///////////////
      // Change to Drop down. 
      /////////////// */}
        <a className="nav-link" href="#">SignIn</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SignUp</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Chores & Kids 
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
    {/* ///////////////
    // Search will eventually Search for chores or for Kids. 
    /////////////// */}
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        
    

  
    
        );
    }
}

export default Navbar;