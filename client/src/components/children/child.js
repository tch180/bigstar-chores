import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components'
import axios from 'axios';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom'

const Childrenstyle = styled.div`
background: green;
`
const ChildContainer = styled.div`
background: grey;
`



class Child extends Component {
    state = {
      children:[],
      chores:[],
        
    }
    
async componentWillMount() {
    try{
        const res = await axios.get(`/api/children`)
        this.setState({children: res.data})
        console.log(res.data)
    }catch (error){
        console.log(error)
    }
}
    render() {
        return (
        <div> 
<AppBar title="BigStar Chores"
iconClassNameRight="muidocs-icon-navigation-expand-more"/>         
<div>
    {this.state.children.map((relationship, index)=>{

        return (

            <ChildContainer>
           <Card key={index}>
           <CardHeader
           
             title={relationship.name}
             subtitle={relationship.parent}
             actAsExpander={true}
             showExpandableButton={true}/>
             
           <CardActions>
               <Link to='/chores'>   
             <FlatButton label="Chores" />
             </Link>
             <FlatButton label="rewards" />
           </CardActions>
           <CardText expandable={true}>      
           </CardText>
         </Card>
            </ChildContainer>
        )
    })}
    </div>
   </div>
   
        );
    }
}

export default Child;