import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import MainHeader from '../MainHeader/MainHeader'
import MainList from '../MainList/MainList';
import '../../style/common.scss';
import '../../style/rem.js';

import {addNum ,minusNum } from '../../actions/mainActions';

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

const Main = ({foods,actions}) => (
    <div>
        <MainHeader />
        <MainList foods={foods} addNumMain={actions.addNum} minusNumMain={actions.minusNum} />
    </div>
)

const mapStateToProps = state => ({
    foods: state.changeNum.foods
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({addNum,minusNum}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);