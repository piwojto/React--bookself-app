import React, { Component } from 'react';
import './App.css';
import SearchBook from './components/SearchBook';
import BookList from './components//BookList';
import Modal from './components/Modal'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: [],
      noBooks:0,
      isOpen: false,
      selectedBook: '',
    }
  }

  toggleModal = (props) => {
    this.setState({ isOpen: !this.state.isOpen});
    const selectedBook=props;
    this.setState({selectedBook});
    // console.log(props)
    // console.log(this.state.selectedBook)
  }

  handleBookList = (bookList) => {
    this.setState({ bookList });
  }

  handleNoBooks = (noBooks) => {
    // this.setState({ bookList });
    this.setState({noBooks:400});
  }

  render() {
    console.log(this.state.noBooks);
    console.log({onSearchResult:'400'});
    return (
      <div className="App">
        <SearchBook onSearchResult={this.handleBookList}
        
        />
        <BookList 
          bookList={this.state.bookList}

          onClick={(event)=>{
            this.toggleModal(book.volumeInfo)}
            }
            
          />
          <Modal show={this.state.isOpen}
        onClose={this.toggleModal}>
          {this.state.selectedBook}
      </Modal>
        
       </div>
    );
  }
}

export default App;