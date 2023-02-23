import { useContext } from 'react';
import { collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'

import { db } from '../utils/firebase.config';
import { CookbookContext } from "./CookbookContext";
import useAuth from './useAuth';
import useRecipes from './useRecipes';

import { baseRecipes } from '../utils/constants';
import { updateCurrentUser } from 'firebase/auth';

const useUserCookbookData = () => {
  const { recipesCookbookContext, statusCookbookContext, userCookbookDataCookbookContext } = useContext(CookbookContext);
  const { authenticatedUser, getAuthenticatedUser } = useAuth();
  // const { recipes } = useRecipes();
  
  const [status, setStatus] = statusCookbookContext;
  const [userCookbookData, setUserCookbookData] = userCookbookDataCookbookContext;
  
  const updateCurrentRecipe = (recipe) => {
    const newUserDataState = {
      ...userCookbookData,
      currentRecipe: recipe,
    }
    // console.log('recipe ',recipe)
    updateUserCookbookData(newUserDataState);
  }

  const updateUserCookbookData = async (newUserDataState, updateType) => {
    try { // TODO: somehow target just the recipe that was altered, not everything
      // console.log('doc update with: ',newUserDataState);
      const userDocRef = doc(db, authenticatedUser.uid, "userCookbookData");
      await updateDoc(userDocRef, {
        ...newUserDataState,
        timestamp: serverTimestamp(),
      });
      // setStatus({ uType, result: 'success' });
    } catch (err) {
      // setStatus({ uType, result: 'error'});
      console.log(err);
    }
  }

  async function getUserCookbookData() {
    const userDocRef = doc(db, authenticatedUser.uid, "userCookbookData");

    await getDoc(userDocRef).then((user) => {
      const userData = user.data();
      // console.log('Firebase getUserCookbookData ', userData)

        setUserCookbookData(state => (
          { 
            ...state,
            userTags: userData.userTags || [],
            currentRecipe: userData.currentRecipe,
            currentRecipeId: userData.currentRecipeId,
          }
        ));
    }).catch((err) => {
      console.log(err);
    })
  }

  return {
    getUserCookbookData,
    updateCurrentRecipe,
    updateUserCookbookData,
    currentRecipe: userCookbookData.currentRecipe,
    currentRecipeId: userCookbookData.currentRecipeId,
    userTags: userCookbookData.userTags,
  }
};

export default useUserCookbookData;