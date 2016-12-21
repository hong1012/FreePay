//ES6
import React from 'react';
import './Test.less'

class Test extends React.Component {

    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        console.log('handleChange');
        this.setState({
            text: event.target.value
        });
        //alert(this.state.text);
    }


    handleClick(e){
        alert(this.state.text);
    }

    handleKeyDown(event) {
      this.setState({
            text: event.target.value
        });
       console.log('handleKeyDown');
       //alert(this.state.text);
    }

    render() {
        return (
            <div className="Test">
                <div className="header">
                    <h2>Welcome to Test组件</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.

                </p>
                <div>
                    Type something:
                    <input onChange={this.handleChange} onKeyDown={this.handleKeyDown}
                           value={this.state.text} />
                    <button  onClick={this.handleClick}>测试</button>
                </div>
            </div>
        )
    }
}

Test.propTypes = {
    initialValue: React.PropTypes.string
};
Test.defaultProps = {
    initialValue: 'hong default'
};

//导出组件
export default Test;