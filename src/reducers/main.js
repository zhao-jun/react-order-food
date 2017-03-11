import {ADD_NUM, MINUS_NUM,SEARCH_FOOD,SCROLL_CHANGE,CLICK_SCROLL} from '../constants/actionTypes';
import {DELETE_NUM,SELECTED_ALL,SELECTED_ONE} from '../constants/actionTypes';
import {APPBAR_MAIN,APPBAR_CART} from '../constants/actionTypes';
import { fromJS } from 'immutable';

/*
//错误方法，直接修改
const addMainNum = (state,action) => {
    state.foods.push(action.food);
    return state;
};
*/


const initialState = {
    selected:1,
    // search:'',
    active:'热销榜',
    top:'',
    list:[
        {
            "id":1,
            "title":"热销榜",
            "sub":"one",
            "num":0
        },
        {
            "id": 2,
            "title": "优惠",
            "sub":"two",
            "num":0
        },
        {
            "id": 3,
            "title": "超值多人餐",
            "sub":"three",
            "num":0
        },
        {
            "id": 4,
            "title": "美味汉堡",
            "sub":"four",
            "num":0
        },
        {
            "id": 5,
            "title": "轻松卷类",
            "sub":"five",
            "num":0
        },
        {
            "id": 6,
            "title": "缤纷小食",
            "sub":"six",
            "num":0
        },
        {
            "id": 7,
            "title": "吮指原味鸡",
            "sub":"seven",
            "num":0
        },
        {
            "id": 8,
            "title": "丰富配餐",
            "sub":"eight",
            "num":0
        }
    ],
    foods: [
        {
            "id": 1,
            "pic": 1,
            "describe": "香辣多汁，口感鲜美",
            "title": "二块香辣鸡翅",
            "sale":436,
            "comment":96,
            "price": 10.5,
            "num": 0,
            "select":1,
            "belong":"热销榜",
            "belongID":1
        },
        {
            "id": 2,
            "pic": 2,
            "describe": "具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁",
            "title": "一块吮指原味鸡",
            "sale":415,
            "comment":95,
            "price": 11,
            "num": 0,
            "select":1,
            "belong":"热销榜",
            "belongID":1
        },
        {
            "id": 3,
            "pic": 3,
            "describe": "整块无骨鸡腿肉，浓郁汉堡酱，香脆甜辣多汁",
            "title": "香辣鸡腿堡",
            "sale":194,
            "comment":95,
            "price": 17,
            "num": 0,
            "select":1,
            "belong":"热销榜",
            "belongID":1
        },
        {
            "id": 4,
            "pic": 4,
            "describe": "口感嫩滑，浓郁香甜",
            "title": "葡式蛋挞(经典)1只装",
            "sale":166,
            "comment":100,
            "price": 7.5,
            "num": 0,
            "select":1,
            "belong":"热销榜",
            "belongID":1
        },
        {
            "id": 5,
            "pic": 5,
            "describe": "细腻香浓的土豆泥加上润滑可口的鸡汁",
            "title": "醇香土豆泥",
            "sale":160,
            "comment":100,
            "price": 6,
            "num": 0,
            "select":1,
            "belong":"热销榜",
            "belongID":1
        },
        {
            "id": 6,
            "pic": 6,
            "describe": "选用无骨鸡腿柳条、搭配传统甜面酱和新鲜爽脆黄瓜，酱香浓郁的老北京味。",
            "title": "老北京鸡肉卷",
            "sale":159,
            "comment":92,
            "price": 15,
            "num": 0,
            "select":1,
            "belong":"热销榜",
            "belongID":1
        },
        {
            "id": 7,
            "pic": 7,
            "describe": "鲜嫩多汁，具烧烤香和甜辣味",
            "title": "二块新奥尔良烤翅",
            "sale":152,
            "comment":100,
            "price": 11.5,
            "num": 0,
            "select":1,
            "belong":"热销榜",
            "belongID":1
        },
        {
            "id": 8,
            "pic": 8,
            "describe": "优质甜玉米，外表金黄诱人，口感香甜多汁。",
            "title": "香甜粟米棒",
            "sale":93,
            "comment":100,
            "price": 8,
            "num": 0,
            "select":1,
            "belong":"热销榜",
            "belongID":1
        },
        {
            "id": 9,
            "pic": 9,
            "describe": "香辣鸡腿堡1个，老北京鸡肉卷，3块吮指原味鸡，九珍果汁2杯",
            "title": "鸡王争霸套餐",
            "sale":11,
            "comment":90,
            "price": 66,
            "num": 0,
            "select":1,
            "belong":"优惠",
            "belongID":2
        },
        {
            "id": 10,
            "pic": 9,
            "describe": "香辣鸡腿堡1个，老北京鸡肉卷，3块吮指原味鸡，九珍果汁2杯",
            "title": "鸡王争霸套餐",
            "sale":11,
            "comment":'',
            "price": 66,
            "num": 0,
            "select":1,
            "belong":"超值多人餐",
            "belongID":3
        },
        {
            "id": 11,
            "pic": 11,
            "describe": "2个香辣鸡腿堡+1个新奥尔良烤鸡腿堡+3块吮指原味鸡+2块香辣鸡翅+4块新奥尔良烤翅+2份醇香土豆泥+2个石榴派+1瓶1.25升百事可乐",
            "title": "超级外带全家桶",
            "sale":14,
            "comment":'',
            "price": 118,
            "num": 0,
            "select":1,
            "belong":"超值多人餐",
            "belongID":3
        },
        {
            "id": 12,
            "pic": 12,
            "describe": "香辣鸡腿堡1个+新奥尔良烤鸡腿堡1个+香辣鸡翅2块+新奥尔良烤翅2块+土豆泥1份+劲爆鸡米花（小）+石榴派（1只）+百事可乐1瓶)",
            "title": "堡堡双人餐(new)",
            "sale":12,
            "comment":100,
            "price": 74,
            "num": 0,
            "select":1,
            "belong":"超值多人餐",
            "belongID":3
        },
        {
            "id": 13,
            "pic": 13,
            "describe": "新奥尔良烤翅4块,香辣鸡翅2块,吮指原味鸡1块,黄金鸡块5块,波纹霸王薯条1份,石榴派1个",
            "title": "六味小吃桶",
            "sale":12,
            "comment":100,
            "price": 59,
            "num": 0,
            "select":1,
            "belong":"超值多人餐",
            "belongID":3
        },
        {
            "id": 14,
            "pic": 14,
            "describe": "鲜嫩Q弹的全虾排,外脆里嫩的鸡腿肉, 双重鲜美。",
            "title": "伴鸡伴虾堡",
            "sale":6,
            "comment":100,
            "price": 19,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 15,
            "pic": 15,
            "describe": "嫩弹手撕猪肉，香浓BBQ烧烤酱, 喷香燕麦面包。",
            "title": "BBQ手撕猪肉堡",
            "sale":1,
            "comment":'',
            "price": 18,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 16,
            "pic": 16,
            "describe": "伴鸡伴虾堡1个+醇香土豆泥1份+黄金鸡块（5块）+九珍果汁饮料1杯",
            "title": "伴鸡伴虾堡土豆泥餐",
            "sale":1,
            "comment":'',
            "price": 41,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 17,
            "pic": 17,
            "describe": "劲脆鸡腿堡1个+醇香土豆泥1份+黄金鸡块（5块）+九珍果汁饮料1杯",
            "title": "劲脆鸡腿堡土豆泥餐",
            "sale":1,
            "comment":'',
            "price": 39,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 18,
            "pic": 17,
            "describe": "香辣鸡腿堡1个+醇香土豆泥1份+黄金鸡块（5块）+九珍果汁饮料1杯",
            "title": "香辣鸡腿堡土豆泥餐",
            "sale":7,
            "comment":100,
            "price": 39,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 19,
            "pic": 19,
            "describe": "新奥尔良烤鸡腿堡1个+醇香土豆泥1份+黄金鸡块（5块）+九珍果汁饮料1杯",
            "title": "新奥良腿堡土豆泥餐",
            "sale":1,
            "comment":'',
            "price": 40,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 20,
            "pic": 20,
            "describe": "BBQ手撕猪肉堡1个+醇香土豆泥1份+黄金鸡块（5块）+九珍果汁饮料1杯",
            "title": "手撕猪肉堡土豆泥餐",
            "sale":2,
            "comment":'',
            "price": 40,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 21,
            "pic": 21,
            "describe": "整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。",
            "title": "香辣鸡腿堡",
            "sale":193,
            "comment":100,
            "price": 17,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 22,
            "pic": 22,
            "describe": "选用超大无骨鸡腿肉烤制，鲜嫩多汁，甜中带辣。",
            "title": "新奥尔良烤鸡腿堡",
            "sale":56,
            "comment":100,
            "price": 18,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 23,
            "pic": 23,
            "describe": "整块无骨鸡腿肉,浓郁汉堡酱，香脆鲜嫩多汁。",
            "title": "劲脆鸡腿堡",
            "sale":43,
            "comment":100,
            "price": 17,
            "num": 0,
            "select":1,
            "belong":"美味汉堡",
            "belongID":4
        },
        {
            "id": 24,
            "pic": 24,
            "describe": "BBQ手撕猪肉卷1个+醇香土豆泥1份+黄金鸡块（5块）+九珍果汁饮料1杯",
            "title": "手撕猪肉卷土豆泥餐",
            "sale":1,
            "comment":'',
            "price": 40,
            "num": 0,
            "select":1,
            "belong":"轻松卷类",
            "belongID":5
        },
        {
            "id": 25,
            "pic": 25,
            "describe": "老北京鸡肉卷1个+醇香土豆泥1份+黄金鸡块（5块）+九珍果汁饮料1杯",
            "title": "老北京卷土豆泥餐",
            "sale":2,
            "comment":'',
            "price": 38,
            "num": 0,
            "select":1,
            "belong":"轻松卷类",
            "belongID":5
        },
        {
            "id": 26,
            "pic": 26,
            "describe": "选用无骨鸡腿柳条、搭配传统甜面酱和新鲜爽脆黄瓜，酱香浓郁的老北京味。",
            "title": "老北京鸡肉卷",
            "sale":158,
            "comment":92,
            "price": 15,
            "num": 0,
            "select":1,
            "belong":"轻松卷类",
            "belongID":5
        },
        {
            "id": 27,
            "pic": 27,
            "describe": "嫩弹手撕猪肉，香浓BBQ烧烤酱",
            "title": "BBQ手撕猪肉卷",
            "sale":28,
            "comment":100,
            "price": 17,
            "num": 0,
            "select":1,
            "belong":"轻松卷类",
            "belongID":5
        },
        {
            "id": 28,
            "pic": 28,
            "describe": "吮指原味鸡2块 + 土豆泥+黄金鸡块（5块） + 九珍果汁饮料1杯",
            "title": "吮指原味鸡套餐",
            "sale":8,
            "comment":'',
            "price": 43,
            "num": 0,
            "select":1,
            "belong":"缤纷小食",
            "belongID":6
        },
        {
            "id": 29,
            "pic": 29,
            "describe": "鲜嫩多汁，具烧烤香和甜辣味",
            "title": "二块新奥尔良烤翅",
            "sale":159,
            "comment":100,
            "price": 11.5,
            "num": 0,
            "select":1,
            "belong":"缤纷小食",
            "belongID":6
        },
        {
            "id": 30,
            "pic": 30,
            "describe": "精选鸡肉烹炸，搭配调味酱，口感香鲜酥脆。",
            "title": "黄金鸡块5块装",
            "sale":75,
            "comment":100,
            "price": 10,
            "num": 0,
            "select":1,
            "belong":"缤纷小食",
            "belongID":6
        },
        {
            "id": 31,
            "pic": 31,
            "describe": "香辣多汁，口感鲜美。",
            "title": "二块香辣鸡翅",
            "sale":441,
            "comment":96,
            "price": 10.5,
            "num": 0,
            "select":1,
            "belong":"缤纷小食",
            "belongID":6
        },
        {
            "id": 32,
            "pic": 32,
            "describe": "将鸡腿肉和鸡软骨精心腌制后串成一串，包上锡纸烤到喷香四溢。鸡肉更加鲜嫩多汁，软骨更加脆嫩耐嚼。",
            "title": "1根骨肉相连加",
            "sale":12,
            "comment":100,
            "price": 8,
            "num": 0,
            "select":1,
            "belong":"缤纷小食",
            "belongID":6
        },
        {
            "id": 33,
            "pic": 33,
            "describe": "将鸡腿肉和鸡软骨精心腌制后串成一串，包上锡纸烤到喷香四溢。鸡肉更加鲜嫩多汁，软骨更加脆嫩耐嚼。",
            "title": "2根骨肉相连加",
            "sale":26,
            "comment":100,
            "price": 13.5,
            "num": 0,
            "select":1,
            "belong":"缤纷小食",
            "belongID":6
        },
        {
            "id": 34,
            "pic": 34,
            "describe": "将鸡腿肉加工成小巧造型，用经典的香辣腌料，然后手工裹上优质面粉，烹炸至金黄喷香。酥脆，鲜嫩，香辣。",
            "title": "劲爆鸡米花(小)",
            "sale":26,
            "comment":100,
            "price": 11,
            "num": 0,
            "select":1,
            "belong":"缤纷小食",
            "belongID":6
        },
        {
            "id": 35,
            "pic": 35,
            "describe": "将鸡腿肉加工成小巧造型，用经典的香辣腌料，然后手工裹上优质面粉，烹炸至金黄喷香。酥脆，鲜嫩，香辣。",
            "title": "劲爆鸡米花(大)",
            "sale":74,
            "comment":100,
            "price": 13.5,
            "num": 0,
            "select":1,
            "belong":"缤纷小食",
            "belongID":6
        },
        {
            "id": 36,
            "pic": 36,
            "describe": "香辣鸡腿堡1个 + 吮指原味鸡1块 + 九珍果汁饮料1杯",
            "title": "吮指原味鸡套餐A",
            "sale":9,
            "comment":'',
            "price": 35,
            "num": 0,
            "select":1,
            "belong":"吮指原味鸡",
            "belongID":7
        },
        {
            "id": 37,
            "pic": 37,
            "describe": "具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁。",
            "title": "一块吮指原味鸡",
            "sale":413,
            "comment":95,
            "price": 11,
            "num": 0,
            "select":1,
            "belong":"吮指原味鸡",
            "belongID":7
        },
        {
            "id": 38,
            "pic": 38,
            "describe": "优质甜玉米，外表金黄诱人，口感香甜多汁。",
            "title": "香甜粟米棒",
            "sale":92,
            "comment":100,
            "price": 8,
            "num": 0,
            "select":1,
            "belong":"丰富配餐",
            "belongID":8
        },
        {
            "id": 39,
            "pic": 39,
            "describe": "选用蔬菜配以蛋花精制而成",
            "title": "芙蓉荟蔬汤",
            "sale":51,
            "comment":100,
            "price": 8,
            "num": 0,
            "select":1,
            "belong":"丰富配餐",
            "belongID":8
        },
        {
            "id": 40,
            "pic": 40,
            "describe": "细腻香浓的土豆泥加上润滑可口的鸡汁",
            "title": "醇香土豆泥",
            "sale":150,
            "comment":100,
            "price": 6,
            "num": 0,
            "select":1,
            "belong":"丰富配餐",
            "belongID":8
        },
        {
            "id": 41,
            "pic": 41,
            "describe": "六种鲜脆蔬菜，搭配特制猕猴桃酱，酸甜爽口，健康之选！",
            "title": "鲜蔬沙拉",
            "sale":12,
            "comment":100,
            "price": 13.5,
            "num": 0,
            "select":1,
            "belong":"丰富配餐",
            "belongID":8
        }
    ]
};


