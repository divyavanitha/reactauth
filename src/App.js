import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Register from './components/auth/Register';
import Home from './components/layout/Home';
import User from './components/user/User';
import ProtectedRoute from './utils/protected_route';
import setAuthToken from './utils/set_auth_token';
import Login from './components/auth/Login';


class App extends Component {
  state = { 
    auth: {
      isAuthenticated: false
    },
    users: []
   }
  // registerUser = async (data) => {
  //   let register = await axios.post('http://localhost:5000/api/auth/register', data);
  //   const token = register.data.token;
  //   localStorage.setItem('token', token);
  //   setAuthToken(token);
  //   this.setState({auth: 
  //     {
  //       isAuthenticated: true
        
  //     }
  //   });
  //   console.log(register);
  // }

  // loginUser = async (data) => {
  //   let login = await axios.post('http://localhost:5000/api/auth/login', data);
  //   const token = login.data.token;
  //   localStorage.setItem('token', token);
  //   setAuthToken(token);
  //   this.setState({auth: 
  //     {
  //       isAuthenticated: true
  //     }
  //   });

  //   console.log(login);
  // }

  // logoutUser = (history) => {
  //   localStorage.removeItem('token');
  //   setAuthToken(false);
  //   this.setState({auth: 
  //     {
  //       isAuthenticated: false
  //     }
  //   });
  //   history.push("/login");
  // }

  // getUsers = async () => {
  //   let users = await axios.get('http://localhost:5000/api/users');
  //   this.setState({
  //     users: users.data
  //   });
  // }
  render() {
  return (
    <React.Fragment>
    <Switch>
    <Route exact path='/' component= {Login} />
    <Route path='/register' component= {Register} />
    <Route path='/login' component={Login} />
    <ProtectedRoute path='/users'  component={User} />
    <ProtectedRoute path='/home'  component={Home} />
    </Switch>
    </React.Fragment>
  );
}
}

export default App;
