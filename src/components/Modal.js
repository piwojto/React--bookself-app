import React, { Component } from 'react';

// tytuł pozycji
// autorów
// datę wydania
// opis pozycji
// kategorie 
// zdjęcie okładki

import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    const shadowStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };
    console.log(this.props.children)
    return (
      <div className="shadow" >
        <div className="modal" style={{modalStyle}}>
          {this.props.children}
              
              tutaj modal
              {/* <div>Title: {book.title}</div>
              <div>Authors: {book.authors}</div> */}
          <div className="footer">
             <button 
              onClick={this.props.onClose}
              type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;