function addNum(state,food,parentElement) {
    //添加动画
    if(parentElement) {
        var oSpan = document.createElement('span');
        oSpan.className = 'moveRound';
        parentElement.appendChild(oSpan);
        var newSpan = parentElement.querySelectorAll('.moveRound');
        newSpan = newSpan[newSpan.length - 1];
        setTimeout(()=>(parentElement.removeChild(newSpan)), 900);

        //若是在下单界面添加，改变商品和购物车选中状态
        state = fromJS(state).set('selected',1 ).toJS();
        var i,len = state.foods.length;
        for(i=0;i<len;i++){
            if(state.foods[i].select!=1) {
                state = fromJS(state).setIn(['foods', i, 'select'], 1).toJS();
            }
        }
    }

    var oldNum = state.list[food.belongID-1].num+1;
    state = fromJS(state).setIn(['foods', food.id-1,'num'],food.num+1 ).setIn(['list', food.belongID-1,'num'],oldNum).toJS();

    return state;
}

function minusNum(state,food) {
    var oldNum = state.list[food.belongID-1].num-1;
    state = fromJS(state).setIn(['foods', food.id-1,'num'],food.num-1 ).setIn(['list', food.belongID-1,'num'],oldNum).toJS();

    return state;
}

function deleteNum(state,food) {

    var oldNum = state.list[food.belongID-1].num-food.num;
    state = fromJS(state).setIn(['foods', food.id-1,'num'],0 ).setIn(['foods', food.id-1,'select'],1 ).setIn(['list', food.belongID-1,'num'],oldNum).toJS();

    //删除商品后购物车选中状态检查
    var len = state.foods.length,i;
    for(i=0;i<len;i++){
        //存在未选中，则返回
        if (state.foods[i].select!==1){
            return state;
        }
    }
    //若都选中，则改变状态
    state = fromJS(state).set('selected',1 ).toJS();
    return state;
}


