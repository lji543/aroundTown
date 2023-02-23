import { useContext } from 'react';
import { collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'

import { db } from '../utils/firebase.config';
import { CookbookContext } from "./CookbookContext";
import useAuth from './useAuth';

const useUserCookbookData = () => {
  const { recipesCookbookContext, statusCookbookContext, userCookbookDataCookbookContext } = useContext(CookbookContext);
  
  const [recipes, setRecipes] = recipesCookbookContext;
  const [status, setStatus] = statusCookbookContext;
  const [userCookbookData, setUserCookbookData] = userCookbookDataCookbookContext;

  const { authenticatedUser, getAuthenticatedUser } = useAuth();
  
  const updateRecipe = async (newRecipesState, updateType) => {
    // try { // TODO: somehow target just the recipe that was altered, not everything
    //   // console.log('doc update with: ',newRecipesState);
    //   const recipesDocRef = doc(db, authenticatedUser.uid, "recipes");
    //   await updateDoc(recipesDocRef, {
    //     ...newRecipesState,
    //     timestamp: serverTimestamp(),
    //   });
    //   // setStatus({ uType, result: 'success' });
    // } catch (err) {
    //   // setStatus({ uType, result: 'error'});
    //   console.log(err);
    // }
  }

  const updateUserCookbookData = async (newUserDataState, updateType) => {
    try { // TODO: somehow target just the recipe that was altered, not everything
      // console.log('doc update with: ',newRecipesState);
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
      // console.log('Firebase userData ', userData)

        setUserCookbookData(state => (
          { 
            ...state,
            tags: userData.userTags || [],
          }
        ));
    }).catch((err) => {
      console.log(err);
    })
  }

  return {
    getUserCookbookData,
    updateUserCookbookData,
    userTags: setUserCookbookData.userTags,
  }
};

export default useUserCookbookData;