import React from 'react'

import {Button,Select,Table} from 'antd'
import {Input, DatePicker} from 'antd'
import moment from 'moment';
import  Api from '../../utils/Api'
import  AppData from '../../AppData'


import './freebillmanager.less';

const Option = Select.Option;
const dateFormat = 'YYYY-MM-DD';

function beclick(text) {
    alert(JSON.stringify(text));
}

const columns = [
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a  onClick={beclick.bind(this,text)}>{text.status}</a>
            </span>
        ),
    },
    {
        title: '日期 ',
        dataIndex: 'time'
    }
    , {
        title: '报销人 ',
        dataIndex: 'name'
    }
    , {
        title: '部门 ',
        dataIndex: 'department'
    }
    , {
        title: '类型 ',
        dataIndex: 'type'
    }
    , {
        title: '事由 ',
        dataIndex: 'reason'
    }, {
        title: '金额 ',
        dataIndex: 'money'
    }, {
        title: '单据编号 ',
        dataIndex: 'id',

    }, {
        title: '状态 ',
        dataIndex: 'status'
    }, {
        title: '付款时间 ',
        dataIndex: 'payTime'
    }
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
};

let tbstyle={"marginLeft":"20px"}

let queryinfo={
    'department':'',
    'others':'',
    'status':'',
    'type':0
};


class List extends React.Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            dataSource: [],
            loading: false
        };

        this.editSource = this.editSource.bind(this);


        this.exportClick = this.exportClick.bind(this);
        this.queryClick = this.queryClick.bind(this);
        this.keywordChange = this.keywordChange.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    queryClick() {
        this.setState({
            loading: true
        });
        this.getData();
    }

    keywordChange(e) {
        let value = this.refs.keyword.refs.input.value;
        queryinfo.others=value;

    }

    exportClick(e) {

    }

    editSource(e) {

    }

    statusChange(e) {

    }

    getData() {
        var that = this;
        this.setState({
            loading: true
        });

        var param = {
            "startDate": "2001-01-01",
            "endDate": "2100-01-01",
            "type": queryinfo.type,
        /*    'department':queryinfo.department,*/
            'others':queryinfo.others,
            'status':queryinfo.status,
            "pager": {
                "page": 1,
                "rows": 50
            }
        };


        Api.post({
            'url': 'doc/list?'+AppData.getData().author,
            'param': param,
            'fnSuccess': function (data) {
                console.log(JSON.stringify(data));
                that.setState({
                    loading: false,
                    dataSource: data
                });
            }
        });
    }

    render() {
        return (
            <div className="free-bill-manager">
                <div className="head">
                    <span>部门</span>
                    <Select size="large" defaultValue="全部" style={{ width: 180,margin:"0 10px" }} onChange={this.handleChange}>
                        <Option value="jack">全部</Option>

                    </Select>
                    <span>类型</span>
                    <Select size="large" defaultValue="全部" style={{ width: 180,margin:"0 10px" }} onChange={this.handleChange}>
                        <Option value="0">全部</Option>
                        <Option value="1">日常报销单</Option>
                        <Option value="2">差旅报销单</Option>

                    </Select>
                    <span>状态</span>
                    <Select size="large" defaultValue="全部" style={{ width: 180,margin:"0 10px" }} onChange={this.statusChange}>
                        <Option value="已支付">已支付</Option>
                        <Option value="待支付">待支付</Option>
                        <Option value="审核中">审核中</Option>
                    </Select>
                    <Input ref="keyword" style={{ width: 180,margin:"0 10px" }}
                           onChange={this.keywordChange} onPressEnter={this.queryClick}  placeholder="请输入报销人/单号" />
                    <Button type="ghost" onClick={this.queryClick}>查询</Button>
                    <Button type="ghost" onClick={this.exportClick}>导出</Button>
                </div>
                <Table rowKey="id" style={tbstyle} rowSelection={rowSelection}  dataSource={this.state.dataSource} columns={columns} loading={this.state.loading}/>
            </div>
        )
    }
}

//导出组件
export default List;