function changeSelectedAll(state,selected) {
    state = fromJS(state).set('selected',1- selected ).toJS();
    var i,len = state.foods.length;
    for(i=0;i<len;i++){
        state = fromJS(state).setIn(['foods', i,'select'],1- selected ).toJS();
    }
    return state;
}

function changeSelectedOne(state,food) {
    state = fromJS(state).setIn(['foods', food.id-1,'select'],1 -food.select ).toJS();
    var i,len = state.foods.length;
    for(i=0;i<len;i++){
        if(state.foods[i].select == 0){
            state = fromJS(state).set('selected',0 ).toJS();
            break;
        } else {
            state = fromJS(state).set('selected',1 ).toJS();
        }
    }
    return state;
}

function changeActive(state,height) {
/*    var oneRem = document.documentElement.getBoundingClientRect().width/10,
        titleHeight = oneRem * 0.8,*/
    //对高度统计放入数组
    var arr=[],len=state.list.length,i;
    for (i=0;i<len;i++){
        arr.push(document.getElementById(state.list[i].sub).scrollHeight)
    }
    var newArr = arr.reduce(function(a,b) {
        var c = a.length === 0 ? 0 : a[a.length-1];
        a.push(c+b);
        return a;
    },[]);
    for (var j=0;j<newArr.length-1;j++){
        if(height>newArr[j] && height < newArr[j +1]) {
            return fromJS(state).set('active',state.list[j+1].title ).toJS();
        } else if (height<newArr[0]) {
            return fromJS(state).set('active',state.list[0].title ).toJS();
        }
    }
    // return fromJS(state).set('active',state.list[0].title ).toJS();
    return state;
}

