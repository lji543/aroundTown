// TODO: separate different context's based on value types? - status, budget, tracking, etc
// or maybe split up useExpenses instead
import React, { useState } from 'react';

import { baseRecipes, recipeCategories, userTags } from '../utils/constants';

const CookbookContext = React.createContext([{}, () => {}]);

const CookbookProvider = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState({
    email: null,
    uid: null,
    // name: null,
  });
  // const [currentRecipe, setCurrentRecipe] = useState({});
  // const [currentRecipe, setCurrentRecipe] = useState(recipes['39sdefndve']); // TODO: temp for dev
  // const [currentRecipe, setCurrentRecipe] = useState(recipes['8345gbaae']); // TODO: temp for dev
  // const [recipes, setRecipes] = useState([
  //   {
  //     ingredients: [],
  //     directions: [], // include notes here too?
  //     photos: {
  //       featured: '',
  //       all: [],
  //     },
  //     tags: {
  //       all: [],
  //       genre: '',
  //       ingredient: '',
  //       meal: '',
  //       time: '',
  //     },
  //     notes: [],
  //     url: '',
  //   }
  // ]);
  const [recipesState, setRecipesState] = useState({});
  const [status, setStatus] = useState({
    updateType: null,
    result: null,
  });
  // const [userData, setUserData] = useState({
  //   userTags: [],
  // });
  const [userCookbookData, setUserCookbookData] = useState({
    currentRecipeId: '',
    userCategories: recipeCategories,
    userTags: userTags,
  });
  return (
    <CookbookContext.Provider
      value={{
        authenticatedUserCookbookContext: [authenticatedUser, setAuthenticatedUser],
        // currentRecipeCookbookContext: [currentRecipe, setCurrentRecipe],
        recipesCookbookContext: [recipesState, setRecipesState],
        statusCookbookContext: [status, setStatus],
        userCookbookDataCookbookContext: [userCookbookData, setUserCookbookData],
      }}
    >
      {props.children}
    </CookbookContext.Provider>
  );
}

export { CookbookContext, CookbookProvider };