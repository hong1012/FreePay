import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from './App'
import FreeBillManager from './modules/FreeBillManager/BillManager'
import FreeBillProgress from './modules/FreeBillProgress/List'
import CostPay from './modules/CostPay/List'
import CostForm from './modules/CostForm/List'
import CostDefine from './modules/CostDefine/List'
import About from './modules/About'
import Repos from './modules/Repos'
import TestApi from './modules/TestApi'
import Chart from './modules/Chart'


export default React.createClass({
    render() {

        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={TestApi}/>
                    <Route path="/repos" component={Repos}/>
                    <Route path="/about" component={About}/>
                    <Route path="/chart" component={Chart}/>
                    <Route path="/testapi" component={TestApi}/>
                    <Route path="/freebillm" component={FreeBillManager}/>
                    <Route path="/costform" component={CostForm}/>
                    <Route path="/costpay" component={CostPay}/>
                    <Route path="/freebillp" component={FreeBillProgress}/>
                    <Route path="/costdefine" component={CostDefine}/>
                </Route>
            </Router>
        )
    }
})
