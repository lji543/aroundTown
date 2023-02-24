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

import { capitalizeFirstLetter } from '../utils/utilFunctions';

const IngredientList = ({
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
  // console.log('listArray ',listArray)
  // console.log('list ',list)

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
          {list.map((ingredient, i) => {
            // console.log('ingredient ', ingredient)
            if (isAddingItem) {
              return (
                <div key={i}>
                  <TextField
                    size="small"
                    fullWidth
                    variant="standard"
                    multiline
                    id={`${i}`}
                    value={ingredient.ing}
                    onChange={(e) => handleChange(e.target, i)}
                  />
                  <TextField
                    size="small"
                    fullWidth
                    variant="standard"
                    multiline
                    id={`${i}`}
                    value={ingredient.amt}
                    onChange={(e) => handleChange(e.target, i)}
                  />
                  <TextField
                    size="small"
                    fullWidth
                    variant="standard"
                    multiline
                    id={`${i}`}
                    value={ingredient.measurement}
                    onChange={(e) => handleChange(e.target, i)}
                  />
                </div>
              );
            } else {
              return (
                <ListItem className='row' key={ingredient.ing}>
                  <div className='list-item-indicator'>
                    {stepNumbers ? <div className='list-item-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
                  </div>
                  <ListItemText primary={type === 'ingredients' ? `${ingredient.ing}: ${ingredient.amt} ${ingredient.measurement}` : ingredient}/>
                </ListItem>
              );
            }
          })}
        </div>
      ) : (
        <div>
          {Object.keys(list).map((section) => {
            console.log('listSection ', list[section]);
            const element = () => {
              return (
                <div key={section}>
                  <div className='list-subHeader'>{`${capitalizeFirstLetter(section)}:`}</div>
                  {list[section].map((item, i) => {
                    if (isAddingItem) {
                      return (
                        <TextField
                          key={item}
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
                        <ListItem className='row' key={item}>
                          <div className='list-item-indicator'>
                            {stepNumbers ? <div className='list-item-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
                          </div>
                          <ListItemText primary={type === 'ingredients' ? `${item.ing}: ${item.amt} ${item.measurement}` : item} />
                        </ListItem>
                      );
                    }
                  })}
                </div>
              );
            }

            if (typeof list[section] === 'string') {
              return (
                element()
              );
            } else {
              return (
                <div key={section}>
                  <div className='list-subHeader'>{`${capitalizeFirstLetter(section)}:`}</div>
                  {list[section].map((item, i) => {
                    if (isAddingItem) {
                      return (
                        <TextField
                          key={item}
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
                        <ListItem className='row' key={item}>
                          <div className='list-item-indicator'>
                            {stepNumbers ? <div className='list-item-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
                          </div>
                          <ListItemText primary={type === 'ingredients' ? `${item.ing}: ${item.amt} ${item.measurement}` : item} />
                        </ListItem>
                      );
                    }
                  })}
                </div>
              );
            }
          })}
        </div>
      )}
    </MUIList>
  );
}

export default IngredientList;

// {Array.isArray(listItem) ? (
//   <ListItemText>
//     {listItem.map((item) => item)}
//   </ListItemText>
// ) : (
//   <ListItemText primary={listItem} />
// )}


// {listArray.map((listItem, i) => 
//   <div key={i}>
//     <ListItem disablePadding>
//       {isAddingItem ? (
//         <TextField
//           size="small"
//           fullWidth
//           variant="standard"
//           multiline
//           id={`${i}`}
//           value={listItem}
//           onChange={(e) => handleChange(e.target, i)}
//         />
//       ) : (
//         <div className='row'>
//           <div className='list-item-indicator'>
//             {stepNumbers ? <div className='list-item-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
//           </div>
//           <ListItemText>
//             {`${listItem.ing}: ${listItem.amt} ${listItem.measurement}`}
//           </ListItemText>
//         </div>
//       )}
//     </ListItem>
//     {(dividers && (i + 1) !== listArray.length) && <Divider className='divider' />}
//   </div>
// )}