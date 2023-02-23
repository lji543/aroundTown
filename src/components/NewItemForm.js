import React, { useState } from 'react';

import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import { cuisine, ingredient, meal, time } from '../utils/constants';
// import useExpenses from '../state/useExpenses';
import { convertToInt, formatDate } from '../utils/utilFunctions';

const NewItemForm = ({ props }) => {
  // const { addNewRow, owedCategory, className, itemCategoryName, itemObj = baseItemSchema, setIsAddingItem } = props;
  // const { totalsByCategory } = useExpenses();
  // const [newItem, setNewItem] = useState(itemObj);
  const [newItem, setNewItem] = useState();
  const [statusMessage, setStatusMessage] = useState('');

  const handleFieldChange = (event) => {
    // const { id, name, value } = event.target;
    // if (statusMessage) {
    //   setStatusMessage();
    // }

    // if (name === 'category' || id === 'category') { // TODO: this is a workaround as select doesnt send up the id?
    //   setNewItem({
    //     ...newItem,
    //     [name]: value,
    //   });
    // } else {
    //   setNewItem({
    //     ...newItem,
    //     [id]: value,
    //   });
    // }
  };

  const handleItemUpdate = (action) => {
    // if (action !== 'cancel') {
    //   const { amount, category, date, name, owedToBy } = newItem;

    //   if (!amount || !category || !date || !name || !owedToBy) {
    //     setStatusMessage(statusMessages.form.requiredError);
    //   } else {
    //     const updatedNewItem = {
    //       ...newItem,
    //       amount: convertToInt(newItem.amount),
    //       date: formatDate(newItem.date),
    //       id: `${newItem.amount}${Math.round(Math.random()*1000000)}`,
    //     }
    
    //     addNewRow(updatedNewItem, owedCategory);
    //     setNewItem(itemObj);
    
    //     if (action === 'close') {
    //       setIsAddingItem(false);
    //     };
    //   }
    // } else {
    //   setIsAddingItem(false);
    // };
  };

  return (
    <div  className=''>
      <div className='form-row'>
        <FormControl>
        <InputLabel id="demo-simple-select-label">Category*</InputLabel>
        <Select  sx={{ m: 1, minWidth: 120 }}
          required
          size="small"
          id="category"
          label="Category"
          // defaultValue={totalsByCategory.other.name}
          name="category"
          onChange={handleFieldChange}
          value={newItem.category}
        >
          <MenuItem key={'none'} value="">None</MenuItem>
          {/* {categories.map((cat) => <MenuItem key={cat} value={cat}>{totalsByCategory[cat].name}</MenuItem>)} */}
        </Select>
          </FormControl>
      </div>
      {<div className='form-error'>
        {/* {statusMessage} */}statusMessage
      </div>}
      <div className='actions-row'>
        <Button
          className='button-outlined right-margin-12'
          onClick={() => handleItemUpdate('close')}
        >
          Save and Close
        </Button>
        <Button
          className='button-outlined right-margin-12'
          onClick={() => handleItemUpdate()}
        >
          Save and Add Another
        </Button>
        <Button
          className='button-outlined'
          onClick={() => handleItemUpdate('cancel')}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
} 

export default NewItemForm;