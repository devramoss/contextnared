import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import Page_404 from './pages/Page__404';
import SobrePage from './pages/Sobre';
import TecnologiaPage from './pages/Tecnologia';
import SociedadePage from './pages/Sociedade';
import EducacaoPage from './pages/Educacao';
import CulturaPage from './pages/Cultura';
import GeralPage from './pages/Geral';

function MainRoutes(){
    return(
        <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route exact path = "/sociedade" component = {SociedadePage}/>
            <Route exact path = "/sobre" component = {SobrePage}/>
            <Route exact path = "/tecnologia" component = {TecnologiaPage}/>
            <Route exact path = "/educacao" component = {EducacaoPage}/>
            <Route exact path = "/cultura" component = {CulturaPage}/>
            <Route exact path = "/geral" component = {GeralPage}/>
            <Route component = {Page_404}/>
        </Switch>
    )
}

export default MainRoutes;