import React from 'react'

import {Button, Table} from 'antd'
import  AppData from '../../AppData'

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

        this.setState({
            loading: false,
            dataSource: AppData.getData().feeList
        });

        /*
         var that = this;
         this.setState({
         loading: true
         });
         Api.get({
         'url': 'consumption/type?eid=4016572&appid=12345678&secret=8512f7fa',
         'fnSuccess': function (data) {
         that.setState({
         loading: false,
         dataSource: data
         });
         }
         });*/
    }

    render() {
        var bpage=false;
        return (
            <div >
                <Button type="ghost" onClick={this.handleClick}>新增</Button>
                <Table pagination={bpage}  dataSource={this.state.dataSource} columns={columns} loading={this.state.loading}/>
            </div>
        )
    }
}

//导出组件
export default List;

/*{
 "status": 200,
 "msg": "success",
 "data": [
 {
 "dbid": "12345678",
 "exptypeid": 1,
 "name": "长途",
 "isdelete": 0,
 "imgname": "longdistance",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 2,
 "name": "交通",
 "isdelete": 0,
 "imgname": "transport",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 3,
 "name": "话费",
 "isdelete": 0,
 "imgname": "frees",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 4,
 "name": "汽油",
 "isdelete": 0,
 "imgname": "petrol",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 5,
 "name": "餐饮",
 "isdelete": 0,
 "imgname": "diet",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 6,
 "name": "住宿",
 "isdelete": 0,
 "imgname": "hotel",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 7,
 "name": "办公",
 "isdelete": 0,
 "imgname": "office",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 8,
 "name": "补贴",
 "isdelete": 0,
 "imgname": "bonus",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 9,
 "name": "借款",
 "isdelete": 0,
 "imgname": "loan",
 "status": 1
 },
 {
 "dbid": "12345678",
 "exptypeid": 10000000001,
 "name": "测试111",
 "isdelete": 0,
 "imgname": "electric",
 "status": 0
 }
 ]
 }*/