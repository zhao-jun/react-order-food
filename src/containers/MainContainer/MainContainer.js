import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import MainHeader from '../../components/MainHeader/MainHeader'
import MainListTitle from '../../components/MainListTitle/MainListTitle';
import MainListWrap from '../../components/MainListWrap/MainListWrap';
import '../../style/common.scss';
import '../../style/rem.js';
import './MainContainer.scss';

import {addNum ,minusNum,searchFood,scrollChange,clickScroll} from '../../actions/mainActions';

/*class Main extends React.Component {
    constructor(props) {
        super(props);
    }

/!*    componentDidMount() {
        this.props.actions.creatFood();
    }*!/

    render(){
        const {foods,actions} = this.props;
        return (
            <div>
                <MainHeader />
                <MainList foods={foods} addNumMain={actions.addNum} minusNumMain={actions.minusNum} />

            </div>
        )
    }
}*/

const MainContainer = ({condition,foods,actions}) => (
    <div className="MainContainer">
        <MainHeader condition={condition} searchFood={actions.searchFood} />
        <MainListTitle condition={condition} clickScroll={actions.clickScroll} />
        <MainListWrap condition={condition} foods={foods} addNumMain={actions.addNum} minusNumMain={actions.minusNum} scrollChange={actions.scrollChange} />
    </div>
);

const mapStateToProps = state => ({
    condition:state.changeNum,
    foods: state.changeNum.foods
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({addNum,minusNum,searchFood,scrollChange,clickScroll}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);