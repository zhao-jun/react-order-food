import React from 'react';
import './CartFooter.scss';

const CartFooter = () => (
    <div className="CartFooter">
        <div className="left">
            <div className="icon"></div>
        </div>
        <div className="center">
            <span>总价：</span><span className="price">&yen;15</span>
        </div>
        <div className="right">
            <button className="order">下单</button>
        </div>
    </div>
)

export default CartFooter;