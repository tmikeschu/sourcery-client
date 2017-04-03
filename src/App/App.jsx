import React, { Component } from 'react';
import Header from './Header/Header';
import ProductSearch from './ProductSearch/ProductSearch';
import Map from './Map/Map';
// import axios from 'axios';
import { paths, productAddress } from './utils/static-data.js';

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


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productAddress: productAddress,
      paths: [],
      displayedPaths: [],
      query: '',
      goodSearch: true,
    };
    this.handlePathViewClick = this.handlePathViewClick.bind(this);
    this.viewAllPaths = this.viewAllPaths.bind(this);
    this.findProductPaths = this.findProductPaths.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  handlePathViewClick(path) {
    this.setState({
      displayedPaths: [path]
    });
  }

  viewAllPaths() {
    this.setState({
      displayedPaths: this.state.paths
    });
  }

  findProductPaths() {
    this.setState({
      paths: paths[this.state.query] || [],
      query: '',
      displayedPaths: [],
      goodSearch: paths[this.state.query]
    }); 
  }

  updateQuery(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <ProductSearch 
            paths={this.state.paths} 
            handlePathViewClick={this.handlePathViewClick}
            viewAllPaths={this.viewAllPaths}
            findProductPaths={this.findProductPaths}
            query={this.state.query}
            updateQuery={this.updateQuery}
            goodSearch={this.state.goodSearch}
          />
          <Map paths={this.state.displayedPaths} />
        </main>
      </div>
    );
  }
}

