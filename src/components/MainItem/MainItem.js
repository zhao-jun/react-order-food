import React from 'react';
import './MainItem.scss';

const MainItem = ({food,onSelect}) => (
    <div className="container">
        <div className="left">
            <img className="img" src={require('../../images/img-'+ food.pic + '.png')} />
        </div>
        <div className="right">
            <p className="title">{food.title}</p>
            <p className="describe">{food.describe}</p>
            <p className="sale">月售425份 好评率100%</p>
            <span className="price">{food.price}</span>
        </div>
        <div className="button">
            <span className="button-item">-</span>
            <span className="number">{food.num}</span>
            <span className="button-item" onClick = {()=>onSelect(food)}>+</span>
        </div>
    </div>
);

export default MainItem;