import {DELETE_NUM,SELECTED_ALL,SELECTED_ONE} from '../constants/actionTypes';

export const deleteNum = (food) => ({
    type:DELETE_NUM,
    food
});

export const selectedAll = (selected) => ({
    type:SELECTED_ALL,
    selected
});

export const selectedOne = (food) => ({
    type:SELECTED_ONE,
    food
});

