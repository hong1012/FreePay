import React from 'react'


import {Button} from 'antd'
import {Row, Col} from 'antd'
import {Input, Table, DatePicker} from 'antd'
import moment from 'moment';
import  Api from '../utils/Api'


import $ from 'jquery'

class Test extends React.Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            dataSource: [],
            loading: false,
            startDate: '2016-12-23',
            endDate: '2016-12-23'
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.getData = this.getData.bind(this);

    }

    componentDidMount() {

    }

    handleClick(e) {
        this.getData();

    }

    handleClick2(e) {
        /*
         * "department": "",
         "status": "",
         "others": "",
         * */

        var param = {
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
            'param': param,
            'fnSuccess': function (data) {
                console.log(data);
            }
        });
    }


    getData() {

        Api.get({
            'url': 'http://ebx.youshang.com/api/kis/bind?eid=4016572&appId=12345678',
            'fnSuccess': function (data) {
                //alert(JSON.stringify(data));
                console.log(data);
            }
        });

        //eid, appid, secret

        // {dbid: "4016572", appid: "12345678", secret: "8512f7fa", time: 1482752024000, appname: "kis"}


    }


    render() {
        return (
            <div className="About">
                <Button type="ghost" className="btn" onClick={this.handleClick}>get</Button>
                <Button type="ghost" className="btn" onClick={this.handleClick2}>post</Button>
                <span id="testspan">测试一下啊</span>
            </div>
        )
    }
}

//导出组件
export default Test;

