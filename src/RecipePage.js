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
  const [directionsList, setDirectionsList] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [notesList, setNotesList] = useState([]);
  const [isEditingIngredients, setIsEditingIngredients] = useState(false);
  const [isEditingDirections, setIsEditingDirections] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const handleListItemChange = (value, i, type) => {
    console.log('listItem ',value, i, type);
    let newList = [];
    let changeArrayFn;
    
    switch (type) {
      case 'ingredients':
        console.log('ingredientsList ',ingredientsList)
        newList = Array.isArray(ingredientsList) ? [...ingredientsList] : ingredientsList;
        changeArrayFn = setIngredientsList;
        break;
      case 'directions':
        console.log('directionsList ',directionsList)
        // newList = [...directionsList]; // directions are an obj
        newList = [...directionsList];
        changeArrayFn = setDirectionsList;
        break;
      case 'notes':
        console.log('notesList ',notesList)
        newList = [...notesList];
        changeArrayFn = setNotesList;
        break;                  
    
      default:
        break;
    }
    // console.log('handleListItemChange: newList ',newList)
    if (i >= newList.length) {
      newList.push(`New ${type}...`); // Add empty item to array
      // console.log('adding: value ',value)
      // console.log('adding: newList ',newList)
    } else if (i >= Object.keys(newList).length) {

    } else if (!value) {
      // console.log('deleting: newList ',newList)
      newList.splice(i,i+1); // delete the item if empty textField
      // console.log('deleting: value ',value)
      // console.log('deleting: newList ',newList)
    } else {
      newList[i] = value;
      // console.log('editing: value ',value)
      // console.log('editing: newList ',newList)
    }
    // console.log('newList length',newList.length)
    // console.log('newList ',newList)
    changeArrayFn(newList);
  }

  const handleListItemUpdate = (type) => {
    // console.log('listItem ',type);
    let newList = [];

    switch (type) {
      case 'ingredients':
        newList = [...ingredientsList];
        break;
      case 'directions':
        newList = [...directionsList];
        break;
      case 'notes':
        newList = [...notesList];
        break;                  
    
      default:
        break;
    }
    // console.log('handleListItemUpdate newList ',newList);
    updateRecipeListInfo(newList, type);
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
      const { directions, ingredients, notes } = currentRecipe;
      setDirectionsList(directions);
      setIngredientsList(ingredients);
      setNotesList(notes)
    }
  // eslint-disable-next-line
  }, [currentRecipe]); // react-hooks/exhaustive-deps

  if (currentRecipe) {
    const { directions, id, ingredients, name, notes, photos, tags, url } = currentRecipe;
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
          <IngredientList
            handleListItemChange={handleListItemChange}
            handleListItemUpdate={handleListItemUpdate}
            isAddingItem={isEditingIngredients}
            // listArray={ingredientsList}
            list={ingredients}
            setIsAddingItem={setIsEditingIngredients}
            type={'ingredients'}
          />
        </div>
        <div className='pageSection-divider'>
          {/* <div className='list-header'>Directions:</div> */}
            <IngredientList
              dividers
              handleListItemChange={handleListItemChange}
              handleListItemUpdate={handleListItemUpdate}
              isAddingItem={isEditingDirections}
              // listArray={directionsList}
              list={directions}
              setIsAddingItem={setIsEditingDirections}
              stepNumbers
              type={'directions'}
            />
        </div>
        {notes.length > 0 &&
          <div className='pageSection-divider'>
            {/* <div className='list-header'>Other Notes:</div> */}
            {/* <EditableList
              handleListItemChange={handleListItemChange}
              handleListItemUpdate={handleListItemUpdate}
              isAddingItem={isEditingNotes}
              list={notes}
              setIsAddingItem={setIsEditingNotes}
              type={'notes'}
            /> */}
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