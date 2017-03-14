import React from 'react';
import './CartFooter.scss';

const CartFooter = ({state,selectedAll,total}) => (
    <div className="CartFooter">
        <div className="left" onClick={()=>selectedAll(state.selected)}>
            {state.selected ?
                <div className = 'icon icon-selected'>
                </div> :
                <div className = 'icon'>
                </div>
            }
        </div>
        <div className="center">
            <span>总价：</span><span className="price">&yen;{total}</span>
        </div>
        <div className="right">
            <button className="order">下单</button>
        </div>
    </div>
)

export default CartFooter;