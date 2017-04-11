import React, { Component } from 'react';
import Header from './Header/Header';
import ProductSearch from './ProductSearch/ProductSearch';
import Mapp from './Mapp/Mapp';
import axios from 'axios';
import { paths, productAddress, addresses } from './utils/static-data.js';

import './App.css';

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
      })
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
        </main>
      </div>
    );
  }
}

