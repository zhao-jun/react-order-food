import React from 'react';
import { IndexLink,Link } from 'react-router';
import './AppBar.scss';


//根路由必须要用IndexLink，否则activeClassName失效
const AppBar = () => (
    <footer>
        <div className="food"><IndexLink to="/" className="link" activeClassName="active">点餐</IndexLink></div>
        <div className="cart"><Link to="/cart" className="link" activeClassName="active">购物车</Link></div>
    </footer>
);

export default AppBar;