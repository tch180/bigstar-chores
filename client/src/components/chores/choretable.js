import React from 'react'
import {Table,TableBody,TableHeader,TableHeaderColumn, TableRow,TableRowColumn, } from 'material-ui/Table';


const ChoreTable = (props) => (
<Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Points</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
        {props.chores.map((chore, index) => {
            return(
            <TableRow>
                <TableRowColumn>{chore.name}</TableRowColumn>
            <TableRowColumn>{chore.points}</TableRowColumn>
            <TableRowColumn></TableRowColumn>
        </TableRow>)
        })}
    </TableBody>
  </Table>
);

export default ChoreTable;