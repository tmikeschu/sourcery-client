import React, { Component } from 'react';

import PathMap from './PathMap/PathMap';

export default class PathMapContainer extends Component {
  render() {
    const fullHeightAndWidth = { width: '100%', height: '100vh' };
    const mapCenter = {
      lat: -1.6246706849414423,
      lng: -85.56376812500002
    };
    const mapZoom = 3;

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
