import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Redirect from="/" to="/badges" />
            <Route exact path="/badges" component={ Badges } />
            <Route exact path="/badges/new" component={ BadgeNew } />
        </Layout>
    </BrowserRouter>
);

export default App;