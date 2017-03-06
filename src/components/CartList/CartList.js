import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartList = ({foods,addNumCart,minusNumCart,deleteNumCart}) => (
    <div>
        {
            foods.map(food =>(
                food.num ?
                <CartItem
                    key={food.id}
                    food = {food}
                    addNum = {addNumCart}
                    minusNum = {minusNumCart}
                    deleteNum = {deleteNumCart}
                /> : null
            ))
        }
    </div>
);

export default CartList;
