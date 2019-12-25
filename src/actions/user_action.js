import axios from 'axios';
import setAuthToken from '../utils/set_auth_token';
import jwt_decode from 'jwt-decode'; 
import {GET_USERS, DELETE_USER} from './types';

export const getUsers = () => async dispatch => {
    try{
    let users = await axios.get('http://localhost:5000/api/users');
    // this.setState({
    //   users: users.data
    // });

    dispatch({
        type:GET_USERS,
        payload:users.data
      })
    }catch(e){
        console.log(e);
    }
  }

  export const deleteUsers = (id) => async dispatch => {
    try{
    let users = await axios.delete('http://localhost:5000/api/users/'+id);
    // this.setState({
    //   users: users.data
    // });

    dispatch({
        type:DELETE_USER,
        payload:id
      })
    }catch(e){
        console.log(e);
    }
  }