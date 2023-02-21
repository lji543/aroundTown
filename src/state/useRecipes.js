import { useContext } from 'react';
import { collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'

import { db } from '../utils/firebase.config';
import { CookbookContext } from "./CookbookContext";
import useAuth from './useAuth';

const useRecipes = () => {
  const { recipesCookbookContext, statusCookbookContext } = useContext(CookbookContext);
  const [recipes, setRecipes] = recipesCookbookContext;
  const [status, setStatus] = statusCookbookContext;
  const { authenticatedUser, getAuthenticatedUser } = useAuth();

  function addNewRecipe(newItem, owedCategory) { // TODO: combine with update fn
    // let itemList = [...owedItems[owedCategory]];
    // // console.log('addNewOwedItem ', newItem, owedCategory);

    // itemList.push(newItem);

    // owedItems[owedCategory] = itemList;
    // totalByCategoryForOwed(itemList, owedCategory, 'add');
  }

  function deleteRecipe(deletedItem, owedCategory) { // combine these update fn's for items and for expenses
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

  async function getRecipes() {
    const recipesDocRef = doc(db, authenticatedUser.uid, "recipes");

    await getDoc(recipesDocRef).then((recipes) => {
      const recipesData = recipes.data();
      // console.log('Firebase recipesData ', recipesData)

        setRecipes(state => (
          { 
            ...state,
            recipes: recipesData,
          }
        ));
    }).catch((err) => {
      console.log(err);
    })
  }
  
  const updateRecipe = async (newRecipesState, updateType) => {
    try {
      // console.log('doc update with: ',newRecipesState);
      const recipesDocRef = doc(db, authenticatedUser.uid, "recipes");
      await updateDoc(recipesDocRef, {
        ...newRecipesState,
        timestamp: serverTimestamp(),
      });
      // setStatus({ uType, result: 'success' });
    } catch (err) {
      // setStatus({ uType, result: 'error'});
      console.log(err);
    }
  }

  return {
    getRecipes,
    recipes,
  }
};

export default useRecipes;