import React from 'react';
import './MainListTitle.scss';

const MainListTitle = ({condition,clickScroll}) => (
    <ul className="MainListTitle">
        {
            condition.list.map((list) => (
                condition.active == list.title ?
                <li key={list.id} className="list active">{list.num?<span className="num">{list.num}</span>:null}{list.title}</li> :
                <li key={list.id} className="list" onClick={()=>clickScroll(list.id)}>{list.num?<span className="num">{list.num}</span>:null}{list.title}</li>
            ))
        }
    </ul>
)

export default MainListTitle;