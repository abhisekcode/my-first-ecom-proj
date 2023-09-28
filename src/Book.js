import React, { useState } from 'react';
import './Book.css';
const Book = (props) => {
const{image,title,publisher,price}=props;
    const [number,setnumber]=useState(0);

    const handleClick = () =>{
      setnumber(number+1);
    }
  return (
    <div className='book'>
      <div className='book-image'>
      <img src={image} />
      </div>
      <div className='book-info'>
      <h2>{title}</h2>
      <p className='book-author'>by {publisher}</p>
      <p className='book-price'>${price}</p>
      <button>Add to Cart</button>
      <button className='basket' onClick={handleClick}>Basket {number}</button>
      </div>
    </div>
  )
}

export default Book;
