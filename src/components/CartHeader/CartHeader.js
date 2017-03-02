import React from 'react';
import './CartHeader.scss';

const CartHeader = ()=> (
    <header className="CartHeader">
        <div className="left">
            <div className = 'icon'>
            </div>
        </div>
        <div className="right">
            <span className="shopping">购物车</span>
        </div>
    </header>
)

export default CartHeader;