import {ADD_NUM, MINUS_NUM} from '../constants/actionTypes';

export const addNum = (food) => ({
    type:ADD_NUM,
    food
});

export const minusNum = (food) => ({
    type:MINUS_NUM,
    food
});
