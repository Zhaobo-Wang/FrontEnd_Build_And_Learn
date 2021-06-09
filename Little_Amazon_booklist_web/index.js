import React from 'react';
import ReactDom from 'react-dom'
//css
import './index.css';
import {Bookdata} from './bookdata'


function BookList(){
  return(
    <div className='booklist'>
      {Bookdata.map((book) =>{
        const {img,title,author} = book;
        return <Book {...book}></Book>
      })}
    </div>
  )
}

const Book = (props) => {
  const {img,title,author} = props;
  return(
    <div class='book'> 
      <img src={img}></img>
      <h3>{title}</h3>
      <h5>{author}</h5>
    </div>
  )
}


ReactDom.render(<BookList />,document.getElementById('root'));