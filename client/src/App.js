import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
///////////////
//Matieral ui 
///////////////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

///////////////
// Componets 
///////////////
import Chores from './components/chores/chores'
import Homepage from './components/Homepage'
import Parents from './components/parents/Parents'
import Child from './components/children/child'
import newParent from './components/parents/newParent'
import choresview from './components/chores/choresview'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      
      <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path= '/parents' component={Parents}/>
          <Route exact path='/parents/newParent' component={newParent}/>
          <Route exact path='/parents/:parentid/chores' component={choresview}/>
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
