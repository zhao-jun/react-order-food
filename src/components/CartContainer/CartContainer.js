import React from 'react';
import CartHeader from '../CartHeader/CartHeader';
import CartItem from '../CartItem/CartItem';
import CartFooter from '../CartFooter/CartFooter';

const CartContainer = () => (
     <div>
         <CartHeader />
         <CartItem />
         <CartFooter />
     </div>
);

export default CartContainer;