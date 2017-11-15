import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import axios from 'axios'
import CreateChore from '../chores/createchore'




class Chores extends Component {
    state = {
      chores:[],
        open: false
      };
    
async componentWillMount() {
  try {
    const parent_id = 1
    const res = await axios.get(`/api/parents/${parent_id}/chores`)
    this.setState({chores: res.data})
    console.log(this.state.chores)
  }catch (error){
    console.log(error)
  }
}
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };


    render() {
        const actions = [
            <FlatButton
              label="Ok"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
          ];
        return (
          <div>
            
            
            <div>
        <RaisedButton label="Create a new Chore " onClick={this.handleOpen} />
        <Dialog
          title="Create a new Chore"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
            Pick a date
          
          <DatePicker hintText="Date Picker" />
        </Dialog>
        <CreateChore chores={this.state.chores}/>
      </div>
      </div>
        );
    }
}

export default Chores;