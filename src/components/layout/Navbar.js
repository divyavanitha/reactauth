import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {logoutUser} from '../../actions/auth_action';



class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.logoutUser(this.props.history);
  };
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
           
              <React.Fragment>
                <Link className="nav-link" to="/users">
                  Users <span className="sr-only">(current)</span>
                </Link>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.logout} href="/logout">
                    Logout
                  </a>
                </li>
           
                {/* <li className="nav-item active">
                  <Link className="nav-link" to="/login">
                    Login <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li> */}
              </React.Fragment>
           
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {logoutUser})(withRouter(Navbar));
