import React, { Component } from 'react';
import { Link, axios } from 'react-router-dom';


class Register extends Component {
    state = {
        name: "Demo",
        email: "demo@demo.com",
        password: "123456",
        confirm_password: "123456",
        errors: {}
      };

    onChange = ({target:input}) => {
        this.setState({[input.name]:input.value});   
    }

    static getDerivedStateFromProps(props) {
      console.log(props);
      if(props.auth.isAuthenticated){
        props.history.push('/home');
      }
      return null;
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.confirm_password
      };

      this.props.registerUser(newUser);
    }
    render() {
        const {errors} = this.state; 
        return ( <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit = {this.onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange = {this.onChange}
            />
            <div>{errors.name}</div>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              value={this.state.email}
              onChange = {this.onChange}
            />
            <div>{errors.email}</div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange = {this.onChange}
            />
            <div>{errors.password}</div>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={this.state.password}
              onChange = {this.onChange}
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
}
 
export default Register;