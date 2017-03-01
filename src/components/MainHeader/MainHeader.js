import React from 'react';
import './MainHeader.scss'


const MainHeader = () => (
    <header>
        <p className="place">点餐</p>
        <input type="text" className="search" placeholder="搜索商品"/>
    </header>
);

export default MainHeader;