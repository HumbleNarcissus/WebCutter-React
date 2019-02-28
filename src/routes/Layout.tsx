import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import Navbar from '../Components/Layout/Navbar';
import NotFound from './NotFound';

const Layout = () => (
    <div className="layout">
        <header>
            <Navbar />
        </header>
        <main>
            <div className="container">
            <Switch>
                {/* not found */}
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
            </div>
        </main>
    </div>
)

export default Layout;