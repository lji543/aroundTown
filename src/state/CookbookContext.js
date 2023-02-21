// TODO: separate different context's based on value types? - status, budget, tracking, etc
// or maybe split up useExpenses instead
import React, { useState } from 'react';

import { baseRecipes } from '../utils/constants';

const CookbookContext = React.createContext([{}, () => {}]);

const CookbookProvider = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState({
    email: null,
    uid: null,
    // name: null,
  });
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
  const [recipes, setRecipes] = useState(baseRecipes);
  const [status, setStatus] = useState({
    updateType: null,
    result: null,
  });
  return (
    <CookbookContext.Provider
      value={{
        authenticatedUserCookbookContext: [status, setStatus],
        recipesCookbookContext: [recipes, setRecipes],
        statusCookbookContext: [status, setStatus]
      }}
    >
      {props.children}
    </CookbookContext.Provider>
  );
}

export { CookbookContext, CookbookProvider };