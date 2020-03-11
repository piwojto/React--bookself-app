import React, { Component } from 'react';
import axios from "axios";
import { trackPromise } from 'react-promise-tracker';

// input tekstowy do wpisania nazwy filtra
// Button do obsługi zapytania axiosa z wpisanym przez użytkownika query

const booksUrl="https://www.googleapis.com/books/v1/volumes?q="; 

class SearchBook extends Component {
    state = {textInput: ''}
  
    getBooks = () => {
        trackPromise(
        axios.get(booksUrl + this.state.textInput + '&maxResults=40')
        .then((response) => {
            this.props.onSearchResult(response.data.items)
        }).catch((error,noBooks) => {
            console.log('error ',error);
            console.log(this.state.noBooks)
        }))
        }  

  handleEvent = (event) => {
    this.setState({ textInput: event.target.value });
    event.key === 'Enter' && this.getBooks() 
  }

  keyPressed =(event) => {
    if (event.key === "Enter") {
        event.key === 'Enter' && this.getBooks() 
    }
  }

  render() {
    return (
      <div>
       <div className="container bcg p-2 rounded-lg">
          <h2>Google Books Search</h2> 
          <div className="container d-inline-flex">  
            <input
              type="text"
              name="search"
              value={this.state.input}
              className="form-control mr-3 mb-5"
              placeholder="Search for Books ..."
              autoComplete="off"
              onChange={event => this.handleEvent(event)}
              onKeyPress={event =>this.keyPressed(event)}
            />
            <button
              type="submit"
              className="btn btn-secondary mb-5"
              onClick={this.getBooks}>
              Search
            </button>
          </div> 
        </div>
      </div>
    )
  }
}

export default SearchBook