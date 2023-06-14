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

import { baseRecipes } from './utils/constants';

// import EditModeSwitch from './components/EditModeSwitch';

import { capitalizeFirstLetter } from './utils/utilFunctions';

const Dashboard = ({ setPage }) => {

  useEffect(() => {

  // eslint-disable-next-line
  }, []); // react-hooks/exhaustive-deps

  return (
    <div>
      HOME
    </div>
  )
}

export default Dashboard;