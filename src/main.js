/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import {render } from 'react-dom';
import Menu  from './menu';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

render((
    <Menu/>
), document.getElementById('app'))




/*
ReactDom.render(
    <App name="app"/>,
    document.getElementById('content')
);*/


//setInterval(function() {
/*    ReactDom.render(
        <Cmp.list1  name="list1 component" date={new Date()}/>,
        document.getElementById('content3')
    );*/
//}, 500);

/*

ReactDom.render(
    <Cmp.list2>
        <span>hello</span>
        <span>world</span>
    </Cmp.list2>,
    document.getElementById('content3')
);

 ReactDom.render(
 <Test  name="显示"/>,
 document.getElementById('content2')
 );

*/

/*
ReactDom.render(
    <TestFilter  />,
    document.getElementById('content4')
);*/


