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

const CookbookDashboard = ({ setPage }) => {
  const { recipes, updateRecipeListInfo } = useRecipes();
  const { currentRecipeId, getUserCookbookData, setCurrentRecipe } = useUserCookbookData();

  // const [currentRecipe, setCurrentRecipe] = useState();
  const [recipeList, setRecipeList] = useState([]);
  const [directionsList, setDirectionsList] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [notesList, setNotesList] = useState([]);
  const [isEditingIngredients, setIsEditingIngredients] = useState(false);
  const [isEditingDirections, setIsEditingDirections] = useState(false);
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const handleSelectRecipe = (recipeId) => {
    console.log('recipe ',recipeId)
    setCurrentRecipe(recipeId);
    // setPage(2); // TODO: add router so there's a back button, etc
  }

  useEffect(() => {
    // console.log('CookbookDashboard useEffect 3')
    if (currentRecipeId) {
      // const { directions, ingredients, notes } = currentRecipe;
      // setDirectionsList(directions);
      // setIngredientsList(ingredients);
      // setNotesList(notes)
    }
  // eslint-disable-next-line
  }, [currentRecipeId]); // react-hooks/exhaustive-deps

  return (
    <div>
      <div>SEARCH</div>
      <Stack className='stack'>
        {Object.keys(recipes).map((recipeId) => {
          // console.log('recipeId ',recipeId)
          // console.log('recipe ',recipes[recipeId])
          return (
            <Stack key={recipeId} className='stack-row' direction="row" onClick={() => handleSelectRecipe(recipeId)}>
              <div className='stack-row-item stack-first-item right-spacing-12'>{recipes[recipeId].name}</div>
              <div className='stack-row-item right-spacing-12 width-84'>{`${recipes[recipeId].totalTime[0]} ${recipes[recipeId].totalTime[1]}`}</div>
              <div className='stack-row-item right-spacing-12 width-104'>{`${recipes[recipeId].ingredients.length} ingredients`}</div>
              <div className='stack-row-item'>
                {recipes[recipeId].categories?.map((category, i) => i+1 < recipes[recipeId].categories.length ? `${category}, ` : category)}
              </div>
            </Stack>
          )
        })}
      </Stack>
    </div>
  )
}

export default CookbookDashboard;