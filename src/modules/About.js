import React from 'react'


import {Button} from 'antd'
import {Input, Table, DatePicker} from 'antd'
import moment from 'moment';
import  Api from '../utils/Api'

import './About.less';

const dateFormat = 'YYYY-MM-DD';
const columns = [
    {
        title: 'eid ',
        dataIndex: 'eid',
        key: 'eid'
    },
    {
        title: '名称',
        dataIndex: 'companyname',
        key: 'name'
    }, {
        title: 'pv',
        dataIndex: 'pv',
        key: 'pv'
    }, {
        title: 'uv',
        dataIndex: 'uv',
        key: 'uv'
    }];


class Test extends React.Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            dataSource: [],
            loading: false,
            startDate: '2016-12-15',
            endDate: '2016-12-23'
        };

        this.handleClick = this.handleClick.bind(this);
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.getData = this.getData.bind(this);

    }

    componentDidMount(){
        this.getData();
    }

    handleClick(e) {
        this.setState({
            loading: true
        });
        this.getData();
    }


    getData() {
        var that = this;
        this.setState({
            loading: true
        });
        Api.getmob({
            'url': 'http://mob.cmcloud.cn/serverCloud/DataReport/GetVisitDataTotal?eid=&startdate=' + this.state.startDate + '&enddate=' + this.state.endDate + '&operateid=1',
            'fnSuccess': function (data) {
                that.setState({
                    loading: false,
                    dataSource: data
                });
            }
        });
    }

    onChange1(date, dateString) {
        // console.log(date, dateString);
        var that = this;
        this.setState({
            startDate: dateString
        }, function () {
            that.getData();
        });

    }

    onChange2(date, dateString) {
        var that = this;
        this.setState({
            endDate: dateString
        }, function () {
            that.getData();
        });
    }


    render() {
        return (
            <div className="About">
                <DatePicker style={{'margin':'0 15px'}} onChange={this.onChange1}
                            defaultValue={moment(this.state.startDate, dateFormat)}/>
                <DatePicker onChange={this.onChange2} defaultValue={moment(this.state.endDate, dateFormat)}/>
                <Button type="ghost" className="btn" onClick={this.handleClick}>查询</Button>
                <Table dataSource={this.state.dataSource} columns={columns} loading={this.state.loading}/>
            </div>
        )
    }
}

Test.propTypes = {
    initialValue: React.PropTypes.string
};
Test.defaultProps = {
    initialValue: 'hong default',
    name: '测试按钮'
};

//导出组件
export default Test;

