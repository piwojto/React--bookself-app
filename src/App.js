import React, { Component } from 'react';
import './App.css';
import SearchBook from './components/SearchBook';
import BookList from './components//BookList';
import Modal from './components/Modal'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: []
    }
  }

  handleBookList = (bookList) => {
    this.setState({ bookList });
  }

  render() {
    return (
      <div className="App">
        <SearchBook onSearchResult={this.handleBookList}/>
        <BookList bookList={this.state.bookList}/>
       </div>
    );
  }
}

export default App;