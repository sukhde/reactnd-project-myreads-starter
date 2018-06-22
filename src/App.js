import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf.js'
import Books from './Books.js'
import './App.css'

class BooksApp extends React.Component {
    state = {
      books:[],
      showSearchPage: false,
      }
    allBooks = ()=>{
      this.setState({
      })
      BooksAPI.getAll().then((books)=>{
        this.setState({books})
        console.log(books)
      })
  }
  
 
    whenUpdateBooks = ()=>{
      BooksAPI.update().then(() => {
        this.setState((previousState) =>{
      })
      }
      )
      }
    componentDidMount() {
      this.allBooks()
    }
    render() {
    return (
      <div className="app">
         {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
             <BookShelf/>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
          </div>
            )}
            {this.state.books.map((allBooks) => {
              return ( 
                  <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${allBooks.imageLinks.smallThumbnail})`}}></div>
                    <div className="book-shelf-changer">
                      <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                      </select>
                    </div>
                    </div>
                    <div className="book-title">{allBooks.title}</div>
                    <div className="book-authors">{allBooks.authors}</div>
                    </div>
                )}
              )}
        </div>
      )
    }
  }
export default BooksApp
