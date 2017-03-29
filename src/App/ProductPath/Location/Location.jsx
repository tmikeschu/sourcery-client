import React, { Component } from 'react';
import '../../App.css';

export default class Location extends Component {
  render() {
    return (
      <ul className='location'>
        <li>Name: {this.props.name}</li>
        <li>Latitude: {this.props.lat}</li>
        <li>Longitude: {this.props.lng}</li>
        <li>Type: {this.props.type}</li>
      </ul>
    );
  }
}
