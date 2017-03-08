import {ADD_NUM, MINUS_NUM,CREATE_FOOD,SEARCH_FOOD} from '../constants/actionTypes';

export function creatFood(){
    return (dispatch)=> {
        fetch('./../food.json')
            // .then((response) => response.json())
            .then((foods) => (dispatch({
                type: CREATE_FOOD,
                foods
            })))
        }
}

export const addNum = (food) => ({
    type:ADD_NUM,
    food
});

export const minusNum = (food) => ({
    type:MINUS_NUM,
    food
});

export const searchFood = (value) => ({
    type:SEARCH_FOOD,
    value
});
