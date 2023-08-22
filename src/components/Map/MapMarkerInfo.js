import React, { useEffect, useState } from 'react';

import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const mapMarkerInfoStyle = {
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

const MapMarkerInfo = ({ text }) => {

  return (
    <div
      style={mapMarkerInfoStyle}
      // onClick={()=>this.setPinAsCenter(facility)}
      // onChildMouseEnter={this.onChildMouseEnter}
      // onChildMouseLeave={this.onChildMouseLeave} 
      // handlePinClick={this.handleOnClick} 
      // facility={facility}
      // hover={this.state.hover}
    >
      {text}
    </div>
  );
}

export default MapMarkerInfo;