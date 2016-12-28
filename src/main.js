/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import {render} from 'react-dom';
import Menu  from './menu';
import AppData from './AppData'

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'


function showApp() {
    render((
        <Menu/>
    ), document.getElementById('app'))
}


//showApp();

AppData.initApp(showApp);


