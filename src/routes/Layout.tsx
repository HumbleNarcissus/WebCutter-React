import { Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import Navbar from '../Components/Layout/Navbar';
import NotFound from './NotFound';
import Login from '../Components/auth/Login';
import Register from '../Components/auth/Register';
import Sites from '../Components/Sites/Sites';

const Layout = () => (
    <div className="layout">
        <header>
            <Navbar />
        </header>
        <main>
            <div className="container">
            <Switch>
                {/* sites */}
                <Route path="/dashboard" component={Sites} />
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