import React, { Component } from 'react';
import Header from './Header/Header';
import ProductPath from './ProductPath/ProductPath';

import './App.css';
//import Web3 from 'web3';
//import { ABI } from './ABI';

//const ETHERIUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// JSON.stringify(Contract.deployed().abi) in truffle console
// People.deployed.address
//const peopleContractAbi = ABI;

//const peopleContractAddress = "0xD79B4C6791784184e2755B2fC1659eaaB0f80456";
//const piggyBank = ETHERIUM_CLIENT.eth.contract(peopleContractAbi).at(peopleContractAddress)
// _.getPeople()

// const locationAddresses = ['1', '2', '3'];

const coffeeLocations = [
  { lat: 79, lng: 10, name: 'Coffee Grower', type: 'origin' },
  { lat: 7, lng: 19, name: 'Delivery Service', type: 'transport' },
  { lat: 8, lng: 52, name: 'Cafe', type: 'restaurant' } 
];

const grapesLocations = [
  { lat: 79, lng: 10, name: 'Vinyard', type: 'origin' },
  { lat: 8, lng: 52, name: 'Winery', type: 'business' } 
];

const goods = [ 
  { name: 'coffee', locations: coffeeLocations },
  { name: 'grapes', locations: grapesLocations },
];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goods: goods
    }
  }

  render() {
    const productPaths = this.state.goods.map((good, i) => {
      return (
        <ProductPath 
          good={good} 
          key={i} />
      );
    });

    return (
      <div className="App">
        <Header />
        { productPaths }
      </div>
    );
  }
}

