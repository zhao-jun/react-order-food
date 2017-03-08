import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import MainHeader from '../../components/MainHeader/MainHeader'
import MainList from '../../components/MainList/MainList';
import '../../style/common.scss';
import '../../style/rem.js';

import {addNum ,minusNum,searchFood } from '../../actions/mainActions';

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
    <div>
        <MainHeader condition={condition} searchFood={actions.searchFood} />
        <MainList condition={condition} foods={foods} addNumMain={actions.addNum} minusNumMain={actions.minusNum} />
    </div>
);

const mapStateToProps = state => ({
    condition:state.changeNum,
    foods: state.changeNum.foods
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({addNum,minusNum,searchFood}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);