function clickScroll(state,id) {

    var arr=[],len=state.list.length,i;
    for (i=0;i<len;i++){
        arr.push(document.getElementById(state.list[i].sub).scrollHeight)
    }
    var newArr = arr.reduce(function(a,b) {
        var c = a.length === 0 ? 0 : a[a.length-1];
        a.push(c+b);
        return a;
    },[]);
    //此处会触发changeActive，所以上面必须返回state
    var oMainListWrap = document.querySelector('.MainListWrap');
    oMainListWrap.scrollTop= (id-2)>=0 ? newArr[(id-2)]:0;
    state = fromJS(state).set('active',state.list[id-1].title ).toJS();

    return state;
}

function changeScroll(state,condition) {

    setTimeout(()=>{var oMainListWrap = document.querySelector('.MainListWrap');oMainListWrap.scrollTop= condition.top},0);
    return state;
}
function markScroll(state,condition) {
    var oMainListWrap = document.querySelector('.MainListWrap');
    state = fromJS(state).set('top',oMainListWrap.scrollTop ).toJS();
    return state;
}



function changeNum(state = initialState, action) {
    switch (action.type) {
/*        case CREAT_FOOD:
            return action.foods;*/
        case ADD_NUM:
            return addNum(state,action.food,action.parentElement);
            // fromJS(state).setIn(['foods', action.food.id-1,'num'],action.food.num+1 ).toJS();
            //错误例子，不能直接修改state
            // return addMainNum(state,action);
        case MINUS_NUM:
            return minusNum(state,action.food);
            // fromJS(state).setIn(['foods', action.food.id-1,'num'],action.food.num-1 ).toJS();
        case DELETE_NUM:
            return deleteNum(state,action.food);
            // fromJS(state).setIn(['foods', action.food.id-1,'num'],0 ).toJS();
        case SELECTED_ALL:
            return changeSelectedAll(state,action.selected);
        case SELECTED_ONE:
            return changeSelectedOne(state,action.food);
        case SEARCH_FOOD:
            return fromJS(state).set('search',action.value ).toJS();
        case CLICK_SCROLL:
            return clickScroll(state,action.id);
        case SCROLL_CHANGE:
            return changeActive(state,action.height);
        case APPBAR_MAIN:
            return changeScroll(state,action.condition);
        case APPBAR_CART:
            return markScroll(state,action.condition);
        default:
            return state;
    }
}

export default changeNum;