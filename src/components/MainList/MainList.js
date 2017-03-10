import React from 'react';
import MainItem from '../MainItem/MainItem';
import './MainList.scss';

const MainList = ({condition,listItem,foods,addNumMain,minusNumMain}) => (
    <div className="MainList">
        {
            foods.map(food =>{
                if(food.belong == listItem.title){
                if (!condition.search) {
                    return(
                    <MainItem
                        key={food.id}
                        food = {food}
                        addNum = {addNumMain}
                        minusNum = {minusNumMain}
                    />
                    )
                }
                var reg=new RegExp(condition.search);
                return  reg.test(food.title) ?
                <MainItem
                    key={food.id}
                    food = {food}
                    addNum = {addNumMain}
                    minusNum = {minusNumMain}
                /> : null
            }})
        }
    </div>
);

/*class MainList extends React.Component {

    render() {
        const {foods,addNumMain} = this.props;
        return(
            <div>
                {
                    foods.map(food =>(
                        <MainItem
                            key={food.id}
                            food = {food}
                            addNum = {addNumMain}
                        />
                    ))
                }
            </div>
        )
    }
}*/

export default MainList;