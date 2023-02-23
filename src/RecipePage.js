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

import EditModeSwitch from './components/EditModeSwitch';
import ImageList from './components/utilComponents/ImageList';
import EditableList from './components/utilComponents/EditableList';
import IngredientList from './components/IngredientList';
import NewTagForm from './components/forms/NewTagForm';

import { capitalizeFirstLetter } from './utils/utilFunctions';
import useRecipes from './state/useRecipes';
import useUserCookbookData from './state/useUserCookbookData';

const RecipePage = () => {
  const { recipes, updateRecipeListInfo } = useRecipes();
  const { currentRecipeId, getUserCookbookData } = useUserCookbookData();

  const [currentRecipe, setCurrentRecipe] = useState();
  const [directionsListArray, setDirectionsListArray] = useState([]);
  const [ingredientsListArray, setIngredientsListArray] = useState([]);
  const [notesListArray, setNotesListArray] = useState([]);
  const [isEditingIngredients, setIsEditingIngredients] = useState(false);
  const [isEditingDirections, setIsEditingDirections] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const organizeListArrays = () => {
    const { directions, ingredients, notes } = currentRecipe
    let directionsArray = [];
    let ingredientsArray = [];
    console.log('organizeListArrays ingredients ',ingredients);
    if (Array.isArray(ingredients)) {
      ingredients.forEach((ingredient) => ingredientsArray.push(ingredient));
      directions.forEach((direction) => directionsArray.push(direction));
      // console.log('organizeListArrays 1  directions ',directionsArray);
    } else {
      Object.keys(ingredients).map((sectionOfRecipe, i) => {
        console.log(sectionOfRecipe)
        ingredientsArray.push(ingredients[sectionOfRecipe][i]);
        // assuming sections (keys) will be the same for ingredients and directions
        // directionsArray.push(directions[i+1])
        directionsArray.push(directions[sectionOfRecipe][i])
        // console.log('organizeListArrays 2  directions ',directionsArray);
        return ingredientsArray, directionsArray;
      });
    }
    console.log('organizeListArrays ingredientsArray ',ingredientsArray);
    setDirectionsListArray(directionsArray);
    setIngredientsListArray(ingredientsArray);
    setNotesListArray(notes)
  }

  const handleListItemChange = (value, i, type) => {
    // console.log('listItem ',value, i, type);
    
    let newListArray = [];
    let changeArrayFn;

    switch (type) {
      case 'ingredients':
        newListArray = [...ingredientsListArray];
        changeArrayFn = setIngredientsListArray;
        break;
      case 'directions':
        newListArray = [...directionsListArray];
        changeArrayFn = setDirectionsListArray;
        break;
      case 'notes':
        newListArray = [...notesListArray];
        changeArrayFn = setNotesListArray;
        break;                  
    
      default:
        break;
    }
    // console.log('handleListItemChange: newListArray ',newListArray)
    if (i >= newListArray.length) {
      newListArray.push(`New ${type}...`); // Add empty item
      // console.log('adding: value ',value)
      // console.log('adding: newListArray ',newListArray)
    } else if (!value) {
      // console.log('deleting: newListArray ',newListArray)
      newListArray.splice(i,i+1); // delete the item if empty textField
      // console.log('deleting: value ',value)
      // console.log('deleting: newListArray ',newListArray)
    } else {
      newListArray[i] = value;
      // console.log('editing: value ',value)
      // console.log('editing: newListArray ',newListArray)
    }
    // console.log('newListArray length',newListArray.length)
    // console.log('newListArray ',newListArray)
    changeArrayFn(newListArray);
  }

  const handleListItemUpdate = (type) => {
    // console.log('listItem ',type);
    let newListArray = [];

    switch (type) {
      case 'ingredients':
        newListArray = [...ingredientsListArray];
        break;
      case 'directions':
        newListArray = [...directionsListArray];
        break;
      case 'notes':
        newListArray = [...notesListArray];
        break;                  
    
      default:
        break;
    }
    // console.log('handleListItemUpdate newListArray ',newListArray);
    updateRecipeListInfo(newListArray, type);
  }

  useEffect(() => {
    // console.log('RecipePage useEffect 1')
    getUserCookbookData();
  // eslint-disable-next-line
  }, []); // react-hooks/exhaustive-deps

  useEffect(() => {
    // console.log('RecipePage useEffect 2')
    if (recipes && currentRecipeId) {
      setCurrentRecipe(recipes[currentRecipeId]);
    }
  // eslint-disable-next-line
  }, [currentRecipeId]); // react-hooks/exhaustive-deps

  useEffect(() => {
    // console.log('RecipePage useEffect 3')
    if (currentRecipe) {
      organizeListArrays();
    }
  // eslint-disable-next-line
  }, [currentRecipe]); // react-hooks/exhaustive-deps

  if (currentRecipe) {
    const { directions, id, ingredients, name, notes, photos, tags, url } = currentRecipe
    return (
      <div className=''>
        <Container maxWidth='xs' className='image-container'>
          <img
            className='image'
            src={photos.featured}
            alt={name}
            loading="lazy"
          />
        </Container>
        <div className='pageSection-divider'><a target='_recipeNewTab' href={url} className='page-title'>{name}</a></div>
        <div className='pageSection-divider'>
          {/* <EditModeSwitch buttonText={'Edit Ingredients'} isAddingItem={isEditingIngredients} setIsAddingItem={setIsEditingIngredients} type={'ingredients'} /> */}
          <EditableList
            handleListItemChange={handleListItemChange}
            handleListItemUpdate={handleListItemUpdate}
            isAddingItem={isEditingIngredients}
            listArray={ingredientsListArray}
            setIsAddingItem={setIsEditingIngredients}
            type={'ingredients'}
          />
        </div>
        <div className='pageSection-divider'>
          {/* <div className='list-header'>Directions:</div> */}
            <EditableList
              dividers
              handleListItemChange={handleListItemChange}
              handleListItemUpdate={handleListItemUpdate}
              isAddingItem={isEditingDirections}
              listArray={directionsListArray}
              setIsAddingItem={setIsEditingDirections}
              stepNumbers
              type={'directions'}
            />
        </div>
        {notes.length > 0 &&
          <div className='pageSection-divider'>
            {/* <div className='list-header'>Other Notes:</div> */}
            <EditableList
              handleListItemChange={handleListItemChange}
              handleListItemUpdate={handleListItemUpdate}
              isAddingItem={isEditingNotes}
              listArray={notesListArray}
              setIsAddingItem={setIsEditingNotes}
              type={'notes'}
            />
          </div>
        }
        {/* {photos.all.length > 0 && */}
          <div className='pageSection-divider'>
            <Stack direction="row" spacing={1}>
              <div className='list-header'>Tags:</div>
              <NewTagForm currentRecipe={currentRecipe} />
            </Stack>
            {/* <Stack direction="row" spacing={1} className='tagSection'>
              {tags.cuisine.map((tag) => <Chip key={tag} label={tag} clickable onDelete={() => handleChipDelete(tag, 'cuisine')} />)}
              {tags.ingredient.map((tag) => <Chip key={tag} label={tag} clickable onDelete={() => handleChipDelete(tag, 'ingredient')} />)}
              {tags.meal.map((tag) => <Chip key={tag} label={tag} clickable onDelete={() => handleChipDelete(tag, 'meal')} />)}
              {tags.time.map((tag) => <Chip key={tag} label={tag} clickable onDelete={() => handleChipDelete(tag, 'time')} />)}
            </Stack> */}
          </div>
        {/* } */}
        {photos.all.length > 0 &&
          <div className='pageSection-divider'>
            <Divider />
            {/* <div className='list-header'>Other Notes:</div> */}
            <ImageList images={photos.all} />
            <Divider />
          </div>
        }
        <div className='pageSection-divider'>Click <a target='_recipeNewTab' href={url} className='page-title'>here</a> to check out the source.</div>
      </div>
    );
  } else {
    return (
      <div>LOADING</div>
    )
  }
}

export default RecipePage;