import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import styled from "styled-components";
import axios from "axios";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";

const Parentstyle = styled.div`background: green;`;
const ParentContainer = styled.div`background: grey;`;

class Parents extends Component {
  state = {
    parents: []
  };
  ///////////////
  //gets the parent info
  ///////////////
  async componentWillMount() {
    try {
      const res = await axios.get(`/api/parents`);
      this.setState({ parents: res.data });
      console.log(this.state.parents);
    } catch (error) {
      console.log(error);
    }
  }
 

  render() {
    return (
      <div>
        <AppBar
          title="Parents"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div>
          {this.state.parents.map((parent, index) => {
            return (
              <Card key={index}>
                <CardHeader
                  title={parent.name}
                  subtitle="# of kids"
                  avatar="https://i.imgur.com/s6Faxdk.jpg?2"
                />
                <CardMedia
                  overlay={
                    <CardTitle
                      title={parent.name}
                      subtitle="Overlay subtitle"
                    />
                  }
                >
                  <img src="https://i.imgur.com/03PI7RD.jpg" alt="" />
                </CardMedia>
                <CardTitle title={parent.name} />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
                <CardActions>
                  <Link to="/chores">
                    <FlatButton label="View Chores" />
                  </Link>

                  <FlatButton label="Add/Delete/Update Child" />
                  <FlatButton label="Assign Chores " />
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Parents;
