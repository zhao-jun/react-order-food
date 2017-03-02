import React from 'react';
import MainItem from '../MainItem/MainItem';

const MainList = ({foods,addNumMain,minusNumMain}) => (
    <div>
        {
            foods.map(food =>(
                <MainItem
                    key={food.id}
                    food = {food}
                    addNum = {addNumMain}
                    minusNum = {minusNumMain}
                />
            ))
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