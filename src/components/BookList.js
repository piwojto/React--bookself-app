import React, { Component } from 'react';
import Modal from './Modal';

// lista kafelków z obrazkami i tytułami i autorem

class BookList extends Component {
  state = {isOpen: false, selectedBook:''}

  toggleModal = (props) => {
    this.setState({ isOpen: !this.state.isOpen});
    const selectedBook=props;
    this.setState({selectedBook});
  }

  render () {
    // console.log(this.props.bookList.length)
    return (
      <div className="container">
        <div className="row">
        {this.props.bookList.length===undefined ? (<h1 className="text-center">No Results to Display</h1>) 
        : (this.props.bookList.map((book) => {
            return (
              <div 
                key={book.id}
                className="col-md-3 border border-secondary rounded-lg"
              >
                <div 
                  className="box m-2 overflow-hidden"
                  onClick={(event)=>this.toggleModal(book.volumeInfo)}
                > 
                  <div>
                    {book.volumeInfo.imageLinks !== undefined &&
                      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                    }
                  <div>
                    <div>Title: {book.volumeInfo.title}</div>
                    <div>Authors: {book.volumeInfo.authors || 'N/A'}</div>
                  </div>
                  </div>
                </div>
              </div>
            )}
          )
          // <Modal show={this.state.isOpen}
          // //   onClose={this.toggleModal}>
          // //   {this.state.selectedBook}
          // // </Modal>     
         
      )
          
        }
        </div>
      </div>
      
    )    
  }
}  

export default BookList;