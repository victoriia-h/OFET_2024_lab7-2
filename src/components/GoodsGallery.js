import React from 'react';
import GoodsCard from './GoodsCard';
import '../styles/Goods.css';
import product1 from '../images/carrot.png';
import product2 from '../images/cabbage.png';
import product3 from '../images/cucumber.png';
import product4 from '../images/onion.png';
import product5 from '../images/tomato.png';
import product6 from '../images/mushrooms.png';

function GoodsGallery() {
    const goods = [
        { id: 1, name: 'Морква', price: 100, image: product1 },
        { id: 2, name: 'Капуста', price: 150, image: product2 },
        { id: 3, name: 'Огірки', price: 200, image: product3 },
        { id: 4, name: 'Цибуля', price: 250, image: product4 },
        { id: 5, name: 'Томати', price: 300, image: product5 },
        { id: 6, name: 'Гриби', price: 350, image: product6 },
    ];

    return (
        <div className="goods-gallery">
            {goods.map(good => (
                <GoodsCard
                    key={good.id}
                    name={good.name}
                    price={good.price}
                    image={good.image}
                />
            ))}
        </div>
    );
}

export default GoodsGallery;
