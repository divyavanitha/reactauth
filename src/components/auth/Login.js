import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  static getDerivedStateFromProps(props) {
    if (props.auth.isAuthenticated) {
      props.history.push("/home");
    }

    return null;
  }

  onChange = ({ target: input }) => {
    this.setState({ [input.name]: input.value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
   
    this.props.loginUser(newUser);
  };

  render() {
    const { errors } = this.state;

    return (
          <div className="login-page" onSubmit={this.onSubmit}>
            <div className="form">
                <form className="login-form">
                <input type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder="Username" />
                <div>{errors.email}</div>
                <input type="password"  name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" />
                <div>{errors.password}</div>
                <button  type="submit"> Submit</button>
                <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    );
  }
}

export default Login;