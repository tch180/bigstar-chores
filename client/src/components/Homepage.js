
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar';


const Homepagestyle = styled.div`
padding: 50px 15px 15px 0px
position: absolute;
// background: lightslategrey;
border: 2px solid black;  

div {
     margin: 10px; 
  padding: 10px 10px 10px 10px; 
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: space-around; 
  background-color: lightslategrey; 
  width:30em;

}

`


class  Homepage extends Component {

    render() {
        return (
          
          <div>
                     
            <div>
            <AppBar title="BigStar Chores "
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
             </div>
             <Homepagestyle>
                <div>
                  
                </div>
          
            </Homepagestyle>
            </div>
        );
    }
}

export default Homepage;



  