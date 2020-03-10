(this["webpackJsonpbookself-app"]=this["webpackJsonpbookself-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(16),l=n.n(s),c=(n(23),n(2)),r=n(3),i=n(5),u=n(4),m=n(6),h=(n(24),n(17)),d=n.n(h),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).getBooks=function(){n.setState({imBusy:!0}),d.a.get("https://www.googleapis.com/books/v1/volumes?q="+n.state.textInput+"&maxResults=40").then((function(e){n.props.onSearchResult(e.data.items)})).catch((function(e,t){console.log("error ",e),n.setState({noBooks:400}),console.log(n.state.noBooks)}))},n.handleEvent=function(e){n.setState({textInput:e.target.value}),"Enter"===e.key&&n.getBooks()},n.state={textInput:"",imBusy:!1,noBooks:0},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"render",value:function(){var e=this,t=this.state,n=t.imBusy,a=t.noBooks;return n?o.a.createElement("h4",null,"Searching, please wait"):(setTimeout((function(){e.setState({imBusy:!1})}),5e3),400===a?o.a.createElement("h4",null,"Searching error"):(setTimeout((function(){e.setState({noBooks:0})}),5e3),o.a.createElement("div",{className:"container bcg p-2 rounded-lg"},o.a.createElement("h2",null,"Google Books Search"),o.a.createElement("div",{className:"container d-inline-flex"},o.a.createElement("form",null,o.a.createElement("input",{type:"text",name:"search",className:"form-control mr-3 mb-5",placeholder:"Search for Books ...",autoComplete:"off",value:this.textInput,onChange:function(t){return e.handleEvent(t)}}),o.a.createElement("button",{type:"submit",className:"btn btn-secondary mb-5",onClick:this.getBooks},"Search"))))))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"checkClick",value:function(e){console.log(e.target.className),"shadowBcg"===e.target.className&&this.props.onClose(console.log(e.target.className))}},{key:"render",value:function(){var e=this;if(!this.props.show)return null;this.props.selectedBook;return o.a.createElement("div",{className:"shadowBcg",onClick:function(t){return e.checkClick(t)}},o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"m-2 w-100 border border-secondary rounded-lg p-3 overflow-hidden"},o.a.createElement("div",{className:"font-weight-bold"},"Title: ",this.props.children.title),o.a.createElement("div",null,"Authors: ",this.props.children.authors),o.a.createElement("div",null,"Published: ",this.props.children.publishedDate),o.a.createElement("div",{className:"h-50 m-2"},void 0!==this.props.children.imageLinks&&o.a.createElement("img",{src:this.props.children.imageLinks.thumbnail,alt:""})),o.a.createElement("span",null,"Description: ",this.props.children.description)),o.a.createElement("div",{className:"footer"},o.a.createElement("button",{onClick:this.props.onClose,type:"button",className:"close","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}}]),t}(o.a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).toggleModal=function(e){n.setState({isOpen:!n.state.isOpen});var t=e;n.setState({selectedBook:t})},n.state={isOpen:!1,selectedBook:""},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},this.props.noBooks,o.a.createElement("div",{className:"row"},this.props.bookList.map((function(t){return o.a.createElement("div",{key:t.id,className:"col-md-3 border border-secondary rounded-lg"},o.a.createElement("div",{className:"box m-2 overflow-hidden",onClick:function(n){e.toggleModal(t.volumeInfo)}},o.a.createElement("div",null,void 0!==t.volumeInfo.imageLinks&&o.a.createElement("img",{src:t.volumeInfo.imageLinks.smallThumbnail,alt:""}),o.a.createElement("div",null,o.a.createElement("div",null,"Title: ",t.volumeInfo.title),o.a.createElement("div",null,"Authors: ",t.volumeInfo.authors||"N/A")))))})),o.a.createElement(b,{show:this.state.isOpen,onClose:this.toggleModal},this.state.selectedBook)))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleBookList=function(e){n.setState({bookList:e})},n.state={bookList:[],noBooks:0},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.state.noBooks),o.a.createElement("div",{className:"App"},o.a.createElement(p,{onSearchResult:this.handleBookList}),o.a.createElement(k,{bookList:this.state.bookList}))}}]),t}(a.Component);l.a.render(o.a.createElement(f,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2f6eeac2.chunk.js.map