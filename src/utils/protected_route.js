import React from "react";
import {connect} from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth, render, ...rest }) => {
  
    return (
       
      <Route
        {...rest}
        render={props => {
          if (!auth.isAuthenticated)
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          return Component ? <Component /> : render(props);
        }}
      />
    );
  };
  
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps)(ProtectedRoute);