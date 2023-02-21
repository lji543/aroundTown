import React from 'react';

import { AppBar, Tab, Tabs } from '@mui/material';

function Navigation({ handlePageChange, page }) {
	return (
		<div className='navigation'>
			<AppBar position='static'>
				<Tabs className='navigation-tabs' value={page} onChange={handlePageChange}>
					<Tab className='navigation-links' label='Recipe' /> {/* TODO: make home page */}
					<Tab className='navigation-links' label='Search' />
				</Tabs>
			</AppBar>
		</div>
	);
}

export default Navigation;
