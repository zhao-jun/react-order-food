import React from 'react';
import MainList from '../MainList/MainList';
import "./MainListWrap.scss";

const MainListWrap = ({condition,foods,addNumMain,minusNumMain,scrollChange}) => (
    <div className="MainListWrap" onScroll={(e)=>scrollChange(e.target.scrollTop)}>
        {
            condition.list.map(listItem=>
                <div key={listItem.id} id={listItem.sub}>
                    <p className="title">{listItem.title}</p>
                    <MainList
                        condition={condition}
                        foods={foods}
                        listItem={listItem}
                        addNumMain={addNumMain}
                        minusNumMain={minusNumMain}
                    />
                </div>
            )
        }
    </div>
);

/*class MainListWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {condition,foods,addNumMain,minusNumMain,scrollChange} = this.props;
        return (
        <div className="MainListWrap" onScroll={(e)=>scrollChange(e.target.scrollTop)} ref="MainListWrap">
            {
                condition.list.map(listItem=>
                    <div key={listItem.id} id={listItem.sub}>
                        <p className="title">{listItem.title}</p>
                        <MainList
                            condition={condition}
                            foods={foods}
                            listItem={listItem}
                            addNumMain={addNumMain}
                            minusNumMain={minusNumMain}
                        />
                    </div>
                )
            }
        </div>
        )
    }
}*/


export default MainListWrap;