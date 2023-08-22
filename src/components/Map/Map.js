import React, { useEffect, useRef, useState } from 'react';

import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';

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

const mapStyles = {
  width: '100%',
  height: '100vh'
}

const defaultCenter = {
  lat: 39.742043,
  lng: -104.991531
}

const Map = ({ placeName = 'Test Name' }) => {

  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
    setSelected(item);
  }

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={13}
      center={defaultCenter}
      // center={currentPosition}
    >
      {locations.map((item) => (
        <Marker
          key={item.id}
          position={item.location}
          onClick={() => onSelect(item)}
        >
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

export default React.memo(Map)
