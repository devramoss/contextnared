import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/Home';
import SobrePage from './pages/Sobre';

function MainRoutes(){
    return(
        <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route path = "/sobre" component = {SobrePage}/>
        </Switch>
    )
}

export default MainRoutes;