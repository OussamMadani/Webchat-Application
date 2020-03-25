import React, {component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';



function App (){
    return(
        <Router>
            <Route
                exact={true}
                path='/'
                component={Join}
            />
            <Route
                exact={true}
                path='/chat'
                component={Chat}
            />


        </Router>

    );
}
export default App;