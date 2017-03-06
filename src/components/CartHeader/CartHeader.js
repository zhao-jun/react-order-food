import React from 'react';
import './CartHeader.scss';

const CartHeader = ({state,selectedAll})=> (
    <header className="CartHeader">
        <div className="left" onClick={()=>selectedAll(state.selected)}>
            {state.selected ?
                <div className = 'icon icon-selected'>
                </div> :
                <div className = 'icon'>
                </div>
            }
        </div>
        <div className="right">
            <span className="shopping">购物车</span>
        </div>
    </header>
)

export default CartHeader;