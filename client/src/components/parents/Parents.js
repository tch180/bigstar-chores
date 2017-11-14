import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components'
import axios from 'axios'

const Parentstyle = styled.div`
background: green;
`
const ParentContainer = styled.div`
background: grey;
`


class Parents extends Component {

    state = {
        parents: []
    }
    ///////////////
    //gets the parent info 
    ///////////////
    
    
    
    async componentWillMount() {
        try{
            const res = await axios.get(`/api/parents`)
            this.setState({parents: res.data})
            console.log(this.state.parents)
        } catch (error) {
            console.log(error)
        }
    }
    // getParentInfo = async ()=> {
    //     try {
    //         const parentId = this.props.match.params.id
    //         const res = await axios.get(`/api/parents/${parentId}`)
    //         this.setState({parents: res.data})
    //         console.log(this.state.parents.name)
    //     }catch (error){
    //         console.log(error)
    //     }
    // }
    render() {
        return (
            <div>
            <AppBar title="Parents"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        
            <div>
            {this.state.parents.map((parent, index)=> {
                return (
                    <ParentContainer key={index}>
                   
                        <h3>Parent:{parent.name} </h3>
                        <h4>Children:</h4>    
                        <h5># of Chores </h5>                 
                    </ParentContainer>

                )       
            })}
          </div>
          </div>
        );
    }
}

export default Parents;