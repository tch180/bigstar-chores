import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components'
import axios from 'axios'


const Childrenstyle = styled.div`
background: green;
`
const ChildContainer = styled.div`
background: grey;
`



class Child extends Component {
    state = {
      children:[]
        
    }
    
async componentWillMount() {
    try {
        const res = await axios.get(`/api/children`)
        this.setState({children: res.data})
        console.log(this.state.children)
        
    }catch (error){
        console.log(error)
    }
}






    render() {
        return (
            <div>
<AppBar title="Children"
iconClassNameRight="muidocs-icon-navigation-expand-more"/>         
<div>
    {this.state.children.map((child, index)=>{
        return (
            <ChildContainer key={index}>
            <h2>Child Name </h2>
            </ChildContainer>
        )
    })}



</div>
   </div>
        );
    }
}

export default Child;