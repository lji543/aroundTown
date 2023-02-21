import React, { useEffect, useState } from 'react';

import {
  Remove as RemoveIcon,
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
} from '@mui/material';

import List from './components/utilComponents/List';
import useRecipes from './state/useRecipes';

// const RecipePage = ({recipe}) => {
const RecipePage = () => { // TODO: using example one for now
  const { recipes } = useRecipes();
  const recipe = recipes[1];

  const { directions, ingredients } = recipe;
  const ingredientListArray = Array.isArray(ingredients) ? ingredients : Object.keys(ingredients);
  const directionsListArray = Array.isArray(directions) ? directions : Object.keys(directions);

  useEffect(() => {
    // console.log('RecipePage ', owedItems)
    // console.log('ing ', isArray)
    // console.log('ing ', ingredientListArray)
    // console.log('ing ', Array.isArray(ingredients))
  // eslint-disable-next-line
  }, []); // react-hooks/exhaustive-deps

  return (
    <div className=''>
      <Container maxWidth='xs' className='image-container'>
        <img
          className='image'
          src={recipe.photos.featured}
          alt={recipe.name}
          loading="lazy"
        />
      </Container>
      <div>
        <div className='list-header'>Ingredients:</div>
          {Array.isArray(ingredients) ? (
            <List listArray={ingredientListArray} />
          ) : (
            ingredientListArray.map((subHeader, i) =>
              <List listArray={ingredients[subHeader]} subHeader={subHeader} />
            )
          )}        
      </div>
      <div>
        <div className='list-header'>Directions:</div>
          {Array.isArray(directions) ? (
            <List listArray={directionsListArray} dividers stepNumbers />
          ) : (
            directionsListArray.map((subHeader, i) =>
              <List listArray={directions[subHeader]} subHeader={subHeader} dividers stepNumbers />
            )
          )}      
      </div>
    </div>
  );
}

export default RecipePage;


// {isArray && recipe.ingredients.map((ingredients, i) => 
//   <ListItem key={i} disablePadding>
//     {/* <ListItemIcon> */}
//       <RemoveIcon />
//     {/* </ListItemIcon> */}
//     <ListItemText primary={`${ingredients[0]}: ${ingredients[1]} ${ingredients[2]}`} />
//   </ListItem>
// )}