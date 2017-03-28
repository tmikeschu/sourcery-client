import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

const ETHERIUM_CLIENT = new Web3(new Web3.provider.HttpProvider("http://localhost:NUMBER"));
// JSON.stringify(Contract.deployed().abi) in truffle console
// People.deployed.address
// const peopleContractAbi = output of first comment minus quotes
// const peopleContractAddress = output of second comment
// ETHERIUM_CLIENT.eth.contract(peopleContractAbi).at(peopleContractAddress)
// _.getPeople()

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
