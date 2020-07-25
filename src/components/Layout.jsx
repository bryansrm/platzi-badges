import React from 'react';

import NavBar from './NavBar';

const Layout = ({ children }) => (

    <div>
        <NavBar />
        { children }
    </div>
);

export default Layout;