import {APPBAR_MAIN,APPBAR_CART} from '../constants/actionTypes';

export const appBarMain = (condition) => ({
    type:APPBAR_MAIN,
    condition
});

export const appBarCart = (condition) => ({
    type:APPBAR_CART,
    condition
});


