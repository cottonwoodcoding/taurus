import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import Loading from './components/Loading';
import Home from './components/Home';
import Admin from './components/Admin';
import DealerServices from './components/DealerServices';
import AddServices from './components/AddServices';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  authenticatingSelector: state => state.auth.loading,
  LoadingComponent: Loading
});

const AdminRoutes = UserIsAuthenticated( (props) => props.children );

export default (
  <Route>

    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/sign_up' component={SignUp} />
      <Route path='/services' component={DealerServices} />
      <Route component={AdminRoutes}>
        <Route path='/admin' component={Admin} />
        <Route path='/service_categories/:id' component={AddServices} />
      </Route>
      <Route path="*" status={404} component={NoMatch} />
    </Route>
  </Route>
)
