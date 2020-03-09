import React, { Component } from 'react';
import Modal from './Modal';

// lista kafelków z obrazkami i tytułami i autorem

const Book = (props) => {
   const {book} = props;

   return (
    <div 
    className="box m-2 overflow-hidden"
    > 
      <div>
        {book.imageLinks !== undefined &&
          <img src={book.imageLinks.smallThumbnail} alt=""/>
          }
      <div>
        <div>Title: {book.title}</div>
        <div>Authors: {book.authors || 'N/A'}</div>
      </div>
      </div>
    </div>
   )
} 

const BookList = (props) => {
 
  console.log(props.bookList);
  return (
    <div className="container">
   
    <div className="row">
      {props.bookList.map((book) => {
        // console.log(book.volumeInfo.title);
        return (
          <div 
          // book={book.volumeInfo.title} 
          className="col-md-3 border border-secondary rounded-lg"
          >
                  <Book key={book.id} book={book.volumeInfo}/>
            </div>
            )
          }
        )
      }
      
    </div>
    {/* )} */}
    </div>
    )
}  

export default BookList;