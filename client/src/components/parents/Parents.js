import React, { Component } from "react";
// import AppBar from "material-ui/AppBar";
import styled from "styled-components";
import axios from "axios";
// import {Card,CardActions,CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
// import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
// import Newchild from '../children/newchild'
import Navbar from '../Navbar'
import headerImage from "../../assets/headerBSC1.jpg"
// import { PlacesChildFriendly } from "material-ui/svg-icons";






class Parents extends Component {
  state = {
    parents: [],
    image:[],
  
  };
  ///////////////
  //gets the parent info
  ///////////////

componentWillMount() {
    this.getAllParents()
    this.getRandomImage()
  }
  getAllParents = async () => {
    try {
      console.log('TRYING')
      const res = await axios.get(`/api/parents`);
      this.setState({ parents: res.data });
      console.log(this.state.parents);
    } catch (error) {
      console.log(error);
    }
  }


  getRandomImage = async ()=> {
    try{
      console.log("trying to get random image");
      const res = await axios.get('https://picsum.photos/v2/list');
      this.setState({image: res.data});
      console.log(this.state.image);

    }catch(error) {
        console.log(error)
    }
  }
 
  ///////////////
  //Delete parent
  ///////////////
  async deleteParent (id) {
    try {
      const res = await axios.delete(`/api/parents/${id}`)
      this.getAllParents()
    }catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
 {/* --------------------------------------------------------------------------------- */}
< div className = 'container-fluid-row' style = {{paddingTop: '30px',display: 'flex', justifyContent: 'space-around',flexWrap:'wrap' }} > {
  this
    .state
    .parents
    .map((parent, index) => {
      return (
        <div key={index}>
          <div
            className="card pt-3 mt-5"
            style={{
            width: "18rem",
            marginTop: '20px'
          }}>
            <img
              src="https://picsum.photos/200/300"
              className="card-img-top p-1"
              alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{parent.name}</h5>
              <p className="card-text">{parent.id}.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>

    );
  })}

    </div>








         {/* <div>
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
                  <img src="https://i.imgur.com/bce5yjY.jpg" alt="" />
                </CardMedia>
                <CardTitle title={parent.name} />

                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
                
                <CardActions>
                  <Link to={`/parents/${parent.id}/chores`}>
                    <FlatButton label="View Chores" />
                  </Link>
                  <Link to='/child'>
                  <FlatButton label="View children & assign Chores" />
                  </Link>
                  <Newchild/>
                  
                  <FlatButton label="Delete Parent"
                    onClick={() => this.deleteParent(parent.id)}
                  />
                  
              
                </CardActions>
              </Card>



            );
          })}
        </div> */}

        
      </div>
// ---------------------------------------------------------------------------------

    );
  }
}

export default Parents;
