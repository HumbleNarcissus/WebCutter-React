import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import Navbar from '../Components/Layout/Navbar';
import NotFound from './NotFound';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';
import Sites from '../Components/Sites/Sites';
import PrivateRoute from '../Components/auth/PrivateRoute';

const Layout = () => (
    <div className="layout">
        <header>
            <Navbar />
        </header>
        <main>
            <div className="container">
            <Switch>
                {/* sites */}
                <PrivateRoute exact path="/" component={Sites} />
                <PrivateRoute exact path="/dashboard" component={Sites} />
                {/* auth */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* not found */}
                <Route exact path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
            </div>
        </main>
    </div>
)

export default Layout;