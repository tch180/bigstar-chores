import React, { Component } from 'react';
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Homepage from '../components/Homepage';


const Navstyle = styled.div`
background-color: black;
height: 3vw;
color: white;
text-transform: uppercase;
font-weight: 400;
h1{
margin-bottom: 1px;
    margin-top: 0px;
    border-bottom-width: 1px;
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
                <Navstyle>
            <div>
            <h1>BigStar Chores</h1>

                <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>    
                     <RaisedButton
                       onClick={this.handleTouchTap}
                       label="Home"
                     /> 
                     <Popover
                       open={this.state.open}
                       anchorEl={this.state.anchorEl}
                       anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                       targetOrigin={{horizontal: 'left', vertical: 'top'}}
                       onRequestClose={this.handleRequestClose}
                     >
                       <Menu>
                         <MenuItem primaryText="Parent" />
                         <MenuItem primaryText="Children &amp; Chores" />
                         <MenuItem primaryText="Chores &amp; Points" />
                         <MenuItem primaryText="Rewards" />
                       </Menu>
                     </Popover>
                   </div>
                   </MuiThemeProvider>

                </div>
                </Navstyle>
            </div>
            <div>
                            <Homepage/>
                            </div>
            
        </div>
        );
    }
}

export default Navbar;