import axios from 'axios';
import setAuthToken from '../utils/set_auth_token';
import jwt_decode from 'jwt-decode'; 
import {SET_CURRENT_USER} from './types';


export const loginUser = (data, history) => async dispatch => {
  try{
    let login = await axios.post('/api/auth/login', data);
    const token = login.data.token;
    localStorage.setItem('token', token);
    setAuthToken(token);
    const decode = jwt_decode(token);
    // this.setState({auth: 
    //   {
    //     isAuthenticated: true
    //   }
    // });

    dispatch({
      type:SET_CURRENT_USER,
      payload:decode
    })
  }catch(e){
    console.log(e);
  }
    //console.log(login);
  }

  export const registerUser = (data) => async dispatch => {
    try{
    let register = await axios.post('/api/auth/register', data);
    const token = register.data.token;
    localStorage.setItem('token', token);
    setAuthToken(token);
    const decode = jwt_decode(token);
    // this.setState({auth: 
    //   {
    //     isAuthenticated: true
        
    //   }
    // });
    dispatch({
      type:SET_CURRENT_USER,
      payload:decode
    })
    console.log(register);
    }catch(e){
      console.log(e);
    }
  }
 
  export const logoutUser = (history) => async dispatch => {
    console.log(history);
    localStorage.removeItem('token');
    setAuthToken(false);
    // this.setState({auth: 
    //   {
    //     isAuthenticated: false
    //   }
    // });
    dispatch({
      type:SET_CURRENT_USER,
      payload:""
    })
history.push("/login");
  }

