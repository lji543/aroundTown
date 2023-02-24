import React, { useEffect, useState } from 'react';

import {
  Add as AddIcon,
  Cancel as CancelIcon,
  Edit as EditIcon,
  Remove as RemoveIcon,
  Save as SaveIcon,
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
  TextField,
} from '@mui/material';

import { capitalizeFirstLetter } from '../../utils/utilFunctions';

const EditableList = ({
  listArray,
  list,
  subHeader,
  dividers,
  stepNumbers,
  handleListItemChange,
  handleListItemUpdate,
  type,
  isAddingItem,
  setIsAddingItem,
}) => {
  // console.log('listArray ',list)

  const handleChange = (target, i) => {
    // console.log('listItem ',listItem, i)
    const { value } = target;
    handleListItemChange(value, i, type);
  }

  // const handleUpdate = () => {
  //   handleListItemUpdate(type);
  // }

  const handleOnClick = () => {
    console.log('handleOnClick ',isAddingItem)
    if (isAddingItem) {
      // handleUpdate();
      handleListItemUpdate(type);
    }
    
    setIsAddingItem(!isAddingItem);
  }

  const handleAddItem = () => {
    // console.log('handleAddItem ',isAddingItem)
    handleChange('', listArray.length, type)
  }

  return (
    <MUIList>
      <div className='row'>
        <div className='list-header'>{`${capitalizeFirstLetter(type)}:`}</div>
        <Button
          className='button top-margin-12'
          startIcon={isAddingItem ? <SaveIcon /> : <EditIcon />}
          onClick={() => handleOnClick()}
        >
          {isAddingItem ? 'Save' : 'Edit'}
        </Button>
        {isAddingItem && 
          <div>
            <Button
              className='button top-margin-12'
              startIcon={<CancelIcon />}
              onClick={() => handleAddItem()}
            >
              Add Item
            </Button>
            <Button
              className='button top-margin-12'
              startIcon={<CancelIcon />}
              onClick={() => setIsAddingItem(!isAddingItem)}
            >
              Cancel
            </Button>
          </div>
        }
      </div>
      {Array.isArray(list) ? (
        <div>
          {list.map((listItem, i) => {
            if (isAddingItem) {
              console.log('listItem ', listItem)
              return (
                <div key={i}>
                  <TextField
                    size="small"
                    fullWidth
                    variant="standard"
                    multiline
                    id={`${i}`}
                    value={listItem}
                    onChange={(e) => handleChange(e.target, i)}
                  />
                  <TextField
                    size="small"
                    fullWidth
                    variant="standard"
                    multiline
                    id={`${i}`}
                    value={listItem}
                    onChange={(e) => handleChange(e.target, i)}
                  />
                  <TextField
                    size="small"
                    fullWidth
                    variant="standard"
                    multiline
                    id={`${i}`}
                    value={listItem}
                    onChange={(e) => handleChange(e.target, i)}
                  />
                </div>
              );
            } else {
              return (
                <ListItem key={i} className='row'>
                  <div className='list-item-indicator'>
                    {stepNumbers ? <div className='list-item-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
                  </div>
                  <ListItemText primary={listItem}/>
                </ListItem>
              );
            }
          })}
        </div>
      ) : (
        Object.keys(list).map((section) => {
          console.log('section ',section)
          return (
            <div key={section}>
              <div className='list-subHeader'>{`${capitalizeFirstLetter(section)}:`}</div>
              {Object.values(list[section]).map((item, i) => {
                if (isAddingItem) {
                  return (
                    <TextField
                      key={i}
                      size="small"
                      fullWidth
                      variant="standard"
                      multiline
                      id={`${i}`}
                      value={item}
                      onChange={(e) => handleChange(e.target, i)}
                    />
                  );
                } else {
                  return (
                    <ListItem key={i} className='row'>
                      <div className='list-item-indicator'>
                        {stepNumbers ? <div className='list-item-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
                      </div>
                      <ListItemText primary={item} />
                    </ListItem>
                  );
                }
              })}
            </div>
          );
        })
      )}
    </MUIList>
  );
}

export default EditableList;