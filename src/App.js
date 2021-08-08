
import React from "react";
import { Route, withRouter, Switch } from "react-router";

import GlobalStyle from "./GlobalStyles";
import AppStyled from './App.styles';
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import LoginForm from "./components/LoginForm/LoginForm";
import Error from "./components/Error/Error";

import {connect, useDispatch} from 'react-redux';
import { signOut } from "./redux/actions/loginActions";

const App = ({isLoggedIn, history}) => {
  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch(signOut(history));
  }
  
  return (
    <AppStyled>
      <GlobalStyle/>
      <Header/>
      <div>
        <Switch>
          <Route path='/' exact component={LoginForm}/>
          <Route path='/user-list' component={isLoggedIn ? UserList : Error} />
          <Route path='/error' component={Error}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/logout' render={logout}/>
        </Switch>
      </div>
      
    </AppStyled>
  );
}

const mapStateToProps = (state) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  }
} 

export default connect(mapStateToProps)(withRouter(App));
