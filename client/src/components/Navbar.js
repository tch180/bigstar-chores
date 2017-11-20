import React, { Component } from 'react';
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Homepage from '../components/Homepage';
import { Link } from "react-router-dom";


const Navstyle = styled.div`
background-color: darkblue;
background-image: url("https://i.imgur.com/tiho3XF.jpg");
background-repeat: no-repeat;
background-position: center; 
background-size:cover;

/* background-size: 1600px 300px; */
color: white;
text-transform: uppercase;
font-weight: 400;

h1{
margin-bottom: 1px;
    margin-top: 0px;
    border-bottom-width: 1px;
}
div {
    width:25%;
}
`







class Navbar extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
          open: false,
        };
      }
    
      handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();
    
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        });
      };
    
      handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };




    render() {
        return (   
            <div>
            
               
            <div>
           
            
            <div>
            <Navstyle>
                <div>    
                <h1>BigStar Chores</h1>
                     <RaisedButton
                       onClick={this.handleTouchTap}
                       label="Menu"
                     /> 
                     <Popover
                       open={this.state.open}
                       anchorEl={this.state.anchorEl}
                       anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                       targetOrigin={{horizontal: 'left', vertical: 'top'}}
                       onRequestClose={this.handleRequestClose}
                     >
                       <Menu>
                          <Link to="/">
                       <MenuItem primaryText="Homepage" />
                          </Link>
                         <Link to="/parents">
                         <MenuItem primaryText="Parent" />
                         </Link>
                         <Link to="/child">
                         <MenuItem primaryText="Children" />
                         </Link>
                         <Link to="/chores">
                         <MenuItem primaryText="Chores" />
                         </Link>
                         <MenuItem primaryText="Rewards" />
                       </Menu>
                     </Popover>
                   </div>
                   </Navstyle>

                </div>
            </div>
            <div>
                            {/* <Homepage/> */}
                            </div>
            
        </div>
        );
    }
}

export default Navbar;