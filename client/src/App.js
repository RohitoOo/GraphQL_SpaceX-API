import React, { Component } from 'react'
import './App.css'
import ApolloClient  from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Launches from './components/launches'

const spaceX = require('./spacex.png')

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <div>
           <img style={{width:"100%", height:"300px"}} alt="spaceX" src={spaceX}/>
          
           <Launches/>
        </div>
      </ApolloProvider>
     
    );
  }
}

export default App;
