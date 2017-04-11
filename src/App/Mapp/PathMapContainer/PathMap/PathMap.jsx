import React, { Component } from 'react';
import { GoogleMap, Polyline, Marker } from 'react-google-maps';
import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader";


export default class PathMap extends Component {
  render() {
    const mapContainer = <div style={{ height: "100%", width: "100%" }} />;

    let markers = [];

    const pathLines = this.props.paths.map((path, i) => {
      const coordinates = path.map((checkpoint, j) => {
        const position = {
          lat: parseFloat(checkpoint.lat),
          lng: parseFloat(checkpoint.lng)
        };

        markers.push(
          <Marker key={j} position={position} />
        );

        return position;
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
      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ 
          key: "AIzaSyBqQ33VzbShGEg8bqEqXUv56Ru-WYg-wQA", 
          libraries: "geometry,drawing,visualization" 
        }}
        loadingElement={
          <div>Loading</div>
        }
        containerElement={ mapContainer }
        googleMapElement={
          <GoogleMap
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
            options={{
              streetViewControl: true,
              myTypeControl: false,
            }}>
            { pathLines }
            { markers }
          </GoogleMap>
      } />
    );
  }
}
