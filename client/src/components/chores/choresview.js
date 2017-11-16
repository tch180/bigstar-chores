import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components'




const ChildContainer = styled.div`
background: grey;
`

class choresview extends Component {

    state = {
        chores: [],
        redirectToHome: false,
    }


    async componentWillMount() {
        try {
            const { parentid }= this.props.match.params
            console.log(parentid)
            const res = await axios.get(`/api/parents/${parentid}/chores`) 
        console.log(res)
            this.setState({ chores: res.data})
          }catch (error){
    console.log(error)
        }
    }



    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={'/parents'}/>}
        return (
            <div> 
<AppBar title="BigStar Chores"
iconClassNameRight="muidocs-icon-navigation-expand-more"/>         
<div>
    {this.state.chores.map((chores, index)=>{
        return ( 
            

            <ChildContainer key={index}  >
           <Card >
               
           <CardHeader
           
             title={chores.name}
             subtitle={chores.points}
             actAsExpander={true}
             showExpandableButton={true}/>
             
           <CardActions>
               <Link to='/chores'>   
             <FlatButton label="Chores" />
             </Link>
             <FlatButton label="completed" />
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

export default choresview;