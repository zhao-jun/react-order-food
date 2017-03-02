import React from  'react';
import AppBar from '../AppBar/AppBar';

const Index = (props) => (
    <div>
        <div>
            {props.children}
        </div>
        <AppBar />
    </div>
);

export default Index;