import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {connect} from "react-redux";
import {getUsers, deleteUsers} from '../../actions/user_action';
import Modal from '../../modal';

const User = (props) => {
    // state = { 
    //   show: false,
    //   id: null
    //  };

    // componentDidMount(){
    //     this.props.getUsers();
    // }

    const [state, setState] = useState({ 
                                show: false,
                                id: null
                              });

    useEffect(() => {
      props.getUsers();
    }, []);

    const handleDelete = () => {
      
      var users = props.deleteUsers(state.id);
      setState({show:false});
    }



    const actions = () => {
      return (
        <Fragment>
          <button type="button" className="btn btn-danger" onClick = {handleDelete} >Delete</button>
        </Fragment>
      )
    }

    const close = () => {
      setState({show:false});
    }
    
     
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
          {props.users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="btn btn-info btn-lg" onClick={() => setState({show:true, id:user._id})} data-value={user._id}>Delete</td>
            </tr>
          ))}
        </tbody>
        </table>
      
        
          {state.show && <Modal title="Delete User" content="Are you sure want to Delete?" actions={actions()} close={close} /> }
        <Footer/></React.Fragment> );
    }

 
const mapStateToProps = (state) => ({
  users: state.users
})

// const mapStateToDispatch = (dispatch) => ({
//   getUsers: () => dispatch(getUsers()),
//   deleteUsers: (id) =>  dispatch(deleteUsers(id))
// });

export default connect(mapStateToProps, {getUsers, deleteUsers})(User);