import React from 'react';
import '../styles/Goods.css';

function GoodsCard(props) {
    return (
        <div className="goods-card">
            <img src={props.image} alt={props.name} style={imageStyle} />
            <h3>{props.name}</h3>
            <p>Ціна: {props.price} грн</p>
        </div>
    );
}

const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px'
};

export default GoodsCard;
