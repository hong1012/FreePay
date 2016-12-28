import React from 'react'

import {Button} from 'antd'
import {Input, Table, DatePicker} from 'antd'
import moment from 'moment';
import  Api from '../../utils/Api'

const dateFormat = 'YYYY-MM-DD';
const columns = [
    {
        title: '费用名称 ',
        dataIndex: 'name',
        key: 'exptypeid'
    }];


class List extends React.Component {
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
        this.getData = this.getData.bind(this);
    }


    componentDidMount() {
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

        Api.get({
            'url': 'baoxiao/progress?eid=4016572&appid=12345678&secret=8512f7fa&type=fee&year=2016&month=12',
            'fnSuccess': function (data) {
                that.setState({
                    loading: false,
                    dataSource: data
                });
            }
        });
    }

    render() {
        return (
            <div >
                <Button type="ghost" onClick={this.handleClick}>查询</Button>
                <Table dataSource={this.state.dataSource} columns={columns} loading={this.state.loading}/>
            </div>
        )
    }
}

//导出组件
export default List;
