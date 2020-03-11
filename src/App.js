import React, { Component } from 'react';
import SearchBook from './components/SearchBook';
import BookList from './components/BookList';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
    return (
    promiseInProgress && 
        
    <div className="container"
        style={{
        width: "80%",
        height: "80",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
        }} >
        <Loader type="ThreeDots" color="gray" height="80" width="100" />
        <h6>Loading ...</h6> 
    </div>  );  
}
class App extends Component {
  state={bookList: []}

  handleBookList = (bookList) => {
    this.setState({ bookList });
  }

   render() {
      return (
        <div className="App">
          <SearchBook onSearchResult={this.handleBookList}/>
          <LoadingIndicator/>
          <BookList bookList={this.state.bookList} />
        </div>
    );
  }
}

export default App;