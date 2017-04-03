import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Polyline } from 'react-google-maps';

export default class PathMap extends Component {
  render() {
    const mapContainer = <div style={{ height: "100%", width: "100%" }} />;

    const pathMarkers = this.props.paths.map((path, i) => {
      const coordinates = path.map(checkpoint => {
        return {
          lat: parseFloat(checkpoint.lat),
          lng: parseFloat(checkpoint.lng)
        }
      })

      return(
        <Polyline 
          path={coordinates}
          options={{strokeColor: i % 2 === 0 ? '#a00' : '#00a'}}
          key={i}
        />
      );
    })

    return(
      <GoogleMapLoader
        containerElement={ mapContainer }
        googleMapElement={
          <GoogleMap
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
            options={{
              streetViewControl: true,
              myTypeControl: false,
            }}>
            { pathMarkers }
          </GoogleMap>
      } />
    );
  }
}
