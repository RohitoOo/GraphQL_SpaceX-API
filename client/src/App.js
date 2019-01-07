import React, { Component } from 'react'
import './App.css'
import ApolloClient  from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Launches from './components/Launches'
import Launch from './components/Launch'

import {BrowserRouter, Router, Route } from 'react-router-dom'
const spaceX = require('./spacex.png')

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <img style={{width:"100%", height:"300px"}} alt="spaceX" src={spaceX}/>
            <Route exact path='/' component={Launches}/>
            <Route exact path='/launch/:flight_number' component={Launch}/>
          </div>
        </BrowserRouter>
        
      </ApolloProvider>
     
    );
  }
}

export default App;
