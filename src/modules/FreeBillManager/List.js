import React from 'react'

import {Button} from 'antd'
import {Input, Table, DatePicker} from 'antd'
import moment from 'moment';
import  Api from '../../utils/Api'



const dateFormat = 'YYYY-MM-DD';
const columns = [
  {
    title: '日期 ',
    dataIndex: 'time'
  }
  ,{
    title: '报销人 ',
    dataIndex: 'name'
  }
  ,{
    title: '部门 ',
    dataIndex: 'department'
  }
  ,{
    title: '类型 ',
    dataIndex: 'type'
  }
  ,{
    title: '事由 ',
    dataIndex: 'reason'
  }  ,{
    title: '金额 ',
    dataIndex: 'money'
  }  ,{
    title: '单据编号 ',
    dataIndex: 'id',
    key: 'id'
  }  ,{
    title: '状态 ',
    dataIndex: 'statusCode'
  } ,{
    title: '付款时间 ',
    dataIndex: 'payTime'
  }
];


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


    var param={
      "startDate": "2016-01-01",
      "endDate": "2016-12-26",
      "type": 0,
      "pager": {
        "page": 1,
        "rows": 50
      }
    };
    Api.post({
      'url': 'doc/list?eid=4016572&appid=12345678&secret=8512f7fa',
      'param':param,
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
          <Button type="ghost" onClick={this.handleClick}>导出</Button>
          <Table dataSource={this.state.dataSource} columns={columns} loading={this.state.loading}/>
        </div>
    )
  }
}

//导出组件
export default List;
