import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

const App = () => (
    <BrowserRouter>
        <Route exact path="/badges" component={ Badges } />
        <Route exact path="/badges/new" component={ BadgeNew } />
    </BrowserRouter>
);

export default App;