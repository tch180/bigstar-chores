import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Redirect} from 'react-router-dom';
import axios from 'axios'

const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      onClick={this.handleClose}
   
    />,
    
  ];

class newChild extends Component {
    state = {
        child: {
            name:'',
        },
        redirectToHome: false,
        open: false,
        
      };
    

      handleOpen = () => {

        this.setState({open: true});
      };


    
      handleClose = () => {
        this.setState({open: false});
      };


      handleChange = async (event) => {
          const updateChild = {
              ...this.state.child
          }
          updateChild[event.target.name] = event.target.value
          this.setState({child: updateChild})
      }
        handleSubmit = async (event)=>{
            event.preventDefault()
            await axios.post(`/api/children`, {child: this.state.child })
            this.setState({redirectToHome: true})
        }


    render() {
        return (
            <div>
        <RaisedButton label="Create new Child " onClick={this.handleOpen} />
        <Dialog
          title="Enter Child Name "
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <div>
          <input
          placeholder='Child Name' 
          onChange={this.handleChange}
          type="text"
          required
          value={this.state.child.name} />
          </div>
        </Dialog>
        <h1>Hello</h1>
      </div>

        );
    }
}

export default newChild;