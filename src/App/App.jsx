import React, { Component } from 'react';
import Header from './Header/Header';
import ProductSearch from './ProductSearch/ProductSearch';
import CreateCheckpoint from './CreateCheckpoint/CreateCheckpoint';
import CreateLot from './CreateLot/CreateLot';
import Mapp from './Mapp/Mapp';
import { service } from './APIService/APIService';
import { paths, productAddress, addresses } from './utils/static-data.js';
import { pathsControllerContractAbi, pathsControllerAddress } from './ethereum/EthereumData';
import './App.css';
import Web3 from 'web3';

const ETHEREUM_CLIENT = new Web3(
  new Web3.providers.HttpProvider("http://localhost:8545")
);

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productAddress: productAddress,
      paths: [],
      displayedPaths: [],
      query: '',
      goodSearch: true,
      checkpoint: {
        creator: "",
        street_adress: "",
        city: "",
        state: "",
        country: "",
        lat: "",
        lng: "",
        zipcode: ""
      },
      lot: { name: "" },
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

  APIService() {
    return service;
  }

  ethereumClient() {
    return ETHEREUM_CLIENT;
  }

  pathsController() {
    return this.ethereumClient()
      .eth
      .contract(pathsControllerContractAbi)
      .at(pathsControllerAddress);
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
    const response = await this.APIService().getCheckpoints(addresses[this.state.query])
    this.setState({
      query: '',
      displayedPaths: [],
      goodSearch: paths[this.state.query],
      paths: [response.data] || []
    });
  }

  async createLot(lot) {
    await this.APIService().createLot(this.state.lot);
  }

  async createCheckpoint() {
    await this.APIService().createCheckpoint(this.state.checkpoint);
  }

  updateQuery(event) {
    this.setState({
      query: event.target.value
    });
  }

  updateCheckpoint(event, attribute) {
    const checkpoint = this.state.checkpoint;
    checkpoint[attribute] = event.target.value;
    this.setState({
      checkpoint
    });
  }

  updateLot(event) {
    const lot = this.state.lot;
    lot["name"] = event.target.value;
    this.setState({
      lot
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

