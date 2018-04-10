import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import EditLink from './Components/EditLink';
import DeleteLink from './Components/DeleteLink';
import {Route, Switch, BrowserRouter} from 'react-router-dom';



const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true}/>
      <Route path="/edit/:link" component={EditLink}/>
      <Route path="/delete/:link" component={DeleteLink} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(
  routes,
  document.getElementById('app')
);