//ES6
import React from 'react';
import './Test.less'

class Test extends React.Component {

    render() {
        return (
            <div className="Test">
                <div className="header">
                    <h2>Welcome to Test组件</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <button  onClick={this.handleClick}>测试</button>
                </p>
            </div>
        )
    }
}




//导出组件
export default Test;