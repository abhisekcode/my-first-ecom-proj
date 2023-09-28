import Book from "./Book";
import React from 'react'
import books from './books.json';


const Booklist = () => {
  return (
    <div>
      {books.map((ele)=>{
        return<Book image={ele.image}  title={ele.title} publisher={ele.publisher} price={ele.price}
        />
      })}
    </div>
  );
};

export default Booklist;
