import React, { Component } from 'react';
import Header from './Header/Header';
import ProductSearch from './ProductSearch/ProductSearch';
import { paths, productAddress, addresses } from './utils/static-data.js';
import CreateCheckpoint from './CreateCheckpoint/CreateCheckpoint';
import CreateLot from './CreateLot/CreateLot';
import Mapp from './Mapp/Mapp';
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
      service: axios.create({
        baseURL: process.env.NODE_ENV === 'production' 
        ? "https://sourcery-api.herokuapp.com" 
        : "http://localhost:9000" 
      }),
      checkpoint: {street_adress: "", longitude: "", latitude: "",
                  creator: "", city: "", state: "", country: ""},
      lot: {name:""}
    };
    this.handlePathViewClick = this.handlePathViewClick.bind(this);
    this.viewAllPaths = this.viewAllPaths.bind(this);
    this.findProductPaths = this.findProductPaths.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.updateCheckpoint = this.updateCheckpoint.bind(this);
    this.createCheckpoint = this.createCheckpoint.bind(this);
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

  findProductPaths() {
    this.getLocations(addresses[this.state.query]);
    this.setState({
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

  getLocations(addresses) {
    this.state.service.get('/api/v1/get_locations_for_good_path', {
      params: {
        locations: addresses
      }
      })
      .then(response => {
        this.setState({
          paths: [response.data] || []
        });
      })
      .catch(error => console.log(error));
    }

  createCheckpoint() {
    axios.post("https://sourcery-api.herokuapp.com/api/v1/locations", this.state.checkpoint)
    .then((response) => {
      // success message here
      console.log("SUCCESS")
      console.log(response)
    })
    .catch((response) => {
      console.log("Fail")
      console.log(response)
    });
  }

  createLot(event) {
    axios.post("https://sourcery-api.herokuapp.com/api/v1/lots", this.state.lot)
    .then((response) => {
      // success message here
      console.log("SUCCESS")
      console.log(response)
    })
    .catch((response) => {
      console.log("Fail")
      console.log(response)
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

