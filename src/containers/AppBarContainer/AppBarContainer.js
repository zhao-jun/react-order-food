import React from 'react';
import { IndexLink,Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import './AppBarContainer.scss';

import {appBarMain,appBarCart } from '../../actions/appbarActions';


//根路由必须要用IndexLink，否则activeClassName失效
const AppBarContainer = ({condition,actions}) => (
    <footer>
        <div className="food" onClick={()=>actions.appBarMain(condition)}><IndexLink to="/" className="link" activeClassName="active">点餐</IndexLink></div>
        <div className="cart" onClick={()=>actions.appBarCart(condition)}><Link to="/cart" className="link" activeClassName="active">购物车</Link></div>
    </footer>
);

const mapStateToProps = state => ({
    condition:state.changeNum
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({appBarMain,appBarCart}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer);