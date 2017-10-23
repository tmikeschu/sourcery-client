import React, { Component } from 'react';
import Header from './Header/Header';
import ProductSearch from './ProductSearch/ProductSearch';
import CreateCheckpoint from './CreateCheckpoint/CreateCheckpoint';
import CreateLot from './CreateLot/CreateLot';
import Mapp from './Mapp/Mapp';
import { service } from './APIService/APIService';
import { paths, productAddress } from './utils/static-data.js';
import { pathsControllerContractAbi, pathsControllerAddress } from './ethereum/EthereumData';
import './App.css';
import Web3 from 'web3';

const ETHEREUM_CLIENT = new Web3(
  new Web3.providers.HttpProvider("https://37d3d7e0.ngrok.io")
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
        street_address: "",
        city: "",
        state: "",
        country: "",
        lat: "",
        lng: "",
        zipcode: "",
        lotId: ""
      },
      lot: { product_id: ""},
      products: [],
      newLot: {id: 0},
      newCheckpoint: {id: 0},
    };
    this.handlePathViewClick = this.handlePathViewClick.bind(this);
    this.viewAllPaths = this.viewAllPaths.bind(this);
    this.findProductPaths = this.findProductPaths.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.createCheckpoint = this.createCheckpoint.bind(this);
    this.updateCheckpoint = this.updateCheckpoint.bind(this);
    this.updateLot = this.updateLot.bind(this);
    this.createLot = this.createLot.bind(this);
    this.getPathFrom = this.getPathFrom.bind(this);
  }

  async componentDidMount() {
    const response = await this.APIService().getProducts();
    const products = await response && response.data
    this.setState({
      products: products || []
    });
    ETHEREUM_CLIENT.eth.defaultAccount = ETHEREUM_CLIENT.eth.accounts[0];
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

  async findProductPaths(checkpointAddresses) {
    const response = await this.APIService().getCheckpoints(checkpointAddresses)
    this.setState({
      query: '',
      displayedPaths: [],
      goodSearch: paths[this.state.query],
      paths: [response.data] || []
    });
  }

  getPathFrom() {
    const lotId = parseInt(this.state.query, 10)
    const checkpoints =  this.pathsController().getPath(lotId)
    console.log('from chain', checkpoints);
    this.findProductPaths(checkpoints)
  }

  async createLot(event) {
    event.preventDefault();
    const lot = await this.APIService().createLot(this.state.lot);
    console.log(lot.data);
    // const tx = await this.pathsController().createLot(parseInt(lot.data.id, 10), {gas: 4000000})
    this.setState({
      newLot: lot.data
    });
  }

  async createCheckpoint(event) {
    event.preventDefault();
    const lotId = this.state.checkpoint.lotId
    const response = await this.APIService().createCheckpoint(this.state.checkpoint)
    const tx = await this.pathsController().createOrUpdatePath(parseInt(lotId, 10), response.data.ethereum_address, {gas: 4000000})
    this.setState({
      newCheckpoint: response.data
    })
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

  updateLot(event, attribute) {
    const lot = this.state.lot;
    lot[attribute] = event.target.value;
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
            getPathFrom={this.getPathFrom}
            query={this.state.query}
            updateQuery={this.updateQuery}
            goodSearch={this.state.goodSearch}
          />
          <Mapp paths={this.state.displayedPaths} />
          <section className="create-forms" >
            <CreateCheckpoint
              createCheckpoint={this.createCheckpoint}
              updateCheckpoint={this.updateCheckpoint}
              checkpoint={this.state.checkpoint}
              newCheckpoint={this.state.newCheckpoint}
            />
            <CreateLot
              createLot={this.createLot}
              updateLot={this.updateLot}
              products={this.state.products}
              lot={this.state.lot}
              newLot={this.state.newLot}
            />
          </section>
        </main>
      </div>
    );
  }
}
