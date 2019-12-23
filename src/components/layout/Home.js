import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


class Home extends Component {
    state = {  }
    render() {
        return ( <React.Fragment><Navbar  /><h1>Home</h1><Footer/></React.Fragment> );
    }
}
 


export default Home;