import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import UserListContainer from './containers/UserListContainer';
import HomeComponent from './components/HomeComponent';

export default (
	<Router history={browserHistory}>
	  <Route path="/" component={MainLayout}>
	    <IndexRoute component={HomeComponent} />
	    <Route component={SearchLayout}>
	      <Route path="users" component={UserListContainer} />
	    </Route> 
	  </Route>
	</Router>
);