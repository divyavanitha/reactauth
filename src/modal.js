import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    render() {
        return ReactDOM.createPortal(document.createElement("div"), modalRoot);
    }
}

export default Modal; 
