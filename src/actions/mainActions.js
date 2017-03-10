import {ADD_NUM, MINUS_NUM,CREATE_FOOD,SEARCH_FOOD,SCROLL_CHANGE,CLICK_SCROLL} from '../constants/actionTypes';

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

export const scrollChange = (height) => ({
    type:SCROLL_CHANGE,
    height
});

export const clickScroll = (id) => ({
    type:CLICK_SCROLL,
    id
});

