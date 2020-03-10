import React, { Component } from 'react';
import './App.css';
import SearchBook from './components/SearchBook';
import BookList from './components//BookList';

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

   render() {
    console.log(this.state.noBooks);
    // console.log({onSearchResult:'400'});
    return (
      <div className="App">
        <SearchBook onSearchResult={this.handleBookList}
        
        />
        <BookList 
          bookList={this.state.bookList}
          />
        
       </div>
    );
  }
}

export default App;