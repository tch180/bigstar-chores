
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import styled from 'styled-components'

const Homepagestyle = styled.div`
padding: 50px 15px 15px 0px
position: absolute;
div {
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: space-around;
}
`


class  Homepage extends Component {
    render() {
        return (
            <Homepagestyle>
                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
    <Card>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="https://i.imgur.com/s6Faxdk.jpg?2"
      />
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="https://i.imgur.com/Bk0J8FM.jpg" alt="" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
            </div>
            </MuiThemeProvider>
            </div>
            </Homepagestyle>
        );
    }
}

export default Homepage;



  