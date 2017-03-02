import React from 'react';
import './CartItem.scss';

const CartItem = () => (
    <div className="CartItem">
        <div className="left">
            <div className="icon"></div>
        </div>
        <div className="img">
            <img className="pic" src={require('../../images/img-one.png')} />
        </div>
        <div className="center">
            <div className="name">二块香辣鸡翅</div>
            <div className="num">
                <span className="change">-</span>
                <span className="change">0</span>
                <span className="change">+</span>
            </div>
        </div>
        <div className="right">
            <span className="price">&yen;15</span><br />
            <img className="delete" src={require('../../images/delete.png')} />
        </div>
    </div>
)

export default CartItem;

