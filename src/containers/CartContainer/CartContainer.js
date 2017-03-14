import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import CartHeader from '../../components/CartHeader/CartHeader';
import CartList from '../../components/CartList/CartList';
import CartFooter from '../../components/CartFooter/CartFooter';

import {addNum ,minusNum } from '../../actions/mainActions';
import {deleteNum,selectedAll,selectedOne} from '../../actions/cartActions';

const CartContainer = ({state,foods,actions,total}) => (
     <div>
         <CartHeader state={state} selectedAll={actions.selectedAll} />
         <CartList foods={foods} addNumCart={actions.addNum} minusNumCart={actions.minusNum} deleteNumCart = {actions.deleteNum} selectedOne={actions.selectedOne} />
         <CartFooter state={state} selectedAll={actions.selectedAll} total={total} />
     </div>
);

//计算总价
const total = (foods)=>(foods.map(food=>(food.price * food.num * food.select)).reduce((prev, cur) => prev + cur));

const mapStateToProps = state => ({
    state: state.changeNum,
    foods: state.changeNum.foods,
    total:total(state.changeNum.foods)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({addNum,minusNum,deleteNum,selectedAll,selectedOne}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);