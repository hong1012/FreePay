//ES6
import React from 'react';

class List extends React.Component {

    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder',
            name: props.name,
            show: 'none'
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

    handleClick(e) {
        this.setState({
            name: this.state.name == '显示' ? '隐藏' : '显示',
            show: this.state.name == '显示' ? 'block' : 'none'
        });
        //alert(this.state.text);
    }

    handleGet(e) {
        this.setState({});

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
                    <h2>费用支出分析</h2>
                    <div>
                        <input onChange={this.handleChange} onKeyDown={this.handleKeyDown}
                               value={this.state.text}/>
                        <button onClick={this.handleClick}>{this.state.name}</button>
                        <button onClick={this.handleGet}>获取数据</button>
                        <ul style={{'display':this.state.show}}>
                            <li>深圳</li>
                            <li>广州</li>
                            <li>惠州</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

List.propTypes = {
    initialValue: React.PropTypes.string
};
List.defaultProps = {
    initialValue: 'hong default',
    name: '测试按钮'
};

//导出组件
export default List;