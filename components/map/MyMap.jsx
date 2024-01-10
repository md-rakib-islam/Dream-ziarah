import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';
import React from 'react';

class MyMap extends React.Component {
  render() {
    const locations = [
      { lat: 37.7749, lng: -122.4194 },
      { lat: 37.75, lng: -122.43 },
      // Add more locations as needed
    ];

    const markers = locations.map((location, index) => (
      <Marker key={index} position={location} />
    ));

    return (
      <Map google={this.props.google} initialCenter={locations[0]} zoom={10}>
        {markers}
        <Polyline
          path={locations}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      </Map>
    );
  }
}



export default GoogleApiWrapper({
    apiKey: "AIzaSyC0TXPj6mGQhHldhYkkhI8x960kMrowxgg"
  })(MyMap)

