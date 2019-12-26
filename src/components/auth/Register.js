import React, { useState, useEffect } from 'react';
import { Link, axios } from 'react-router-dom';
import {connect} from "react-redux";
import {registerUser} from '../../actions/auth_action';

const Register = (props) => {
    // state = {
    //     name: "Demo",
    //     email: "demo@demo.com",
    //     password: "123456",
    //     confirm_password: "123456",
    //     errors: {}
    //   };

    const [state, setState] = useState({
          name: "Demo",
          email: "demo@demo.com",
          password: "123456",
          confirm_password: "123456",
          errors: {}
        });

   const onChange = ({target:input}) => {
        setState({
          ...state,
          [input.name]:input.value
        
        });   
    }

    // static getDerivedStateFromProps(props) {
    //   console.log(props);
    //   if(props.auth.isAuthenticated){
    //     props.history.push('/home');
    //   }
    //   return null;
    // }

    useEffect(() => {
      try{
        if (props.auth.isAuthenticated) {
          props.history.push("/home");
        }
        if(props.errors) {
          setState({errors: props.errors})
          //return { errors: props.errors }
        }
      }catch(e){
        console.log(e);
      }
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
        name: state.name,
        email: state.email,
        password: state.password,
        confirm_password: state.confirm_password
      };

      props.registerUser(newUser);
    }
    
      console.log(state);
        const {errors} = state; 
        
        return ( <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit = {onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange = {onChange}
            />
            <div>{errors.name}</div>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={state.email}
              onChange = {onChange}
            />
            <div>{errors.email}</div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange = {onChange}
            />
            <div>{errors.password}</div>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={state.password}
              onChange = {onChange}
            />
            <div>{errors.confirm_password}</div>
            <button type="submit">Submit</button>
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div> );
    }

 
const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps, {registerUser})(Register);