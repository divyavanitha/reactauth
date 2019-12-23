import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {connect} from "react-redux";
import {getUsers} from '../../actions/user_action';
import Modal from '../../modal';

class User extends Component {
    state = {  }

    componentDidMount(){
        this.props.getUsers();
    }

    handleDelete = (id) => {
      var users = this.props.users.filter(user => user._id !== id);
      this.setState({users});
    }

    render() {
        return ( <React.Fragment>
            
        <Navbar />
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
              <td className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" data-value={user._id}>Delete</td>
            </tr>
          ))}
        </tbody>
        </table>
        


        <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
              <p>Are you sure want to delete</p>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleDelete()}>Yes</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
          
        </div>
      </div>
      <Modal />
        <Footer/></React.Fragment> );
    }
}
 
const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, {getUsers})(User);