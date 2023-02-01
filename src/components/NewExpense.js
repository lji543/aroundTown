import React, { useState } from 'react';

import { Button, TextField } from '@mui/material';

import { convertToInt, formatDate } from '../utils/utilFunctions';

const baseExpenseObj = {
  amount: 0,
  date: '',
  details: '',
};

const NewExpense = ({ addNewRow, month, setIsAddingExpense }) => {
  const [minimumDate /*, setMinimumDate*/] = useState();
  const [newExpense, setNewExpense] = useState(baseExpenseObj);

  // useEffect(() => {
  //   let min;
  //   const today = new Date();
  //   if (today.getMonth() !== month) {
  //     const year = today.getFullYear();
  //     min = `${month+1}/01/${year}`;
  //   }
  //   setMinimumDate(min);
  // }, [minimumDate])

  const handleFieldChange = (event) => {
    const { id, value } = event.target;

    setTimeout(() => setNewExpense({
      ...newExpense,
      [id]: value,
    }), 400);
  };

  const handleExpenseUpdate = (close) => {
    const newExp = {
      ...newExpense,
      amount: convertToInt(newExpense.amount),
      date: formatDate(newExpense.date),
      id: `${newExpense.amount}${Math.round(Math.random()*1000000)}`,
    }

    addNewRow(newExp);

    if (close) {
      setIsAddingExpense(false);
    };
    // setNewExpense(baseExpenseObj);

  };

  return (
    <div className='form-row'>
      <div className='form-row-title'>Add Expense:</div>
      <div>
        <TextField
          required
          id="date"
          type="date"
          defaultValue={minimumDate}
          onChange={handleFieldChange}
          className='form-field'
          // InputProps={{
          //   inputProps: { min: minimumDate },
          // }}
          // inputProps={{ min: minimumDate }}
        />
        <TextField
          required
          id="details"
          label="Description"
          onChange={handleFieldChange}
          className='form-field'
        />
        <TextField
          required
          id="amount"
          label="Amount"
          type="number"
          onChange={handleFieldChange}
          className='form-field'
        />
      </div>
      <div className='actions-row'>
        <Button onClick={() => handleExpenseUpdate('close')}>Save and Close</Button>
        <Button onClick={() => handleExpenseUpdate()}>Save and Add Another</Button>
      </div>
    </div>
  );
} 

export default NewExpense;