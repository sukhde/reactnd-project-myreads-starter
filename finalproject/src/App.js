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

     getMyBooks(){
      BooksAPI.getAll().then((books)=>{
        this.setState({books})
        console.log(books)
      })
  }
  
  componentDidMount() {
    this.getMyBooks()
  } 
    whenUpdateBooks = (myBook, myShelf )=>{
      BooksAPI.update(myBook, myShelf).then(() => {
       this.getMyBooks();
      }
      )
      }
    
      
    render() {
    return (
      <div id="root">
      <div class="app">
      <div class="list-books">
      <div class="list-books-title">
      <h1>MyReads</h1>
      </div>
      <div class="list-books-content">
      <div>
        <div class="bookshelf">
        <h2 class="bookshelf-title">Currently Reading</h2>
        <div class="bookshelf-books">
        <ol class="books-grid"><li>
          <div class="book"><div class="book-top">
          <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=PGR2AwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&amp;source=gbs_api&quot;);"></div><div class="book-shelf-changer"><select><option value="move" disabled="">Move to...</option><option value="currentlyReading">Currently Reading</option><option value="wantToRead">Want to Read</option><option value="read">Read</option><option value="none">None</option></select></div></div><div class="book-title">To Kill a Mockingbird</div><div class="book-authors">Harper Lee</div></div></li><li><div class="book"><div class="book-top"><div class="book-cover" style="width: 128px; height: 188px; background-image: url(&quot;http://books.google.com/books/content?id=yDtCuFHXbAYC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&amp;source=gbs_api&quot;);"></div><div class="book-shelf-changer"><select><option value="move" disabled="">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
          </select>
          </div>
          </div>
          <div class="book-title">Ender's Game</div>
          <div class="book-authors">Orson Scott Card</div>
          </div>
          </li>
          </ol>
          </div>
          </div>
          <div class="bookshelf">
          <h2 class="bookshelf-title">Want to Read</h2>
          <div class="bookshelf-books">
          <ol class="books-grid"><li>
            <div class="book">
            <div class="book-top">
            <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=uu1mC6zWNTwC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&amp;source=gbs_api&quot;);"></div>
            <div class="book-shelf-changer">
            <select>
              <option value="move" disabled="">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
              </select>
              </div>
              </div>
              <div class="book-title">1776</div>
              <div class="book-authors">David McCullough</div>
              </div>
              </li>
              <li>
                <div class="book">
                <div class="book-top">
                <div class="book-cover" style="width: 128px; height: 192px; background-image: url(&quot;http://books.google.com/books/content?id=wrOQLV6xB-wC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&amp;source=gbs_api&quot;);"></div>
                <div class="book-shelf-changer">
                <select>
                  <option value="move" disabled="">Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                  </select>
                  </div>
                  </div>
                  <div class="book-title">Harry Potter and the Sorcerer's Stone</div>
                  <div class="book-authors">J.K. Rowling</div>
                  </div>
                  </li>
                  </ol>
                  </div>
                  </div>
                  <div class="bookshelf">
                  <h2 class="bookshelf-title">Read</h2>
                  <div class="bookshelf-books">
                  <ol class="books-grid">
                  <li>
                    <div class="book">
                    <div class="book-top">
                    <div class="book-cover" style="width: 128px; height: 192px; background-image: url(&quot;http://books.google.com/books/content?id=pD6arNyKyi8C&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&amp;source=gbs_api&quot;);"></div><div class="book-shelf-changer"><select><option value="move" disabled="">Move to...</option><option value="currentlyReading">Currently Reading</option><option value="wantToRead">Want to Read</option><option value="read">Read</option><option value="none">None</option></select></div></div><div class="book-title">The Hobbit</div><div class="book-authors">J.R.R. Tolkien</div></div></li><li><div class="book"><div class="book-top"><div class="book-cover" style="width: 128px; height: 174px; background-image: url(&quot;http://books.google.com/books/content?id=1q_xAwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&amp;source=gbs_api&quot;);"></div><div class="book-shelf-changer">
                    <select>
                      <option value="move" disabled="">Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                      </select></div>
                      </div>
                      <div class="book-title">Oh, the Places You'll Go!</div>
                      <div class="book-authors">Seuss</div>
                      </div></li><li><div class="book">
                      <div class="book-top">
                      <div class="book-cover" style="width: 128px; height: 192px; background-image: url(&quot;http://books.google.com/books/content?id=32haAAAAMAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&amp;source=gbs_api&quot;);"></div>
                      <div class="book-shelf-changer">
                      <select>
                        <option value="move" disabled="">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                        
                        </div>
                        </div>
                        <div class="book-title">The Adventures of Tom Sawyer</div>
                        <div class="book-authors">Mark Twain</div>
                        </div>
                        </li>
                        </ol>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div class="open-search">
                        <a>Add a book</a>
                        </div>
                        </div>
                        <div class="book">
                        <div class="book-top">
                        <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=nggnmAEACAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api&quot;);"></div>
                        <div class="book-shelf-changer">
                        <select>
                          <option value="move" disabled="">Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                          </select>
                          </div>
                          </div>
                          <div class="book-title">The Linux Command Line</div>
                          <div class="book-authors">William E. Shotts, Jr.</div>
                          </div>
                          <div class="book">
                          <div class="book-top">
                          <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=sJf1vQAACAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api&quot;);"></div>
                          <div class="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                            </div>
                            </div>
                            <div class="book-title">Learning Web Development with React and Bootstrap</div>
                            <div class="book-authors">Harmeet SinghMehul Bhatt</div>
                            </div>
                            <div class="book">
                            <div class="book-top">
                            <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=evuwdDLfAyYC&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api&quot;);"></div>
                            <div class="book-shelf-changer">
                            <select>
                              <option value="move" disabled="">Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                              </select>
                              </div>
                              </div>
                              <div class="book-title">The Cuckoo's Calling</div>
                              <div class="book-authors">Robert Galbraith</div>
                              </div>
                              <div class="book">
                              <div class="book-top">
                              <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=74XNzF_al3MC&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api&quot;);"></div>
                              <div class="book-shelf-changer">
                              <select>
                                <option value="move" disabled="">Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                </select>
                                </div>
                                </div>
                                <div class="book-title">Lords of Finance</div>
                                <div class="book-authors">Liaquat Ahamed</div>
                                </div>
                                <div class="book">
                                <div class="book-top">
                                <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=jAUODAAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api&quot;);"></div>
                                <div class="book-shelf-changer">
                                <select>
                                  <option value="move" disabled="">Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                  </select>
                                  </div>
                                  </div>
                                  <div class="book-title">Needful Things</div>
                                  <div class="book-authors">Stephen King</div>
                                  </div>
                                  <div class="book">
                                  <div class="book-top">'
                                  <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=IOejDAAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api&quot;);"></div>
                                  <div class="book-shelf-changer">
                                  <select>
                                    <option value="move" disabled="">Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                    </select>
                                    </div>
                                    </div>
                                    <div class="book-title">React</div>
                                    <div class="book-authors">Nils HartmannOliver Zeigermann</div>
                                    </div>
                                    <div class="book">
                                    <div class="book-top">
                                    <div class="book-cover" style="width: 128px; height: 193px; background-image: url(&quot;http://books.google.com/books/content?id=1wy49i-gQjIC&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api&quot;);"></div>
                                    <div class="book-shelf-changer">
                                    <select>
                                      <option value="move" disabled="">Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                      </select>
                                      </div>
                                      </div>
                                      <div class="book-title">Satire TV</div>
                                      <div class="book-authors">Jonathan GrayJeffrey P. JonesEthan Thompson</div>
                                      </div>
                                      </div>
                                      </div>
           
      )
    }
  }
export default BooksApp
