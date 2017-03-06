import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import CartHeader from '../CartHeader/CartHeader';
import CartList from '../CartList/CartList';
import CartFooter from '../CartFooter/CartFooter';

import {addNum ,minusNum } from '../../actions/mainActions';
import {deleteNum,selectedAll,selectedOne} from '../../actions/cartActions';

const CartContainer = ({state,foods,actions}) => (
     <div>
         <CartHeader state={state} selectedAll={actions.selectedAll} />
         <CartList foods={foods} addNumCart={actions.addNum} minusNumCart={actions.minusNum} deleteNumCart = {actions.deleteNum} selectedOne={actions.selectedOne} />
         <CartFooter state={state} selectedAll={actions.selectedAll} />
     </div>
);

const mapStateToProps = state => ({
    state: state.changeNum,
    foods: state.changeNum.foods
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({addNum,minusNum,deleteNum,selectedAll,selectedOne}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);