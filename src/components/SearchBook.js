import React, { Component } from 'react';
import axios from "axios";

// input tekstowy do wpisania nazwy filtra
// Button do obsługi zapytania axiosa z wpisanym przez użytkownika query

const booksUrl="https://www.googleapis.com/books/v1/volumes?q="; 

class SearchBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
        textInput: ''
        }
  }

    getBooks = () => {
        axios.get(booksUrl + this.state.textInput + '&maxResults=40')
        .then((response) => {
            this.props.onSearchResult(response.data.items)
        }).catch((error) => {
            console.log('error ',error);
        });
        }  

  handleEvent = (event) => {
    this.setState({ textInput: event.target.value });

    event.key === 'Enter' && this.getBooks()
  }

  render() {
    return (
       <div>
            <h2>Google Books Search</h2> 
            <div className="container d-inline-flex">  
                <input
                    type="text"
                    name="search"
                    className="form-control mr-3 mb-5"
                    placeholder="Search for Books ..."
                    autoComplete="off"
                    onKeyPress={event => this.handleEvent(event)}
                />
                <button
                    type="submit"
                    className="btn btn-secondary mb-5"
                    onClick={this.getBooks}>
                    Search
                </button>
        </div> 
      </div>
    )
  }
}

export default SearchBook