import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../sidebar/Sidebar'
import data from  '../data'
import HomePage from  '../Homepage'
import Contabilidad from  '../Contabilidad.js'

const routes = (baseRoute ='') => (<>    
    <Header />
    <Sidebar {...data}/>
    <Switch >
        <Route exact path={`${baseRoute}/home`} component={<HomePage />} />
        <Route path={`${baseRoute}/contabilidad`} component={<Contabilidad />}/>
    </Switch>
</>)

export default routes;