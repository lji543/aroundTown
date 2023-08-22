import React, { useEffect, useState } from 'react';

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

// import Map from './components/Map/_index';
import MapContainer from './components/Map/MapContainer';

import useMap from './state/useMap';

import { baseRecipes } from './utils/constants';

// import EditModeSwitch from './components/EditModeSwitch';

import { capitalizeFirstLetter } from './utils/utilFunctions';

const Dashboard = ({ setPage }) => {
  return (
    <div>
      <MapContainer />
    </div>
  )
}

export default Dashboard;