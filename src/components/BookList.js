import React, { Component } from 'react';
import Modal from './Modal';

// lista kafelków z obrazkami i tytułami i autorem

class BookList extends Component {
  constructor(props) {
      super(props);
      this.state = { isOpen: false };
    }
  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen
    });
    // console.log(this.props.volumeInfo)
  }
  render () {
    
  return (
    <div>
        
      {this.props.bookList.map((book) => {
        // console.log(book.volumeInfo.title);
        return (
          <div 
          key={book.id} book={book.volumeInfo} className="Book"
          className="d-inline-flex m-2 border border-secondary rounded-lg w-25 h-75 p-3 overflow-hidden">
                  <div 
                  className="book"
                  onClick={this.toggleModal}
                    // console.log(this.props)
                    
                    > 
                    <div className="h-75">
                      { book.volumeInfo.imageLinks !== undefined &&
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                        }
                    <div>
                      <div>Title: {book.volumeInfo.title}</div>
                      <div>Authors: {book.volumeInfo.authors || 'N/A'}</div>
                      <div>id: {book.id}</div>
                    </div>
                    </div>
                  </div>
            </div>
            )
          }
        )
      }
      <Modal show={this.state.isOpen}
        onClose={this.toggleModal}>
          {/* {this.props.bookList} */}
        Tutaj modal
      </Modal>
    </div>
    )
  }
}  

export default BookList;