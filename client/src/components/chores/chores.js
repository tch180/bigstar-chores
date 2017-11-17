import React, { Component } from 'react';
import {Table,TableBody,TableHeader,TableHeaderColumn, TableRow,TableRowColumn, } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios'
import ChoreTable from '../chores/choretable'
import AppBar from "material-ui/AppBar";


class componentName extends Component {
  state = {
    chorespecial:[],
    chores:[],
    multiSelectable: true,
    
  }

  handleChoreAssign = async (event)=> {
    event.preventDefault()

    await axios.post(`/api/parents/${this.props.match.params.parentid}/choresadd`)
    console.log('test')
  }



  handleChange = async (event) => {
    const updateChore = {
        ...this.state.chorespecial
    }
    updateChore[event.target.name] = event.target.value
    this.setState({chorespecial: updateChore})
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
            <TableRowColumn onChange={this.handleChange}>{chore.name}</TableRowColumn>
            <TableRowColumn>{chore.points}</TableRowColumn>
            <TableRowColumn>{chore.parent_id} - {chore.child_id}</TableRowColumn>
        </TableRow>)
        })}
    </TableBody>
  </Table>
 <div>
<FlatButton onClick={this.handleChoreAssign} 
>
Assign Chores
 </FlatButton>
      </div>
      </div>
      </div>
    );
  }
}

export default componentName;