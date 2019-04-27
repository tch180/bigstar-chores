import React, { Component } from 'react';
import axios from 'axios'
import styled from "styled-components";

import Navbar from '../Navbar'


const Buttonstyle = styled.div`
div {
  

}

button {
   
    background: #3498db;
    // background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
    // background-image: -moz-linear-gradient(top, #3498db, #2980b9);
    // background-image: -ms-linear-gradient(top, #3498db, #2980b9);
    // background-image: -o-linear-gradient(top, #3498db, #2980b9);
    // background-image: linear-gradient(to bottom, #3498db, #2980b9);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Courier New;
    color: #ffffff;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    border: solid #1f628d 2px;
    text-decoration: none;
}
// button:hover {
//   background: #3cb0fd;
//   background-image: -webkit-linear-gradient(top, #3cb0fd, #b5d3e6);
//   background-image: -moz-linear-gradient(top, #3cb0fd, #b5d3e6);
//   background-image: -ms-linear-gradient(top, #3cb0fd, #b5d3e6);
//   background-image: -o-linear-gradient(top, #3cb0fd, #b5d3e6);
//   background-image: linear-gradient(to bottom, #3cb0fd, #b5d3e6);
//   text-decoration: none;
// }

`



class chorestable2 extends Component {
state = {
    chores:[]
}


async componentWillMount () {
    try{
      const res = await axios.get(`/api/chores`)
      this.setState({ chores: res.data})
      console.log("clicked")
    }catch (error) {
      console.log(error)
    }
  }

  handleClick = async () => {
      try {
          console.log("clicked")
          //onClick mark chore as complete 
          //assign point value of chores to the child for rewards. 
        //   const choreComplete = 
        
      } catch (error){
          console.log(error)
      }
  }

    render() {
        return (
            <div>
            <Navbar/>
            <div>
            {this.state.chores.map((chore, index)=>{
                return(
                    <Buttonstyle key={index}>
                    <div ><button onClick={this.handleClick}  >{chore.name} @ points:{chore.points}</button></div>
                    </Buttonstyle>

                )
                
            })}
                </div>
            
             </div>
         
        );
    }
}

export default chorestable2;