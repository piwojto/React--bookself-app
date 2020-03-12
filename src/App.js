import React, { Component } from 'react';
import SearchBook from './components/SearchBook';
import BookList from './components/BookList';

class App extends Component {
  state={bookList: []}

  handleBookList = (bookList) => {
    this.setState({ bookList });
  }

   render() {
      return (
        <div className="App">
          <SearchBook onSearchResult={this.handleBookList}
          />
          <BookList bookList={this.state.bookList} />
        </div>
    );
  }
}

export default App;