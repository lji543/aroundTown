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
  const { map } = useMap();
  const googleMapRef = useRef();
  let googleMap;
  // const location = locations[4];

  const getMapBounds = (map, maps, locations) => {
    const bounds = new maps.LatLngBounds();
  
    locations.forEach((location) => {
      bounds.extend(new maps.LatLng(
        // location.geometry.location.lat,
        // location.geometry.location.lng,
        location.lat,
        location.lng
      ));
    });
    return bounds;
  };
  
  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  const apiIsLoaded = (map, maps, locations) => {
    // Get bounds by our locations
    const bounds = getMapBounds(map, maps, locations);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

  const getLatLng = () => {
    let lat, lng, placeId;
    new window.google.maps.Geocoder().geocode({ 'address': `${placeName}` }, function (results, status) {
      if (status === window.google.maps.GeocoderStatus.OK) {
        placeId = results[0].place_id;
        createGoogleMap(results[0].geometry.location);
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
        new window.google.maps.Marker({
          position: { lat, lng },
          map: googleMap,
          animation: window.google.maps.Animation.DROP,
          title: `${placeName}`
        });
        // setGoogleMapInfo({ ...GoogleMapInfo, lat, lng, placeId, isLoading: false, googleMap });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
          lat: coordinates.lat(),
          lng: coordinates.lng(),
      },
      disableDefaultUI: true,
    })
  };

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src=`https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      getLatLng();
    });
  },[])

  return (
    <div>
      <div
        id="google-map"
        ref={googleMapRef}
        style={{ width: '400px', height: '300px' }}
      />
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsAPIKey }}
          defaultCenter={{lat: 39.742043, lng: -104.991531}}
          defaultZoom={11}
          zoom={11}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, locations)}
        >
          {locations.map((location) => (
            <MapMarker
              key={location.id}
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default React.memo(MapWrapper)
