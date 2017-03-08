import React from 'react';
import './MainItem.scss';

const MainItem = ({food,addNum,minusNum}) => (
    <div className="MainItem">
        <div className="left">
            <img className="img" src={require('../../images/img-'+ food.pic +'.png')} />
        </div>
        <div className="right">
            <p className="title">{food.title}</p>
            <p className="describe">{food.describe}</p>
            <p className="sale">月售{food.sale}份 好评率{food.comment}%</p>
            <span className="price">&yen;{food.price}</span>
        </div>
        {food.num > 0 ?
            <div className="button">
                <span className="button-item left-button in" onClick = {()=>minusNum(food)}>-</span>
                <span className="number in">{food.num}</span>
                <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
            </div>
            :
            <div className="button">
                <span className="button-item left-button hide">-</span>
                <span className="number hide">{food.num}</span>
                <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
            </div>
        }
    </div>
);

/*class MainItem extends React.Component {
    handleClick(e){
        e.className
    }

    render() {
        const {food,addNum,minusNum} = this.props;
        return(
        <div className="MainItem">
            <div className="left">
                <img className="img" src={require('../../images/img-'+ food.pic +'.png')} />
            </div>
            <div className="right">
                <p className="title">{food.title}</p>
                <p className="describe">{food.describe}</p>
                <p className="sale">月售425份 好评率100%</p>
                <span className="price">&yen;{food.price}</span>
            </div>
            {food.num > 0 ?
                <div className="button">
                    <span className="button-item left-button in" onClick = {()=>{minusNum(food); handleClick()}}>-</span>
                    <span className="number in">{food.num}</span>
                    <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
                </div>
                :
                <div className="button">
                    <span className="button-item hide">-</span>
                    <span className="number hide">{food.num}</span>
                    <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
                </div>
            }
        </div>
        )
    }
}*/

/*class MainItem extends React.Component {
    render() {
        const {food,addNum,minusNum} = this.props;
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
                        {food.num > 0 ?
                            <div className="button">
                                <span className="button-item" onClick = {()=>minusNum(food)}>-</span>
                                <span className="number">{food.num}</span>
                                <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
                            </div>
                            :
                            <div className="button">
                                <span className="button-item" onClick = {addNum.bind(this, food)}>+</span>
                            </div>
                        }
                </div>
            )
        }
}*/

export default MainItem;