/**
 * Created by Administrator on 2016/12/26.
 */
//ES6
import React from 'react';
import {Steps,Button, Select, Table} from 'antd'

const Step = Steps.Step;

import  Api from '../../utils/Api'
import  AppData from '../../AppData'

import './billview.less'



let tbstyle = {"marginLeft": "20px"}


const columns = [
    {
        title: '费用类型 ',
        dataIndex: 'type'
    }
    , {
        title: '金额 ',
        dataIndex: 'amount'
    }
    , {
        title: '备注 ',
        dataIndex: 'desc'
    },
    {
        title: '附件',
        key: 'action',
        render: (text, record) => (
            <span>

            </span>
        )
    }

];


class View extends React.Component {

    constructor(props) {

        super(props);
        this.closeClick = this.closeClick.bind(this);
        this.printClick = this.printClick.bind(this);

        this.getData(this.props.id);

        this.state={
            dataSource: {},
            tbdata:[],
            loading:false
        };

    }


    closeClick() {
        var domView=document.getElementById('appview');
        domView.style.display='none';
    }

    printClick() {

    }


    gettbdata(list){
        //let feeList=AppData.getFee(list);


    }

    getData(id) {
        var that=this;
        Api.get({
            'url': 'doc?' + AppData.getData().author+'&id='+id,

            'fnSuccess': function (data) {
                //console.log(JSON.stringify(data));
                let tbdata=that.gettbdata(data.consumptions);
                that.setState({
                    //tbdata:tbdata,
                    dataSource:data
                });
            }
        });
    }




    render() {

        let ds=this.state.dataSource;

        return (

            <div className="billview">

                <div style={{margin: 20}}>
                    <span>报销单进度</span>
                    <Button className="print" type="ghost" onClick={this.printClick}>打印</Button>
                    <Button className="close"  type="ghost" onClick={this.closeClick}>关闭</Button>
                </div>

                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>


                <div>
                    <p><span>日期:{ds.time}</span><span>类型:{ds.type}</span><span>报销人:{ds.name}</span></p>
                    <p><span>事由:{ds.reason}</span></p>
                    <p><span>备注:{ds.desc}</span></p>
                </div>

                <Table bordered rowKey="id" style={tbstyle} dataSource={this.state.tbdata}
                       columns={columns} />

                <div>

                    我是弹出页面  查看 订单号
                    {this.props.id}
                </div>
            </div>

        )
    }
}


export  default  View;