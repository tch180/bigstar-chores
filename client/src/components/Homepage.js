import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import Newparent from '../components/parents/newParent'
import headerImage from '../assets/headerBSC1.jpg'
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"; 
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import Navbar from "../components/Navbar";
// import styled from "styled-components";
// import AppBar from "material-ui/AppBar";




// const Homepagestyle = styled.div`
// padding: 50px 15px 15px 0px
// position: absolute;
//  background: lightslategrey;
// border: 2px solid black;  
// margin: 45px;
// /* background-image: url(https://i.imgur.com/KH1djSF.jpg);
// background-repeat: no-repeat	; */

     
//   padding: 10px 10px 10px 10px; 
//   /* display: inline-flex;
//   justify-content: flex-end; */
//   /* align-items: flex-end;
//   align-content: space-around; 
//   background-color: lightslategrey; 
//   width:30em; */

// `


  


class Homepage extends Component {
  render() {
    return (
  <div>
    <div className="jumbotron shadow-lg" style={{backgrounColor: 'honeydew'}}>
    <img src={headerImage} alt="" style={{width: '100%', height:'auto', backgroundAttachment: 'fixed' }}/>
      <h1 className="display-4">BigStar-Chores</h1>
      <p className="lead">Chore Management for you and your Kids, with intergrated rewards program.</p>
      <hr className="my-4"/>
      <p>Sign up now to give it a try. </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Sign-up</a>
    </div>        
      </div>
    );
  }
}

export default Homepage;
