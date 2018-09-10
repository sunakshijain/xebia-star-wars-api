import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login'
import Planet from './containers/Planet'
import PlanetDetailsContainer from './containers/PlanetDetails'
import { Route } from 'react-router-dom'
import PrivateRoute from './util/auth'
class App extends Component {
  render() {
    return (
      <div>

        <Route path="/login" component={Login} />

        <PrivateRoute exact path="/" store={this.props.store} component={Planet} />
        <PrivateRoute path='/planets/:id' store={this.props.store} component={PlanetDetailsContainer} />
      </div>
    );
  }
}

export default App;
