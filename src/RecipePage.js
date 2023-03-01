import React, { useEffect, useState } from 'react';

import {
  Edit as EditIcon,
  Remove as RemoveIcon,
  Save as SaveIcon,
  TagSharp,
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
  TextField,
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
  const { recipes, updateRecipeItemInfo, updateRecipeListInfo } = useRecipes();
  const { currentRecipeId, getUserCookbookData } = useUserCookbookData();

  const [currentRecipe, setCurrentRecipe] = useState();
  const [directionsList, setDirectionsList] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [notesList, setNotesList] = useState([]);
  const [isEditingIngredients, setIsEditingIngredients] = useState(false);
  const [isEditingDirections, setIsEditingDirections] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const handleItemChange = (target) => {
    const { id, value } = target;
    console.log('handleItemChange ',id, value);
    const updatedRecipe = {
      ...currentRecipe,
      [id]: value,
    }
    setCurrentRecipe(updatedRecipe);
    updateRecipeItemInfo(updatedRecipe)
  }

  const handleListItemChange = (value, i, type, section) => {
    // TODO: could combine w/ updating item info
    // TODO: could update currentRecipe instead of separate states for each list?
    console.log('listItem ',value, i, type);
    let newList = [];
    let changeArrayFn;
    
    switch (type) {
      case 'ingredient':
        // console.log('ingredientsList ',ingredientsList)
        newList = [...ingredientsList];
        changeArrayFn = setIngredientsList;
        break;
      case 'direction':
        // console.log('directionsList ',directionsList)
        newList = [...directionsList];
        changeArrayFn = setDirectionsList;
        break;
      case 'note':
        // console.log('notesList ',notesList)
        newList = [...notesList];
        changeArrayFn = setNotesList;
        break;                  
    
      default:
        break;
    }
    // console.log('handleListItemChange: newList ',newList)
    if (i >= newList.length) {
      if (currentRecipe.recipeSections) {
        newList.push({[type]: `New ${type}...`, section: section }); // Add empty item to array // TODO:
      } else {
        newList.push({[type]: `New ${type}...`}); // Add empty item to array
      }
      // console.log('adding: value ',value)
      console.log('adding: newList ',newList)
    } else if (!value) {
      // console.log('deleting: newList ',newList)
      newList.splice(i,i+1); // delete the item if empty textField
      // console.log('deleting: value ',value)
      console.log('deleting: newList ',newList)
    } else {
      newList[i] = {
        ...newList[i],
        [type]: value,
      };
      // console.log('editing: value ',value)
      console.log('editing: newList ',newList)
    }
    // console.log('newList length',newList.length)
    // console.log('newList ',newList)
    changeArrayFn(newList);
  }

  const handleListUpdate = (type) => {
    // console.log('listItem ',type);
    let newList = [];

    switch (type) {
      case 'ingredient':
        newList = [...ingredientsList];
        break;
      case 'direction':
        newList = [...directionsList];
        break;
      case 'note':
        newList = [...notesList];
        break;                  
    
      default:
        break;
    }
    console.log('handleListUpdate newList ',newList);
    updateRecipeListInfo(newList, type);
  }

  const handleEditButtonClick = () => {
    setIsEditingName(!isEditingName)
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
        {photos.featured && <Container maxWidth='xs' className='image-container'>
          <img
            className='image'
            src={photos.featured}
            alt={name}
            loading="lazy"
          />
        </Container>}
        <div className='pageSection-divider page-title'>
          {isEditingName ? (
            <TextField
              size="small"
              fullWidth
              variant="standard"
              id='name'
              value={currentRecipe.name}
              onChange={(e) => handleItemChange(e.target)}
            />
          ) : (
            <div>{name}</div>
          )}
          <Button
            className='button top-margin-12'
            startIcon={isEditingName ? <SaveIcon /> : <EditIcon />}
            onClick={() => handleEditButtonClick()}
          >
            {isEditingName ? 'Save' : 'Edit'}
          </Button>
        </div>
        <div className='pageSection-divider'>
          {/* <EditModeSwitch buttonText={'Edit Ingredients'} isAddingItem={isEditingIngredients} setIsAddingItem={setIsEditingIngredients} type={'ingredients'} /> */}
          <IngredientList
            handleListItemChange={handleListItemChange}
            handleListUpdate={handleListUpdate}
            isAddingItem={isEditingIngredients}
            // listArray={ingredientsList}
            list={ingredientsList}
            sections={currentRecipe.recipeSections}
            setIsAddingItem={setIsEditingIngredients}
            type={'ingredient'}
          />
        </div>
        <div className='pageSection-divider'>
          {/* <div className='list-header'>Directions:</div> */}
            <IngredientList
              dividers
              handleListItemChange={handleListItemChange}
              handleListUpdate={handleListUpdate}
              isAddingItem={isEditingDirections}
              // listArray={directionsList}
              list={directionsList}
              sections={currentRecipe.recipeSections}
              setIsAddingItem={setIsEditingDirections}
              stepNumbers
              type={'direction'}
            />
        </div>
        {notes.length > 0 &&
          <div className='pageSection-divider'>
            {/* <div className='list-header'>Other Notes:</div> */}
            {/* <EditableList
              handleListItemChange={handleListItemChange}
              handleListUpdate={handleListUpdate}
              isAddingItem={isEditingNotes}
              list={notesList}
              setIsAddingItem={setIsEditingNotes}
              type={'note'}
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
        <div className='pageSection-divider'>Click <a target='_recipeNewTab' href={url}>here</a> to check out the recipe source.</div>
      </div>
    );
  } else {
    return (
      <div>LOADING</div>
    )
  }
}

export default RecipePage;