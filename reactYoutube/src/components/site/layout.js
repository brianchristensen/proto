import React, { PropTypes } from 'react';
import TopMenu from './topMenu';

// stateless function
function Layout ({ children }) {
	return (
		<div>
			<TopMenu />
			<div className='container-fluid'>
				<h1> Hello app! </h1>
				{ children }
			</div>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element
}

export default Layout;
