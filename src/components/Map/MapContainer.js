import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';

// import MapMarker from './MapMarker';
import Map from './Map';

import { googleMapsAPIKey } from '../../utils/constants';
import { locations } from '../../utils/locations';

const mapStyles = {
  width: '100%',
  height: '100vh'
}

const defaultCenter = {
  lat: 39.742043,
  lng: -104.991531
}

const MapContainer = ({ placeName = 'Test Name' }) => {
  // const [ currentPosition, setCurrentPosition ] = useState({});
  const [ selected, setSelected ] = useState({});

  // const success = position => {
  //   const currentPosition = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   }
  //   setCurrentPosition(currentPosition);
  // };

  const onSelect = item => {
    setSelected(item);
  }

  // const onMarkerDragEnd = (e) => {
  //   const lat = e.latLng.lat();
  //   const lng = e.latLng.lng();
  //   setCurrentPosition({ lat, lng})
  // };

  useEffect(() => {
    // console.log('locations ',locations)
    // navigator.geolocation.getCurrentPosition(success);
  }, [locations])
  // console.log('container ',locations[4].location)
  // const item = locations[4];

  return (
    <div>
      <LoadScript
        googleMapsApiKey={googleMapsAPIKey}>
        <Map />
      </LoadScript>
    </div>
  )
}

export default MapContainer;


          {/* {locations ? (locations.map((item) => 
            <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
            // <MapMarker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
          )) : null } */}
          {/* {
            selected.location ?
            (
              <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
              <p>{selected.name}</p>
              </InfoWindow>
            ) : null
         } */}
         {/* {
            currentPosition.lat ? 
              <Marker
                position={currentPosition}
                onDragEnd={(e) => onMarkerDragEnd(e)}
                draggable={true}
              /> : null
          } */}