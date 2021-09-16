import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/Home';
import SobrePage from './pages/Sobre';
import Page_404 from './pages/Page__404';

function MainRoutes(){
    return(
        <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route exact path = "/sobre" component = {SobrePage}/>
            <Route component = {Page_404}/>
        </Switch>
    )
}

export default MainRoutes;