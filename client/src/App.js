import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
///////////////
//Matieral ui 
///////////////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

///////////////
// Componets 
///////////////
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import parents from './components/parents/parents'
import newparent from './components/parents/newparent'
import Child from './components/children/child'
import newchild from './components/children/newchild'
import choresview from './components/chores/choresview'
import Chores from './components/chores/chores'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      
      <Router>

      <div>
      {/* <Navbar/> */}
        <Switch>


          <Route exact path='/' component={Homepage}/>
          <Route exact path= '/parents' component={parents}/>
          <Route exact path='/parents/newparent' component={newparent}/>
          <Route exact path='/parents/newchild'component={newchild}/>          
          <Route exact path='/parents/:parentid/chores' component={choresview}/>
          <Route exact path='/parents/:parentid/assign' component={Chores}/>
          <Route exact path='/chores' component={Chores}/>
          <Route exact path='/child' component={Child}/>

        </Switch>

      </div>

      </Router>
      </MuiThemeProvider>

     

    );
  }
}

export default App;
