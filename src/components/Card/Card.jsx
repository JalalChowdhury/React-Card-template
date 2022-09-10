import React from 'react';
import { Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import './Card.css';

const Card = (props) => {

    const { category, star, img, name, price } = props.product;
    return (
        <div className="card mx-2 my-1">
            {/* src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" */}
            <div className="imgBox">
                <img src={img} alt="" className="mouse" />
            </div>

            <div className="contentBox">
                <h3>{name}</h3>
                <StarRatings
                    rating={star}
                    starDimension="20px"
                    starSpacing="6px"
                    starRatedColor='rgb(250, 237, 56)'
                    className='rating'
                />
                <h2 className="price">$ {price}</h2>
                <a href="#" className="buy">Buy Now</a>
            </div>

        </div>
    );
};

export default Card;