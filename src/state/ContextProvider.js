// TODO: separate different context's based on value types? - status, budget, tracking, etc
// or maybe split up useExpenses instead
import React, { useState } from 'react';

// import { baseRecipes, recipeCategories, userTags } from '../utils/constants';

const AppContext = React.createContext([{}, () => {}]);

const AppContextProvider = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState({
    email: null,
    uid: null,
    // name: null,
  });
  const [map, setMap] = useState({
    lat: 39.742043,
    lng: -104.991531
  })
  const [status, setStatus] = useState({
    updateType: null,
    result: null,
  });
  return (
    <AppContext.Provider
      value={{
        authenticatedUserAppContext: [authenticatedUser, setAuthenticatedUser],
        mapAppContext: [map, setMap],
        statusAppContext: [status, setStatus],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };