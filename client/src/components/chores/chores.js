import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';




class Chores extends Component {
    state = {
        open: false,
      };
    
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
      </div>
        );
    }
}

export default Chores;