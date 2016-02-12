import React, { PropTypes } from 'react';

// stateless function
function Layout ({ children }) {
	return (
		<div className='container-fluid'>
			{ children }
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element
}

export default Layout;
