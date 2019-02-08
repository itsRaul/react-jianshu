import React,{ Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Home from '../pages/Home'
// import Detail from '../pages/Detail'
import Login from '../pages/Login'

const Detail = Loadable({
    loader: () => import('../pages/Detail'),
    loading() {
        return <div>正在加载</div>
    }
});

class DefaultRouter extends Component { 

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/detail"  component={Detail}/>
                <Route path="/login"  component={Login}/>
            </Switch>
        );
    }
}

export default	DefaultRouter
