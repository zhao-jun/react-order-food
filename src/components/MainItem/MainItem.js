import React from 'react';
import './MainItem.scss';

/*const MainItem = ({food,addNum,minusNum}) => (
    <div className="container">
        <div className="left">
            <img className="img" src={require('../../images/img-'+ food.pic + '.png')} />
        </div>
        <div className="right">
            <p className="title">{food.title}</p>
            <p className="describe">{food.describe}</p>
            <p className="sale">月售425份 好评率100%</p>
            <span className="price">{food.price}</span>
        </div>
        <div className="button">
            <span className="button-item" onClick = {()=>minusNum(food)}>-</span><span className="number">{food.num}</span>

            <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
        </div>
    </div>
);*/

class MainItem extends React.Component {
    render() {
        const {food,addNum,minusNum} = this.props;
        if (food.num > 0) {
            return(
                <div className="MainItem">
                    <div className="left">
                        <img className="img" src={require('../../images/img-'+ food.pic + '.png')} alt="item" />
                    </div>
                    <div className="right">
                        <p className="title">{food.title}</p>
                        <p className="describe">{food.describe}</p>
                        <p className="sale">月售425份 好评率100%</p>
                        <span className="price">&yen;{food.price}</span>
                    </div>
                    <div className="button">
                        <span className="button-item" onClick = {()=>minusNum(food)}>-</span>
                        <span className="number">{food.num}</span>
                        <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="MainItem">
                    <div className="left">
                        <img className="img" src={require('../../images/img-'+ food.pic + '.png')} />
                    </div>
                    <div className="right">
                        <p className="title">{food.title}</p>
                        <p className="describe">{food.describe}</p>
                        <p className="sale">月售425份 好评率100%</p>
                        <span className="price">&yen;{food.price}</span>
                    </div>
                    <div className="button">
                        <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
                    </div>
                </div>
            )
        }
    }
}

export default MainItem;