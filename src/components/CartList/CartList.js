import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartList.scss';

const CartList = ({foods,addNumCart,minusNumCart,deleteNumCart,selectedOne}) => (
    <div className="CartList">
        {
            foods.map(food =>(
                food.num ?
                <CartItem
                    key={food.id}
                    food = {food}
                    addNum = {addNumCart}
                    minusNum = {minusNumCart}
                    deleteNum = {deleteNumCart}
                    selectedOne = {selectedOne}
                /> : null
            ))
        }
    </div>
);

export default CartList;
