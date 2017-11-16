import React, { Component } from 'react';
import {Table,TableBody,TableHeader,TableHeaderColumn, TableRow,TableRowColumn, } from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';


import axios from 'axios'
import ChoreTable from '../chores/choretable'


class componentName extends Component {
  state = {
    chores:[]
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
        <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Points</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
        {this.state.chores.map((chore, index) => {
            return(
            <TableRow key={index}>
                <TableRowColumn>{chore.name}</TableRowColumn>
            <TableRowColumn>{chore.points}</TableRowColumn>
            <TableRowColumn></TableRowColumn>
        </TableRow>)
        })}
    </TableBody>
  </Table>
 
      </div>
    );
  }
}

export default componentName;