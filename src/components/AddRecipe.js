import React, { useEffect, useState } from 'react';

import {
  Add,
  Add as AddIcon, Remove as RemoveIcon, TagSharp,
} from '@mui/icons-material';
import {
  Button,
  Chip,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  List as MUIList,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';

import { baseRecipeObject, measurements, recipeCategories } from '../utils/constants'; // TODO: move some of these to firebase so user can update
import { convertToInt } from '../utils/utilFunctions';

import EditModeSwitch from '../components/EditModeSwitch';
import ImageList from '../components/utilComponents/ImageList';
import EditableList from '../components/utilComponents/EditableList';
import IngredientList from '../components/IngredientList';
import NewTagForm from '../components/forms/NewTagForm';

import { capitalizeFirstLetter } from '../utils/utilFunctions';
import useRecipes from '../state/useRecipes';
import useUserCookbookData from '../state/useUserCookbookData';

const AddRecipe = () => {
  const { addRecipe, deleteTag, recipes, updateRecipe, updateRecipeListInfo, updateRecipeTags } = useRecipes();
  const { currentRecipeId, getUserCookbookData, userCookbookData, userTags } = useUserCookbookData();

  const [isAddingRecipe, setIsAddingRecipe] = useState();
  const [newRecipe, setNewRecipe] = useState(baseRecipeObject);
  const [statusMessage, setStatusMessage] = useState('');

  const [directionsArray, setDirectionsArray] = useState(baseRecipeObject.directions);
  const [ingredientsArray, setIngredientsArray] = useState(baseRecipeObject.ingredients);
  const [notesArray, setNotesArray] = useState(baseRecipeObject.notes);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [tagArray, setTagArray] = useState([]);

  const handleListItemChange = (target, i) => {
    // console.log('listItem ',listItem, i)
    const { id, value } = target;
    console.log('handleListItemChange ', id, value)
    // handleListItemChange(value, i, type);
    setNewRecipe({
      ...newRecipe,
      [id]: value,
    });
  }

  const addNewRow = (type) => {
    // () => directionsArray.push({step: stepTracker + 1, direction: 'New Direction'})
    switch (type) {
      case 'directions':
        let newDirArray = [...directionsArray];
        newDirArray.push({step: newDirArray.length + 1, direction: 'New Direction'});
        setDirectionsArray(newDirArray);
        break;
      case 'ingredients':
        let newIngArray = [...directionsArray];
        newIngArray.push({ingredient: '', amt: '', measurement: 'cup'});
        setIngredientsArray(newIngArray);
        break;
      case 'notes':
        let newNotesArray = [...directionsArray];
        newNotesArray.push('New Note');
        setNotesArray(newNotesArray);
        break;
      default:
        break;
    }
  }

  const handleFieldChange = (event, idx, type) => {
    const { id, name, value } = event.target;
    console.log('handleFieldChange ',name, idx, id, type)
    if (type) {
      let identifier = id || name; // TODO: select doesn't send up id?
      let updatedArray = newRecipe[type];
      updatedArray[idx] = {
        ...updatedArray[idx],
        [identifier]: value
      }
      setNewRecipe({
        ...newRecipe,
        [type]: updatedArray
      });
      console.log('handleFieldChange ',newRecipe[type])
      // console.log('handleFieldChange ',newRecipe)
    } else if (!id && name) { // TODO: select doesn't send up id? But is handled differently than above
      let updatedArray = newRecipe[name];
      updatedArray.push(value);
      setSelectedCategory(value);
      setNewRecipe({
        ...newRecipe,
        [name]: updatedArray
      });
      console.log('handleFieldChange ',newRecipe)
    } else {
      if (id === 'prepTime' || id === 'cookTime') {
        let prep = newRecipe.prepTime[0] || 0;
        prep = id === 'prepTime' ? value : prep;
        let cook = newRecipe.cookTime[0] || 0;
        cook = id === 'cookTime' ? value : cook;
        
        const totalTime = convertToInt(prep) + convertToInt(cook);
        // console.log('totalTime ',totalTime)
        let newTimeArray = newRecipe[id];
        newTimeArray[0] = value;

        setNewRecipe({
          ...newRecipe,
          [id]: newTimeArray,
          totalTime: totalTime,
        });
      } else {
        setNewRecipe({
          ...newRecipe,
          [id]: value,
        });
      }
      console.log('handleFieldChange ',newRecipe)
    }
  }

  const handleItemUpdate = () => {
    console.log('handleItemUpdate ', newRecipe)
    

    addRecipe(newRecipe);
    // if (action !== 'cancel') {
    //   const { amount, category, date, name, owedToBy } = newRecipe;

    //   if (!amount || !category || !date || !name || !owedToBy) {
    //     // setStatusMessage(statusMessages.form.requiredError);
    //   } else {
    //     const updatednewRecipe = {
    //       ...newRecipe,
    //       // amount: convertToInt(newRecipe.amount),
    //       // date: formatDate(newRecipe.date),
    //       id: `${newRecipe.name}${Math.round(Math.random()*1000000)}`,
    //     }
    
    //     // addNewRow(updatednewRecipe, owedCategory);
    //     // setnewRecipe(itemObj);
    
    //     if (action === 'close') {
    //       setIsAddingRecipe(false);
    //     };
    //   }
    // } else {
    //   setIsAddingRecipe(false);
    // };
  };

  const handleTagArrayUpdate = (tags, section) => {
    // console.log('handleTagArrayUpdate ',tags, section)
    setNewRecipe({
      ...newRecipe,
      tags: tags,
    });
  };


  useEffect(() => {
    // console.log('AddRecipe useEffect 1')
    // getUserCookbookData();
  // eslint-disable-next-line
  }, []); // react-hooks/exhaustive-deps

  return (
    <div className=''>
      <div className='pageSection-divider'>
        {/* <div className='list-header'>Ingredients:</div> */}
        <div className='form-row'>
          <TextField
            required
            size="small"
            id="name"
            label="Name"
            onChange={handleFieldChange}
            className='top-margin-8 right-margin-12'
            value={newRecipe.name}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Category*</InputLabel>
            <Select  sx={{ m: 1, minWidth: 120 }}
              required
              size="small"
              id="category"
              label="Category"
              // defaultValue={}
              name="categories"
              onChange={handleFieldChange}
              value={selectedCategory}
            >
              <MenuItem key={'none'} value="">None</MenuItem>
              {recipeCategories.map((meal) => <MenuItem key={meal} value={meal}>{meal}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        {/* ***OTHER*** */}
        <div className='form-row'>
          <TextField
            size="small"
            id="servings"
            label="Servings"
            onChange={handleFieldChange}
            className='top-margin-8 right-margin-12'
            value={newRecipe.servings}
          />
          <TextField
            size="small"
            id="prepTime"
            label="prepTime"
            onChange={handleFieldChange}
            className='top-margin-8 right-margin-12'
            value={newRecipe.prepTime}
          />
          <div>min</div>
          <TextField
            size="small"
            id="cookTime"
            label="Cook Time"
            onChange={handleFieldChange}
            className='top-margin-8 right-margin-12'
            value={newRecipe.cookTime}
          />
          <div>min</div>
          {/* <TextField
            // required
            size="small"
            id="totalTime"
            label="Total Time"
            // onChange={handleFieldChange}
            className='top-margin-8 right-margin-12'
            value={newRecipe.totalTime}
          /> */}
          <div>{`${newRecipe.totalTime} minutes`}</div>
        </div>
      </div>
      {/* ***INGREDIENTS*** */}
      <div className='pageSection-divider'>
        <div className='list-header'>Ingredients:</div>
        {ingredientsArray.map((item, i) => {
          const type = 'ingredients';
          let isLast = i + 1 === ingredientsArray.length;
          // console.log('ingredientsArray ',item)
          return (
            <div key={i} className='form-row'>
              <TextField
                size="small"
                // variant="standard"
                id='ingredient'
                label='Ingredient'
                value={item.ingredient}
                onChange={(e) => handleFieldChange(e, i, type)}
              />
              <TextField
                size="small"
                // variant="standard"
                id='amt'
                label='Amount'
                value={item.amt}
                type='number'
                onChange={(e) => handleFieldChange(e, i, type)}
              />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Measurement*</InputLabel>
                <Select  sx={{ m: 1, minWidth: 120 }}
                  required
                  size="small"
                  id="measurement"
                  label="Measurement"
                  // defaultValue={}
                  name="measurement"
                  onChange={(e) => handleFieldChange(e, i, type)}
                  value={item.measurement}
                >
                  <MenuItem key={'none'} value="">None</MenuItem>
                  {measurements.map((measurement) => <MenuItem key={measurement} value={measurement}>{measurement}</MenuItem>)}
                </Select>
              </FormControl>
              {isLast && <IconButton onClick={() => addNewRow(type)}>
                <AddIcon />
              </IconButton>}
            </div>
          );
        })}
      </div>
      {/* ***DIRECTIONS*** */}
      <div className='pageSection-divider'>
        <div className='list-header'>Directions:</div>
        {directionsArray.map((item, i) => {
          const type = 'directions';
          let isLast = i + 1 === directionsArray.length;
          return (
            <div key={i} className='form-row'>
              <TextField
                size="small"
                // variant="standard"
                id='direction'
                label='Direction'
                value={item.direction}
                onChange={(e) => handleFieldChange(e, i, type)}
              />
              {isLast && <IconButton onClick={() => addNewRow(type)}>
                <AddIcon />
              </IconButton>}
          </div>
          );
        })}
      </div>
      {/* ***TAGS*** */}
      <div className='pageSection-divider'>
        <div className='list-header'>Tags:</div>
        <NewTagForm currentRecipe={newRecipe} handleTagArrayUpdate={handleTagArrayUpdate} />
      </div>
      {/* ***NOTES*** */}
      <div className='pageSection-divider'>
        <div className='list-header'>Notes:</div>
        {notesArray.map((item, i) => {
          return (
            <div key={i} className='form-row'>
              <TextField
                size="small"
                // variant="standard"
                id={item}
                value={item}
                onChange={handleFieldChange}
              />
              <IconButton onClick={() => addNewRow('notes')}>
                <AddIcon />
              </IconButton>
          </div>
          );
        })}
      </div>

      {/* ***BUTTONS*** */}
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

export default AddRecipe;