import React, { Component, Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {connect} from "react-redux";
import {getUsers, deleteUsers} from '../../actions/user_action';
import Modal from '../../modal';

class User extends Component {
    state = { 
      show: false,
      id: null
     };

    componentDidMount(){
        this.props.getUsers();
    }

    handleDelete = () => {
      
      var users = this.props.deleteUsers(this.state.id);
      this.setState({show:false});
    }



    actions = () => {
      return (
        <Fragment>
          <button type="button" className="btn btn-danger" onClick = {this.handleDelete} >Delete</button>
        </Fragment>
      )
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
              <td className="btn btn-info btn-lg" onClick={() => this.setState({show:true, id:user._id})} data-value={user._id}>Delete</td>
            </tr>
          ))}
        </tbody>
        </table>
      
        
          {this.state.show && <Modal title="Delete User" content="Are you sure want to Delete?" actions={this.actions()} /> }
        <Footer/></React.Fragment> );
    }
}
 
const mapStateToProps = (state) => ({
  users: state.users
})

// const mapStateToDispatch = (dispatch) => ({
//   getUsers: () => dispatch(getUsers()),
//   deleteUsers: (id) =>  dispatch(deleteUsers(id))
// });

export default connect(mapStateToProps, {getUsers, deleteUsers})(User);