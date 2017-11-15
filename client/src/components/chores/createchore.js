import {Table,TableBody, TableFooter,TableHeader, TableHeaderColumn, TableRow,TableRowColumn} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import React, { Component } from "react";
import axios from "axios";
import ChoreTable from './choretable'





const styles = {
  propContainer: {
    width: 200,
    overflow: "hidden",
    margin: "20px auto 0"
  },
  propToggleHeader: {
    margin: "20px auto 10px"
  }
};



class CreateChore extends Component {
  state = {
    chores:{
      name: "",
      points: "",
    },
    newChore:{
      name: "",
      points: "",
      parentId:"",
      childId: "",
    },

    fixedHeader: true,
    selectable: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: "300px"
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  getChoreInfo = async () => {
    try {
      const res = await axios.get(`/api/chores`);
      this.setState({ chores: res.data });
      console.log(this.state.chores);
    } catch (error) {
      console.log(error);
    }
  };

// getChildInfo = async ()=> {
//   const  childId = 1
//   const childId= axios.get(`/api/child/${child_id}`)
  
// }

handleSubmit = async (event) => {
  event.preventDefault()
    // await axios.post(`/api/parent/${SOMEHOW GRAB A PRATENT ID}/chores`, {chore: this.state.newChore})
    
}
handleChange = (event) => {
  const updateChores = {
      ...this.state.chores
  }
  updateChores[event.target.name] = event.target.value
  this.setState({ chores: updateChores })
}

  componentWillMount() {
    // const parentId = params[parentId]
    this.getChoreInfo();
  }

  render() {

    return (
      
      <div>
        <div>
          <ChoreTable chores={this.props.chores}/>
          <form onSubmit={this.handleSubmit}>
                        <h2>New Chore</h2>
                        <input
                            placeholder='Chore Name'
                            onChange={this.handleChange}
                            name="name"
                            type="text"
                            required
                            value={this.props.chores.name} />
                        <input
                            placeholder='Points'
                            onChange={this.handleChange}
                            name="points"
                            type="text"
                            required
                            value={this.props.chores.points} />
                        <div>
                            <button>Create Chore</button>
                        </div>
          </form>
      </div>
      </div>
    );
  }
}

export default CreateChore;
