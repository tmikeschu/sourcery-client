import React, { Component } from 'react';
import ProductSearchItem from './ProductSearchItem/ProductSearchItem';
import '../App.css';

export default class ProductSearch extends Component {
  checkEnter(event) {
    if (event.key !== 'Enter') { return; }
    this.props.findProductPaths();
  }

  render() {
    const searchItems = this.props.paths.map((path, i) => 
      <ProductSearchItem 
        path={path}
        key={i}
        id={i}
        handlePathViewClick={this.props.handlePathViewClick}
      />
    )
    return(
      <section className="product-search"> 
        <h3>Product Search</h3>
        <input type="text" 
          value={this.props.query}
          placeholder="enter product id" 
          onChange={event => this.props.updateQuery(event)}
          onKeyPress={event => this.checkEnter(event)}
        />
        <input type="submit" 
          value="Get Pathways" 
          onClick={() => this.props.findProductPaths()}
        />
        <ul>{searchItems}</ul>
        <button onClick={() => this.props.viewAllPaths()} 
          style={{display: this.props.paths.length !== 0 ? '' : 'none'}}
        >
          View All
        </button>
        <p style={{display: this.props.goodSearch ? 'none' : ''}}>
          Sorry, no results.
        </p>
      </section> 
    );
  }
}
