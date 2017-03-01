import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import MainHeader from '../MainHeader/MainHeader'
import MainList from '../MainList/MainList';
import AppBar from '../AppBar/AppBar';
import '../../style/common.scss'

import {addNum} from '../../actions/mainActions';

const Main = ({foods,actions}) => (
    <div>
        <MainHeader />
        <MainList foods={foods} onSelectMain={actions.addNum} />
        <AppBar />
    </div>
)

const mapStateToProps = state => ({
    foods: state.foods
});

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({addNum},dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);