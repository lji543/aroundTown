import React, { useEffect, useState } from 'react';

import {
  Remove as RemoveIcon,
} from '@mui/icons-material';
import {
  Button,
  Container,
  Divider,
  List as MUIList,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import { capitalizeFirstLetter } from '../../utils/utilFunctions';

// const RecipePage = ({recipe}) => {
const List = ({ listArray, subHeader, dividers, stepNumbers }) => { // TODO: using example one for now
  // console.log('listArray ',listArray)
  useEffect(() => {

  // eslint-disable-next-line
  }, []); // react-hooks/exhaustive-deps

  return (
    <MUIList>
      {subHeader && <div className='list-subHeader'>{`${capitalizeFirstLetter(subHeader)}:`}</div>}
      {listArray.map((listItem, i) => 
        { console.log('listItem ',i, dividers, i + 1 === listArray.length)
          return (<div>
          <ListItem key={i} disablePadding>
            <div className='list-item-indicator'>
              {stepNumbers ? <div className='list-item-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
            </div>
            <ListItemText primary={`${listItem[0]}: ${listItem[1]} ${listItem[2]}`} />
          </ListItem>
          {(dividers && (i + 1) !== listArray.length) && <Divider className='divider' />}
        </div>)}
      )}
    </MUIList>

  );
}

export default List;