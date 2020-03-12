import React from 'react';
// import BookList from './BookList';

// tytuł pozycji
// autorów
// datę wydania
// opis pozycji
// kategorie 
// zdjęcie okładki

class Modal extends React.Component {

  checkClick (event) {
    if(event.target.className==='shadowBcg')
    this.props.onClose(console.log(event.target.className))
  }

  render() {
    if(!this.props.show) {
      return null;
    }
    const {selectedBook}=this.props
    return (
      
      <div className="shadowBcg" onClick={event => this.checkClick(event)}>
        <div className="modal">
          <div className="m-2 w-100 border border-secondary rounded-lg p-3 overflow-hidden">
            <div className="font-weight-bold">{this.props.children.title}</div>
            <div>{this.props.children.authors}</div>
            <div>Published: {this.props.children.publishedDate}</div>
            <div className="h-50 m-2 overflow-hidden">
                { this.props.children.imageLinks !== undefined &&
                  <img src={this.props.children.imageLinks.thumbnail} alt=""/>
                  }
            </div>
            <a href={this.props.children.previewLink} 
              target="_blank"
              size="sm"
              style={{
                paddingLeft : 40,
                paddingRight : 40,
                marginBottom: 10, 
                float:"right", 
                
                marginLeft: 10 }}
              className="btn btn-secondary">
              Preview
            </a>
            <span>Description: {this.props.children.description}</span>
          </div>
          <div className="footer">
            <button 
              onClick={this.props.onClose}
              type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;