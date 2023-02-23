import { useContext, useState } from 'react';
import { collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'

import { db } from '../utils/firebase.config';
import { CookbookContext } from "./CookbookContext";
import useAuth from './useAuth';
import useUserCookbookData from './useUserCookbookData';

import { baseRecipes } from '../utils/constants';

const useRecipes = () => {
  const { recipesCookbookContext, statusCookbookContext } = useContext(CookbookContext);
  const [recipes, setRecipes] = recipesCookbookContext;
  const [status, setStatus] = statusCookbookContext;
  const { authenticatedUser, getAuthenticatedUser } = useAuth();
  const { currentRecipeId } = useUserCookbookData();

  // const { recipes } = recipesState;
  // console.log('useRecipes recipes ',recipes)
  // console.log('useRecipes recipesState ',recipesState)

  // const [currentRecipe, setCurrentRecipe] = useState({});

  function addNewRecipe(newItem, owedCategory) {
    // let itemList = [...owedItems[owedCategory]];
    // // console.log('addNewOwedItem ', newItem, owedCategory);

    // itemList.push(newItem);

    // owedItems[owedCategory] = itemList;
    // totalByCategoryForOwed(itemList, owedCategory, 'add');
  }

  function deleteRecipe(deletedItem, owedCategory) {
    // let itemList = [];
    // // console.log('deleteOwedItem ',deletedItem, owedCategory)
    // // console.log('deleteOwedItem ',owedItems[owedCategory])
    // owedItems[owedCategory].forEach((currItem) => {
    //   if (currItem.id !== deletedItem.id) {
    //     itemList.push(currItem);
    //   }
    // });
    // // console.log('deleteOwedItem ',itemList)
    // owedItems[owedCategory] = itemList;
    // totalByCategoryForOwed(itemList, owedCategory, 'delete');
  }

  function deleteTag(id, tag, type) {
    // console.log('tag ',id, tag, type)
    const newTagArray = recipes[currentRecipeId].tags[type].filter((t) => t !== tag);
    const newTagsForRecipe = {
      ...recipes[currentRecipeId].tags,
      [type]: newTagArray
    }

    updateRecipeTags(newTagsForRecipe);
    // console.log('newTagArray ',newTagsForRecipe)
  }

  function updateRecipeListInfo(newListArray, type) {
    // console.log('updateRecipeListInfo ',newListArray, type)
    // console.log('recipes ',recipes)
    // console.log('recipes ',recipes)
    const updatedRecipe = {
      ...recipes[currentRecipeId],
      [type]: newListArray
    }
    // console.log('updatedRecipe ',updatedRecipe)
    // console.log('updatedState ',{
    //   ...recipesState.recipes,
    //   [currentRecipeId]: updatedRecipe,
    // })
    setRecipes({
      // ...recipesState.recipes,
      ...recipes,
      [currentRecipeId]: updatedRecipe,
    });
    updateRecipe(currentRecipeId, updatedRecipe);
  }

  function updateRecipeTags(tags, type) {
    // console.log('updateRecipeTags ',tags, type)
    const updatedRecipe = {
      // ...recipes[currentRecipeId],
      ...recipes[currentRecipeId],
      tags: tags
    }
    // console.log('updatedRecipe ',updatedRecipe)
    setRecipes({
      // ...recipesState.recipes,
      ...recipes,
      [currentRecipeId]: updatedRecipe,
    });
    updateRecipe(currentRecipeId, updatedRecipe);
  }

  const updateRecipe = async (id, newRecipesState, updateType) => {
    try { // TODO: somehow target just the recipe that was altered, not everything
      // console.log('doc update with: ',{...newRecipesState});
      const recipesDocRef = doc(db, authenticatedUser.uid, "recipes");
      // await updateDoc(recipesDocRef, {
      //   ...newRecipesState,
      //   // timestamp: serverTimestamp(),
      // });
      await updateDoc(recipesDocRef, {
        [id]: newRecipesState,
        timestamp: serverTimestamp(),
      });
      // setStatus({ uType, result: 'success' });
    } catch (err) {
      // setStatus({ uType, result: 'error'});
      console.log(err);
    }
  }

  async function getRecipes(check) {
    const recipesDocRef = doc(db, authenticatedUser.uid, "recipes");

    await getDoc(recipesDocRef).then((recipes) => {
      // const recipesData = recipes.data();
      const recipesData = baseRecipes; // TODO: temp for dev
      // console.log('Firebase recipesData ', recipesData)
      // console.log('Firebase check recipesData ', check)

      // console.log(          { 
      //   // ...state,
      //   currentRecipe: recipesData['39sdefndve'],
      //   // recipes: recipesData,
      //   recipes: recipesData,
      // })
      setRecipes(recipesData);
    }).catch((err) => {
      console.log(err);
    })
  }

  return {
    getRecipes,
    deleteTag,
    updateRecipe,
    updateRecipeListInfo,
    updateRecipeTags,
    recipes: recipes,
  }
};

export default useRecipes;