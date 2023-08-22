import React, { useEffect, useState } from 'react';

import GoogleMapReact from 'google-map-react';
import { Loader } from "@googlemaps/js-api-loader"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import MapMarker from './MapMarker';

import { googleMapsAPIKey } from '../../utils/constants';
import { locations } from '../../utils/locations';

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

const Map = ({ location, zoomLevel }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsAPIKey
  })
  const position = {
    lat: 39.742043,
    lng: -104.991531
  }
  
  if (!isLoaded) {
    return <div></div>;
  };

  return (
    <div>
      <GoogleMap
        center={position}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        zoom={11}
      >
        
      </GoogleMap>
    </div>
  )
}

// export default GoogleApiWrapper({
//   apiKey: (googleMapAPIKey)
//  })(Map);

export default Map;



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







// const Map = ({ location, zoomLevel }) => {
//   const defaultProps = {
//     center: {
//       lat: 39.742043,
//       lng: -104.991531
//     },
//     zoom: 11
//   };

//   useEffect(() => {

//   // eslint-disable-next-line
//   }, []); // react-hooks/exhaustive-deps

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: googleMapAPIKey, language: 'en' }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         yesIWantToUseGoogleMapApiInternals
//         // onChildMouseEnter={this.onChildMouseEnter}
//         // onChildMouseLeave={this.onChildMouseLeave}
//       >
//         {locations.map((loc, idx) =>
//           <MapMarker
//             key={`${idx}${loc.lat}`}
//             lat={loc.lat}
//             lng={loc.lng}
//             text={loc.text}
//           />
//         )}
//       </GoogleMapReact>
//     </div>
//   );
// }