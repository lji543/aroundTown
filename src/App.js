import React, { useEffect, useState } from 'react';

import Navigation from './components/navigation';
import PageWrapper from './components/navigation/PageWrapper';

import RecipePage from './RecipePage';
import SearchPage from './SearchPage';

import './styles/App.css';
import useRecipes from './state/useRecipes';
import useAuth from './state/useAuth';

function App() {
  const { authenticatedUser, getAuthenticatedUser } = useAuth();
  const { getRecipes } = useRecipes();
  const [page, setPage] = useState(0);

	const handlePageChange = (e, newPage) => {
		setPage(newPage);
	};

  useEffect(() => {
    if (authenticatedUser.email) {
      getRecipes();
    }
  // eslint-disable-next-line
  }, [authenticatedUser]); // react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Navigation handlePageChange={handlePageChange} page={page} />
      <PageWrapper value={page} index={0}>
        <RecipePage />
      </PageWrapper>
      <PageWrapper value={page} index={1}>
        <SearchPage />
      </PageWrapper>
    </div>
  );
}

export default App;