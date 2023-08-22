import React, { useEffect, useRef, useState } from 'react';

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

const MapWrapper = ({ placeName = 'Test Name' }) => {


  useEffect(() => {

  },[])

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={13}
      center={defaultCenter}
      // center={currentPosition}
    >
      {locations.map((item) => (
        <Marker key={item.id} position={item.location} onClick={() => onSelect(item)}>
          {/* <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >

          </InfoWindow> */}
        </Marker>
      ))}
    </GoogleMap>
  )
}

export default React.memo(MapWrapper)
