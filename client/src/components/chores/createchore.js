import {Table,
TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import TextField from 'material-ui/TextField';
  import Toggle from 'material-ui/Toggle';
  import React, { Component } from 'react';
  import axios from 'axios'
  const styles = {
    propContainer: {
      width: 200,
      overflow: 'hidden',
      margin: '20px auto 0',
    },
    propToggleHeader: {
      margin: '20px auto 10px',
    },
  };
  
  const tableData = [
    {
      name: 'John Smith',
      status: 'Employed',
    },
    {
      name: 'Randal White',
      status: 'Unemployed',
    },
    {
      name: 'Stephanie Sanders',
      status: 'Employed',
    },
    {
      name: 'Steve Brown',
      status: 'Employed',
    },
    {
      name: 'Joyce Whitten',
      status: 'Employed',
    },
    {
      name: 'Samuel Roberts',
      status: 'Employed',
    },
    {
      name: 'Adam Moore',
      status: 'Employed',
    },
  ];
  
  
  class CreateChore extends Component {
      
      state = {
    fixedHeader: true,
    selectable: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
  }
  

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  getChoreInfo = async () => {
      try {
       const res = await axios.get(`/api/chores`)       
      }catch (error){
        console.log(error)
      }
  }
  
      
      
      
      render() {
          return (
              <div>
                     <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                Chores
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Chores </TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Chore</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

        
        </div>
      </div>
      
    );
  }
}
              
  
  
  export default CreateChore;