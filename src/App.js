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
      noBooks:0
    }
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
          // noBooks={this.state.handleNoBooks}
          />
        
       </div>
    );
  }
}

export default App;