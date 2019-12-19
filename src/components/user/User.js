import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

class Home extends Component {
    state = {  }

    componentDidMount(){
        this.props.getUsers();
    }
    render() {
        return ( <React.Fragment>
            
        <Navbar logoutUser={this.props.logoutUser}  {...this.props} />
        <table className="table table-bordered">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
          {this.props.users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
        </table>
        
        <Footer/></React.Fragment> );
    }
}
 
export default Home;