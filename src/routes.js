import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Respositories from './pages/Repositories/Repositories';
import Home from './pages/Home/Home'

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/> {/**A palavra reservada exact faz o mapeamento apenas do caminho raiz */}
                <Route path="/repositories" component={Respositories}/>
            </Switch>
        </BrowserRouter>
    );
}