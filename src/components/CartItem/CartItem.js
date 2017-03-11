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
                <span className="change color" onClick={()=>minusNum(food)}>-</span>
                <span className="change">{food.num}</span>
                <span className="change color" onClick={()=>addNum(food)}>+</span>
            </div>
        </div>
        <div className="right">
            <span className="price">单价:&yen;{food.price}</span>
            <span className="count">&yen;{food.price*food.num}</span>
            <img className="delete" src={require('../../images/delete.png')} onClick = {()=>deleteNum(food)} />
        </div>
    </div>
)

export default CartItem;

