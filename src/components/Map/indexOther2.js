import React, { useEffect, useState } from 'react';

import GoogleMapReact from 'google-map-react';
import { Loader } from "@googlemaps/js-api-loader"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import MapMarker from './MapMarker';

import { googleMapsAPIKey } from '../../utils/constants';
import { locations } from '../../utils/locations';

import useMap from '../../state/useMap';

import {
  Remove as RemoveIcon, TagSharp,
} from '@mui/icons-material';
import {
  Button,
  Chip,
  Container,
  Divider,
  List as MUIList,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from '@mui/material';



const containerStyle = {
  width: '100%',
  height: '100vh'
};

const MapWrapper = () => {
  const { map } = useMap();
  const location = locations[4];
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: googleMapsAPIKey,
  //   // language: 'en'
  // })
  // const center = {
  //   lat: 39.742043,
  //   lng: -104.991531
  // }

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])
  
  // if (!isLoaded) {
  //   return <div></div>;
  // };

  // return isLoaded ? (
  //   <GoogleMap
  //     mapContainerStyle={containerStyle}
  //     center={center}
  //     zoom={11}
  //     onLoad={onLoad}
  //     onUnmount={onUnmount}
  //   >
  //     { /* Child components, such as markers, info windows, etc. */ }
  //     <></>
  //   </GoogleMap>
  //   ) : <></>

  // return map ? (
  //   <div id="map"></div>
  // ) : <></>

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsAPIKey }}
        defaultCenter={location}
        defaultZoom={11}
      >
        <MapMarker
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  )
}

// export default GoogleApiWrapper({
//   apiKey: (googleMapAPIKey)
//  })(Map);

// export default Map;
export default React.memo(MapWrapper)


// const Map = ({ location, zoomLevel }) => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: googleMapsAPIKey,
//     // language: 'en'
//   })
//   const center = {
//     lat: 39.742043,
//     lng: -104.991531
//   }

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])
  
//   if (!isLoaded) {
//     return <div></div>;
//   };

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={11}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       { /* Child components, such as markers, info windows, etc. */ }
//       <></>
//     </GoogleMap>
//     ) : <></>
// }


// const MapWrapper = ({ location, zoomLevel }) => {
//   const loader = new Loader({
//     apiKey: "YOUR_API_KEY",
//     version: "weekly",
//     // ...additionalOptions,
//   });
//   const position = {
//     lat: 39.742043,
//     lng: -104.991531
//   }
//   let map;

//   loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary("maps");
  
//     // The map, centered at Uluru
//     map = new Map(document.getElementById("map"), {
//       zoom: 4,
//       center: position,
//       mapId: "DEMO_MAP_ID",
//     });
  
//     // The marker, positioned at Uluru
//     // const marker = new AdvancedMarkerElement({
//     //   map: map,
//     //   position: position,
//     //   title: "Uluru",
//     // });
//   });

//   return (
//     <div id="map"></div>
//   )
// }