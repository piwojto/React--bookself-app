import React, { Component } from 'react';
import axios from "axios";

// input tekstowy do wpisania nazwy filtra
// Button do obsługi zapytania axiosa z wpisanym przez użytkownika query

const booksUrl="https://www.googleapis.com/books/v1/volumes?q="; 

class SearchBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
        textInput: '',
        imBusy: false,
        noBooks:0
        }
    }
    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        this.setState({imBusy:true})
        axios.get(booksUrl + this.state.textInput + '&maxResults=40')
        .then((response) => {
            this.props.onSearchResult(response.data.items)
            // this.setState({noBooks:response.status});
            // console.log(this.state.noBooks)
        }).catch((error,noBooks) => {
            console.log('error ',error);
            this.setState({noBooks:400});
            console.log(this.state.noBooks)
            // this.setState({imBusy:false})
        });
        // return 
        }  
        
  handleEvent = (event) => {
    this.setState({ textInput: event.target.value });
    if(event.target.value==='')
    (console.log('no books'))
    else (
    // console.log(event.target.value)
    event.key === 'Enter' && this.getBooks()
    )
  }

   render() {
       const {imBusy, noBooks} = this.state
       if(imBusy){
        return (<h4>Searching, please wait</h4>)
       }
       setTimeout(()=>{
        this.setState({
            imBusy:false
        })
    }, 5000)

    if(noBooks===400){
        return (<h4>Searching error</h4>)
       }
       setTimeout(()=>{
        this.setState({
            noBooks:0
        })
    }, 5000)
       
    return (
         
    
       <div className="container bcg p-2 rounded-lg">
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