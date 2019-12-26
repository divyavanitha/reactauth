import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from '../../actions/auth_action';

const Login = (props) => {
  // state = {
  //   email: "",
  //   password: "",
  //   errors: {}
  // };

  const [state, setState] = useState({
       email: "",
       password: "",
       errors: {}
     });


  // static getDerivedStateFromProps(props) {
  // try{
  //   if (props.auth.isAuthenticated) {
  //     props.history.push("/home");
  //   }
  // }catch(e){
  //   console.log(e);
  // }
  //   return null;
  // }

  useEffect(() => {
    try{
      if (props.auth.isAuthenticated) {
        props.history.push("/home");
      }
      if(props.errors) {
        setState({errors: props.errors})
        return { errors: props.errors }
      }
    }catch(e){
      console.log(e);
    }
  });

  const onChange = ({ target: input }) => {
    setState({ 
      ...state,
       [input.name]: input.value 
      
      });
  };

  const onSubmit = async e => {
    e.preventDefault();

    const newUser = {
      email: state.email,
      password: state.password
    };
   
    props.loginUser(newUser, props.history);
  };

  
    const { errors } = state;
console.log(state);
    return (
          <div className="login-page" onSubmit={onSubmit}>
             <div className="form">
                <form className="login-form">
                <input type="text" name="email" value={state.email} onChange={onChange} placeholder="Username" />

                {errors && <div>{errors.email}</div> }
                <input type="password"  name="password" value={state.password} onChange={onChange} placeholder="Password" />
                {errors && <div>{errors.password}</div> }
                <button  type="submit"> Submit</button>
                <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    );
  }


const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {loginUser})(Login);