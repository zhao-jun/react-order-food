import React from 'react';
import MainItem from '../MainItem/MainItem';

const MainList = ({foods,onSelectMain}) => (
    <div>
        {
            foods.map(food =>(
                <MainItem
                    key={food.id}
                    food = {food}
                    onSelect = {food => onSelectMain(food)}
                />
            ))
        }
    </div>
);

export default MainList;