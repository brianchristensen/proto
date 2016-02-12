import React, { PropTypes } from 'react';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// Layout is a pure function of its props, so we can
// define it with a plain javascript function...
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