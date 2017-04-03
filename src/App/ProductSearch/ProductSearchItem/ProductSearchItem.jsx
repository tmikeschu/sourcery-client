import React, { Component } from 'react';
import '../../App.css';

export default class ProductSearchItem extends Component {
  render() {
    return(
      <li> 
        <h4>Created by: {this.props.path[this.props.path.length - 1].creator}</h4>
        <button onClick={() => this.props.handlePathViewClick(this.props.path)}>view</button>
      </li> 
    );
  }
}
