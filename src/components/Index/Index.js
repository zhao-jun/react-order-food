import React from  'react';
import AppBarContainer from '../../containers/AppBarContainer/AppBarContainer';

const Index = (props) => (
    <div>
        <div>
            {props.children}
        </div>
        <AppBarContainer />
    </div>
);

export default Index;