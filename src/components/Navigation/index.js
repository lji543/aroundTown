import React from 'react';

import { AppBar, Tab, Tabs } from '@mui/material';

function Navigation({ handlePageChange, page }) {
	return (
		<div className='navigation'>
			<AppBar position='static'>
				<Tabs className='navigation-tabs' value={page} onChange={handlePageChange}>
					<Tab className='navigation-links' label='Home' /> {/* TODO: make home page */}
					<Tab className='navigation-links' label='RecipePage' />
					<Tab className='navigation-links' label='Search' />
					<Tab className='navigation-links' label='Add a Recipe' />
				</Tabs>
			</AppBar>
		</div>
	);
}

export default Navigation;
