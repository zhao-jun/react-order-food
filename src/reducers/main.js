import {ADD_NUM, MINUS_NUM} from '../constants/actionTypes';

const addMainNum = (state,food) => {
    food.num = food.num +1;
    return food;
};


function changeNum(state=[], action) {
    switch (action.type) {
        case ADD_NUM:
            return addMainNum(state,action.food);
        default:
            return state;
    }
}

export default changeNum;