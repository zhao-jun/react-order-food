import {ADD_NUM, MINUS_NUM} from '../constants/actionTypes';
import {DELETE_NUM,SELECTED_ALL,SELECTED_ONE} from '../constants/actionTypes';
import { fromJS } from 'immutable';

/*
//错误方法
const addMainNum = (state,action) => {
    state.foods.push(action.food);
    return state;
};
*/


const initialState = {
    selected:1,
    foods: [
    {
        "id": 1,
        "pic": "one",
        "describe": "香辣多汁，口感鲜美",
        "title": "二块香辣鸡翅",
        "price": 10.5,
        "num": 0,
        "select":1
    },
    {
        "id": 2,
        "pic": "two",
        "describe": "具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁",
        "title": "一块吮指原味鸡",
        "price": 11,
        "num": 0,
        "select":1
    },
    {
        "id": 3,
        "pic": "three",
        "describe": "整块无骨鸡腿肉，浓郁汉堡酱，香脆甜辣多汁",
        "title": "香辣鸡腿堡",
        "price": 17,
        "num": 0,
        "select":1
    },
    {
        "id": 4,
        "pic": "four",
        "describe": "口感嫩滑，浓郁香甜",
        "title": "葡式蛋挞(经典)1只装",
        "price": 7.5,
        "num": 0,
        "select":1
    },
    {
        "id": 5,
        "pic": "five",
        "describe": "细腻香浓的土豆泥加上润滑可口的鸡汁",
        "title": "醇香土豆泥",
        "price": 6,
        "num": 0,
        "select":1
    },
    {
        "id": 6,
        "pic": "six",
        "describe": "选用无骨鸡腿柳条、搭配传统甜面酱和新鲜爽脆黄瓜，酱香浓郁的老北京味。",
        "title": "老北京鸡肉卷",
        "price": 15,
        "num": 0,
        "select":1
    },
    {
        "id": 7,
        "pic": "seven",
        "describe": "鲜嫩多汁，具烧烤香和甜辣味",
        "title": "二块新奥尔良烤翅",
        "price": 11.5,
        "num": 0,
        "select":1
    },
    {
        "id": 8,
        "pic": "eight",
        "describe": "优质甜玉米，外表金黄诱人，口感香甜多汁。",
        "title": "香甜粟米棒",
        "price": 8,
        "num": 0,
        "select":1
    }
]
};
function changeSelectedAll(state,selected) {
    state = fromJS(state).set('selected',1- selected ).toJS();
    for(var i=0;i<state.foods.length;i++){
        state = fromJS(state).setIn(['foods', i,'select'],1- selected ).toJS();
    }
    return state;
}

function changeSelectedOne(state,food) {
    state = fromJS(state).setIn(['foods', food.id-1,'select'],1 -food.select ).toJS();
    for(var i=0;i<state.foods.length;i++){
        if(state.foods[i].select == 0){
            state = fromJS(state).set('selected',0 ).toJS();
            break;
        } else {
            state = fromJS(state).set('selected',1 ).toJS();
        }
    }
    return state;
}


function changeNum(state = initialState, action) {
    switch (action.type) {
/*        case CREAT_FOOD:
            return action.foods;*/
        case ADD_NUM:
            return fromJS(state).setIn(['foods', action.food.id-1,'num'],action.food.num+1 ).toJS();
            //错误例子，不能直接修改state
            // return addMainNum(state,action);
        case MINUS_NUM:
            return fromJS(state).setIn(['foods', action.food.id-1,'num'],action.food.num-1 ).toJS();
        case DELETE_NUM:
            return fromJS(state).setIn(['foods', action.food.id-1,'num'],0 ).toJS();
        case SELECTED_ALL:
            return changeSelectedAll(state,action.selected);
        case SELECTED_ONE:
            return changeSelectedOne(state,action.food);
        default:
            return state;
    }
}

export default changeNum;