import React, { useEffect, useState } from 'react';
import { Marker } from '@react-google-maps/api';

import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const mapMarkerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  // position: 'absolute',
  // width: K_WIDTH,
  // height: K_HEIGHT,
  // left: -K_WIDTH / 2,
  // top: -K_HEIGHT / 2,

  // border: '2px solid #f44336',
  // borderRadius: K_HEIGHT,
  // backgroundColor: 'white',
  // textAlign: 'center',
  // color: '#3f51b5',
  // fontSize: 16,
  // fontWeight: 'bold',
  // padding: 4
};

const MapMarker = ({ text, type = 'selected', ...restProps}) => {
  console.log(restProps)
  return <Marker props={restProps} />
  // return (
  //   <div>
  //     {type === 'current' && <PersonPinIcon props={restProps} />}
  //     {type === 'favorite' && <StarBorderIcon props={restProps} />}
  //     {type === 'selected' && <Marker position={restProps.position} />}
  //   </div>
  // );
}

export default MapMarker;