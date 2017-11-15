
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../components/Navbar'
import styled from 'styled-components'


const Homepagestyle = styled.div`
padding: 50px 15px 15px 0px
position: absolute;
background-color: lightslategrey;
border: 2px solid black;  

div {
    /* margin: 10px; */
  /* padding: 10px 10px 10px 10px; */
  /* display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: space-around; */
  /* background-color: lightslategrey; */
  width:30em;

}

`


class  Homepage extends Component {
    render() {
        return (
            <div>
            {/* <Navbar/>  */}
            <Homepagestyle>
                <div>
                    <MuiThemeProvider>
                <div>
    <Card>
      <CardHeader
        title="parent.name"
        subtitle="# of kids"
        avatar="https://i.imgur.com/s6Faxdk.jpg?2"
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="https://i.imgur.com/Bk0J8FM.jpg" alt="" />
      </CardMedia>
      <CardTitle title="Parent Name"  />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        
      </CardText>
      <CardActions>
        <Link to='/chore'>
        <FlatButton label="Create Chore"  />
        </Link>

        <FlatButton label="Add/Delete/Update Child" />
        <FlatButton label="Edit Chores " />
      </CardActions>
    </Card>
            </div>
            </MuiThemeProvider>
            </div>
            </Homepagestyle>
            </div>
        );
    }
}

export default Homepage;



  