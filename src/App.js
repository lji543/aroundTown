import React, { useEffect, useState } from 'react';

import Navigation from './components/navigation';
import PageWrapper from './components/navigation/PageWrapper';

import AddRecipe from './components/AddRecipe';
import CookbookDashboard from './CookbookDashboard';
import RecipePage from './RecipePage';
import SearchPage from './SearchPage';

import './styles/App.css';
import useAuth from './state/useAuth';
import useRecipes from './state/useRecipes';
import useUserCookbookData from './state/useUserCookbookData';

import { baseRecipes } from './utils/constants';

function App() {
  const { authenticatedUser, getAuthenticatedUser } = useAuth();
  const { checkedLogin } = authenticatedUser;
  const { getUserCookbookData, updateCurrentRecipe } = useUserCookbookData();
  const { getRecipes, recipes } = useRecipes();
  const [page, setPage] = useState(3);

	const handlePageChange = (e, newPage) => {
		setPage(newPage);
	};

  useEffect(() => {
    // console.log('App - checking for user ',authenticatedUser)
    getAuthenticatedUser();
    // if (authenticatedUser.checkedLogin) {
    //   setIsLoading(false);
    // }
    // eslint-disable-next-line
  // }, [checkedLogin]); // react-hooks/exhaustive-deps
  }, [checkedLogin]); // react-hooks/exhaustive-deps

  useEffect(() => {
    if (authenticatedUser.email) { // TODO: setup login
      getRecipes();
      getUserCookbookData();
    }
  // eslint-disable-next-line
  }, [authenticatedUser]); // react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Navigation handlePageChange={handlePageChange} page={page} />
      <PageWrapper value={page} index={0}>
        <CookbookDashboard setPage={setPage} />
      </PageWrapper>
      <PageWrapper value={page} index={1}>
        <RecipePage />
      </PageWrapper>
      <PageWrapper value={page} index={2}>
        <SearchPage />
      </PageWrapper>
      <PageWrapper value={page} index={3}>
        <AddRecipe />
      </PageWrapper>
    </div>
  );
}

export default App;