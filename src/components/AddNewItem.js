import React from 'react';

import { Add as AddIcon } from '@mui/icons-material';
import { Button } from '@mui/material';

// import NewItemForm from './NewItemForm';
import NewTagForm from './forms/NewTagForm';

const AddNewItem = (props) => {
  // console.log('AddNewItem ', props)
  const { buttonText, isAddingItem, setIsAddingItem, type } = props;

  return (
    <div className='button-container'>
      {isAddingItem ? (
        <div>
          {type === 'tag' && <NewTagForm props={props} />}
        </div>
      ) : (
        <Button
          className='button top-margin-12'
          // color="primary"
          startIcon={<AddIcon />}
          onClick={() => setIsAddingItem(!isAddingItem)}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default AddNewItem;