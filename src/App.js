import React, { useEffect, useState } from 'react';

import Navigation from './components/navigation';
import PageWrapper from './components/navigation/PageWrapper';

import Dashboard from './Dashboard';

import './styles/App.css';
import useAuth from './state/useAuth';

import { baseRecipes } from './utils/constants';

function App() {
  const { authenticatedUser, getAuthenticatedUser } = useAuth();
  const { checkedLogin } = authenticatedUser;
  const [page, setPage] = useState(0);

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
      // getRecipes();
      // getUserCookbookData();
    }
  // eslint-disable-next-line
  }, [authenticatedUser]); // react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Navigation handlePageChange={handlePageChange} page={page} />
      <PageWrapper value={page} index={0}>
        <Dashboard />
      </PageWrapper>
    </div>
  );
}

export default App;