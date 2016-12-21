//ES6
import React from 'react';
import './cmpTest.less'

import Test from './TestFilter2.jsx'

/*无状态函数式组件*/
function ListCcmp1(props, /* context */) {
    return <div>

        <p>无状态函数式组件</p>
        Hello list {props.name}

        <input data-cmd="input" id="testinput" />
        <p>{props.date.toTimeString()}</p>

        {
/*            <button onClick={
                document.getElementById('testinput').innerText='hhh'

        }>测试按钮</button>*/
        }
    </div>
}
/*es5原生方式React.createClass定义的组件*/
var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                    })
                    /*      <Test></Test>*/
                }

            </ol>
        );
    }
});

//导出组件
export default {
    list1:ListCcmp1,
    list2:NotesList
};