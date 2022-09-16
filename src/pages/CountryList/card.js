import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  return (
    <>
      <li className='cards-item'>
        <Link className='cards-item-link' to={props.path}>
          <figure className='cards-item-pic-wrap' data-category={props.label}>
            <img
              className='cards-item-img'
              alt='Travel'
              src={props.src}
            />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
