import axios from 'axios';
import setAuthToken from '../utils/set_auth_token';
import jwt_decode from 'jwt-decode'; 
import {GET_USERS} from './types';

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