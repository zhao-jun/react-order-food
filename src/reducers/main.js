import {ADD_NUM, MINUS_NUM} from '../constants/actionTypes';
import { fromJS } from 'immutable';

/*
//错误方法
const addMainNum = (state,action) => {
    state.foods.push(action.food);
    return state;
};
*/


const initialState = {
    foods: [
    {
        "id": 1,
        "pic": "one",
        "describe": "香辣多汁，口感鲜美",
        "title": "二块香辣鸡翅",
        "price": 10.5,
        "num": 0
    },
    {
        "id": 2,
        "pic": "two",
        "describe": "具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁",
        "title": "一块吮指原味鸡",
        "price": 11,
        "num": 0
    },
    {
        "id": 3,
        "pic": "three",
        "describe": "整块无骨鸡腿肉，浓郁汉堡酱，香脆甜辣多汁",
        "title": "香辣鸡腿堡",
        "price": 17,
        "num": 0
    }
]
};


function changeNum(state = initialState, action) {
    switch (action.type) {
/*        case CREAT_FOOD:
            return action.foods;*/
        case ADD_NUM:
            const newfood = {
                "id": 4,
                "pic": "three",
                "describe": "整块无骨鸡腿肉，浓郁汉堡酱，香脆甜辣多汁",
                "title": "香辣鸡腿堡",
                "price": 17,
                "num": 0
            };
            return fromJS(state).setIn(['foods', action.food.id-1,'num'],action.food.num+1 ).toJS();
            //错误例子，不能直接修改state
            // return addMainNum(state,action);

        case MINUS_NUM:
            return fromJS(state).setIn(['foods', action.food.id-1,'num'],action.food.num-1 ).toJS();
        default:
            return state;
    }
}

export default changeNum;