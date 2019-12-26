import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    
    close = () => {

        this.props.close();

    }
    renderModal(){

        
        return(
            <Fragment>
            <div className="modal" id="myModal" style={{display:"block"}}>
                        <div className="modal-dialog">
                          <div className="modal-content">
                      
                            <div className="modal-header">
                              <h4 className="modal-title">{this.props.title}</h4>
                              <button type="button"  className="close" data-dismiss="modal" onClick={this.close} >&times;</button>
                            </div>
                      
                            <div className="modal-body">
                            {this.props.content}
                            </div>
                      
                            <div className="modal-footer">
                            {this.props.actions}
                            </div>
                      
                          </div>
                        </div>
                      </div>
                      
                     
        <div className="modal-backdrop fade show"></div>
        </Fragment>
        )
    }

    render() {
        
        return ReactDOM.createPortal(this.renderModal(), modalRoot);
       
    }
}

export default Modal; 
