import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import Navbar from '../Components/Layout/Navbar';
import NotFound from './NotFound';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';

const Layout = () => (
    <div className="layout">
        <header>
            <Navbar />
        </header>
        <main>
            <div className="container">
            <Switch>
                {/* auth */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                {/* not found */}
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
            </div>
        </main>
    </div>
)

export default Layout;