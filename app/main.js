/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Test from './components/Test.jsx';
import Cmp from './components/cmpTest.jsx';
//import TestFilter from './components/TestFilter.jsx';
import TestFilter from './components/TestFilter2.jsx';


import App from './App';

/*
ReactDom.render(
    <App name="app"/>,
    document.getElementById('content')
);*/


ReactDom.render(
    <Test  name="显示"/>,
    document.getElementById('content2')
);

//setInterval(function() {
/*    ReactDom.render(
        <Cmp.list1  name="list1 component" date={new Date()}/>,
        document.getElementById('content3')
    );*/
//}, 500);


ReactDom.render(
    <Cmp.list2>
        <span>hello</span>
        <span>world</span>
    </Cmp.list2>,
    document.getElementById('content3')
);


/*
ReactDom.render(
    <TestFilter  />,
    document.getElementById('content4')
);*/
