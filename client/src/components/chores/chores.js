import React, { Component } from 'react';
import {Table,TableBody,TableHeader,TableHeaderColumn, TableRow,TableRowColumn, } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios'
import ChoreTable from '../chores/choretable'
import AppBar from "material-ui/AppBar";


class componentName extends Component {
  state = {
    chores:[],
    multiSelectable: true,
    
  }

  handleChoreAssign = async (event)=> {

  }



  handleChange = async (event) => {
    const updateParent = {
        ...this.state.parent
    }
    updateParent[event.target.name] = event.target.value
    this.setState({parent: updateParent})
 }

  async componentWillMount () {
  try{
    const res = await axios.get(`/api/chores`)
    this.setState({ chores: res.data})
    console.log(this.state.chores)
  }catch (error) {
    console.log(error)
  }
}

  render() {
    return (
      <div>
      <AppBar title="BigStar Chores" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      <div>
  <Table multiSelectable={this.state.multiSelectable}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Points</TableHeaderColumn>
        <TableHeaderColumn>Completed</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
        {this.state.chores.map((chore, index) => {
            return(
            <TableRow key={index}>
                <TableRowColumn>{chore.name}</TableRowColumn>
            <TableRowColumn>{chore.points}</TableRowColumn>
            <TableRowColumn>{chore.parent_id} - {chore.child_id}</TableRowColumn>
        </TableRow>)
        })}
    </TableBody>
  </Table>
 <div>
<FlatButton>
Assign Chores
 </FlatButton>
   </div>

      </div>
      </div>
    );
  }
}

export default componentName;