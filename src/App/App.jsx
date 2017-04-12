import React, { Component } from 'react';
import Header from './Header/Header';
import ProductSearch from './ProductSearch/ProductSearch';
import { paths, productAddress, addresses } from './utils/static-data.js';
import CreateCheckpoint from './CreateCheckpoint/CreateCheckpoint';
import CreateLot from './CreateLot/CreateLot';
import Mapp from './Mapp/Mapp';
import APIService from './APIService/APIService';
import axios from 'axios';
import { paths, productAddress, addresses } from './utils/static-data.js';
import { pathsControllerContractAbi, pathsControllerAddress } from './ethereum/EthereumData';
import './App.css';
import Web3 from 'web3';

const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
ETHEREUM_CLIENT.eth.contract(pathsControllerContractAbi).at(pathsControllerAddress);

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productAddress: productAddress,
      paths: [],
      displayedPaths: [],
      query: '',
      goodSearch: true,
      checkpoint: {creator: "", street_adress: "", city: "", state: "", country: "",
                    lat: "", lng: "", zipcode: ""},
      lot: {name:""},
      APIService: new APIService()
    };
    this.handlePathViewClick = this.handlePathViewClick.bind(this);
    this.viewAllPaths = this.viewAllPaths.bind(this);
    this.findProductPaths = this.findProductPaths.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.createCheckpoint = this.createCheckpoint.bind(this);
    this.updateCheckpoint = this.updateCheckpoint.bind(this);
    this.updateLot = this.updateLot.bind(this);
    this.createLot = this.createLot.bind(this);
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

  async findProductPaths() {
    const response = await this.state.APIService.getLocations(addresses[this.state.query])
    this.setState({
      query: '',
      displayedPaths: [],
      goodSearch: paths[this.state.query],
      paths: [response.data] || []
    });
  }

  async createLot(lot) {
    await this.state.APIService.createLot(this.state.lot)
  }

  async createCheckpoint() {
    await this.state.APIService.createCheckpoint(this.state.checkpoint)
  }

  updateQuery(event) {
    this.setState({
      query: event.target.value
    });
  }

  updateCheckpoint(event, attribute) {
    var checkpoint = this.state.checkpoint;
    checkpoint[attribute] = event.target.value
    this.setState({
      checkpoint,
    });
  }

  updateLot(vent) {
    this.setState({
      lot: event.target.value,
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
          <Mapp paths={this.state.displayedPaths} />
          <CreateCheckpoint
            createCheckpoint={this.createCheckpoint}
            updateCheckpoint={this.updateCheckpoint}
            checkpoint={this.state.checkpoint}
          />
          <CreateLot
            createLot={this.createLot}
            updateLot={this.updateLot}
            lot={this.lot}
          />
        </main>
      </div>
    );
  }
}

