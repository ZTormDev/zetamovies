import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/zetastreaming/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/zetastreaming/:category/:id'
                component={Detail}
            />
            <Route
                path='/zetastreaming/:category'
                component={Catalog}
            />
            <Route
                path='/zetastreaming'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;