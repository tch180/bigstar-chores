import React, { Component } from 'react';
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
import { Redirect } from "react-router-dom";


class addchores extends Component {
    state = { 
        chores: {
            name: '',
            points: '',
        },
        redirectToChores: false,
        open: false
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };


   
  handleChange = async (event) => {
    const attribute = event.target.name
    const points = event.target.points
    const updateChorePoints = {...this.state.chores}
    const updateChore = {...this.state.chores}
    updateChore[attribute] = event.target.value
    updateChorePoints[points]= event.target.value
    this.setState({ chores: updateChore})
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`/api/chores`, { chores: this.state.chores });
    this.setState({ redirectToChores: true });
    this.handleClose()
  };


    render() {

        const actions = [
            <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
            <FlatButton label="Submit" primary={true} onClick={this.handleSubmit} />
          ];



        
        return (
        <div>
        <RaisedButton label="Create new Chore " onClick={this.handleOpen} />
        
        <Dialog
          title="Create Chore"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div>
            <input
              placeholder="Chore Name"
              onChange={this.handleChange}
              type="text"
              name="name"
              required
              value={this.state.chores.name}
            />
          </div><hr />
          
            <input
              placeholder="Points"
              onChange={this.handleChange}
              type="integer"
              name="points"
              required
              value={this.state.chores.point}
            />
          
        </Dialog>
        
            </div>
        );
    }
}

export default addchores;