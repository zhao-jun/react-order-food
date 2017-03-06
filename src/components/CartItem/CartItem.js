import React from 'react';
import './CartItem.scss';

const CartItem = ({food,addNum,minusNum,deleteNum,selectedOne}) => (
    <div className="CartItem">
        <div className="left" onClick={()=>selectedOne(food)}>
            {food.select ?
                <div className = 'icon icon-selected'>
                </div> :
                <div className = 'icon'>
                </div>
            }
        </div>
        <div className="img">
            <img className="pic" src={require('../../images/img-'+ food.pic +'.png')} />
        </div>
        <div className="center">
            <div className="name">{food.title}</div>
            <div className="num">
                <span className="change" onClick={()=>minusNum(food)}>-</span>
                <span className="change">{food.num}</span>
                <span className="change" onClick={()=>addNum(food)}>+</span>
            </div>
        </div>
        <div className="right">
            <span className="price">&yen;{food.price}</span><br />
            <img className="delete" src={require('../../images/delete.png')} onClick = {()=>deleteNum(food)} />
        </div>
    </div>
)

export default CartItem;

