import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';



class newParent extends Component {
    state = {
        parent: {
            name: '',
        },
        redirectToHome: false
    }

    handleChange = async (event) => {
       const updateParent = {
           ...this.state.parent
       }
       updateParent[event.target.name] = event.target.value
       this.setState({parent: updateParent})
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`/api/parents/`, { parents: this.state.parent})
        this.setState({redirectToHome: true})
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={'/'}/>
        }
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            
                <input
                placeholder='Parent Name'
                onChange={this.handleChange}
                name="name"
                type="text"
                required
                value={this.state.parent.name} />
                
                <button>Create Parent</button>
                
                </form>

                   </div>

            
        );
    }
}

export default newParent;