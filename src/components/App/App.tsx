import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './App.scss';
import { Home } from '../../pages/Home/Home';
import { NoRoute } from '../../pages/NoRoute/NoRoute';
import { Cart } from '../../pages/Cart/Cart';

type AppProps = {};

export const App: FunctionComponent<AppProps> = () => {
    return (
        <Router>
            <div className={style.component}>
                <Switch>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NoRoute />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
