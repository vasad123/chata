import React from "react";
import GoogleMapReact from 'google-map-react';
import { Link } from "react-router-dom";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export  function Lokace(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={505059.17}
          lng={143139.32}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
