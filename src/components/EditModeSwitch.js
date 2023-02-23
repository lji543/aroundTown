import React from 'react';

import { Edit as EditIcon } from '@mui/icons-material';
import { Button } from '@mui/material';

// import NewItemForm from './NewItemForm';
import NewTagForm from './forms/NewTagForm';

const EditModeSwitch = (props) => {
  // console.log('EditModeSwitch ', props)
  const { buttonText, isAddingItem, setIsAddingItem, type } = props;

  return (
    <div className='button-container'>
      <Button
        className='button top-margin-12'
        // color="primary"
        startIcon={<EditIcon />}
        onClick={() => setIsAddingItem(!isAddingItem)}
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default EditModeSwitch;