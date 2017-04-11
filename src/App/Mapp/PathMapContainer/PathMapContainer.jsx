import React, { Component } from 'react';

import PathMap from './PathMap/PathMap';

export default class PathMapContainer extends Component {
  render() {
    const fullHeightAndWidth = { width: '100%', height: '100vh' };
    const mapCenter = {
      lat: 14.2499821,
      lng: 1.6302113
    };
    const mapZoom = 2;

    return (
      <div style={fullHeightAndWidth}>
        <PathMap
          zoom={mapZoom}
          center={mapCenter}
          paths={this.props.paths}
        />
      </div>
    )
  }
}
