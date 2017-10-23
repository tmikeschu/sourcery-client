import React, { Component } from 'react';
import '../../App.css';

export default class ProductSearchItem extends Component {
  render() {
    return(
      <li id={this.props.id}> 
        <h4 tabIndex="0">Created by: {this.props.path[0].creator}</h4>
        <button onClick={() => this.props.handlePathViewClick(this.props.path)}>view</button>
      </li> 
    );
  }
}
