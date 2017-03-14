import React from 'react';
import './MainHeader.scss'


const MainHeader = ({condition,searchFood}) => (
    <header className="MainHeader">
        <p className="place">点餐</p>
        <input type="text" className="search" placeholder='输入搜索商品，例如"鸡腿堡"' onChange={(e)=>(searchFood(e.target.value))} value={condition.search} />
    </header>
);

export default MainHeader;