import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';


const Cards = () => {

    const products = [
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "2M Shoes",
            "star": 4.5,
            "img": "https://i.ibb.co/PcdkPxT/revolt-164-6w-VEHf-I-unsplash-removebg-preview.png",
            "price": 17,
        },
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "Cool HeadPhone",
            "star": 3.5,
            "img": "https://i.ibb.co/sgDpy7K/alexunder-hess-b-WZAPKm0z-ZE-unsplash-removebg-preview.png",
            "price": 28,
        },
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "Wireless Mouse",
            "star": 4,
            "img": "https://i.ibb.co/9swWN0b/oscar-ivan-esquivel-arteaga-Ztx-ED1cp-B1-E-unsplash-removebg-preview.png",
            "price": 8,
        },
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "iPhone 12Pro",
            "star": 3.5,
            "img": "https://i.ibb.co/tQPH7FH/wesley-tingey-s-PBRRw-T-f-KA-unsplash-removebg-preview.png",
            "price": 998,
        },
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "Mackbook 65",
            "star": 5,
            "img": "https://i.ibb.co/YQYFyK7/maxim-hopman-Hin-rzh-Od-Ws-unsplash-removebg-preview.png",
            "price": 178,
        },
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "iPhone 12Pro",
            "star": 3.5,
            "img": "https://i.ibb.co/tQPH7FH/wesley-tingey-s-PBRRw-T-f-KA-unsplash-removebg-preview.png",
            "price": 998,
        },
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "Mackbook 65",
            "star": 5,
            "img": "https://i.ibb.co/YQYFyK7/maxim-hopman-Hin-rzh-Od-Ws-unsplash-removebg-preview.png",
            "price": 178,
        },
        {
            "key": "B002RL8IYK",
            "category": "laptop",
            "name": "Wireless Mouse",
            "star": 4,
            "img": "https://i.ibb.co/9swWN0b/oscar-ivan-esquivel-arteaga-Ztx-ED1cp-B1-E-unsplash-removebg-preview.png",
            "price": 8,
        },
      
       
    ]

    console.log(products.length);

    return (


        <div className='d-flex justify-content-center align-items-center packages-bg'>
            <div>
                <h1 className=" text-center my-5">Our <span className="blue-color">Products</span></h1>
                <div className="row d-flex justify-content-center">
                 
                    {
                        products?.map(product => <Card
                            key={product.key}
                            product={product}
                        ></Card>)
                    }

                </div>

            </div>
        </div>
       

    );
};

export default Cards;