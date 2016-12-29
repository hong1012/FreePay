/**
 * Created by Administrator on 2016/12/26.
 */
//ES6
import React from 'react';
import {Steps,Button, Select, Table} from 'antd'

const Step = Steps.Step;

import  Api from '../../utils/Api'
import  AppData from '../../AppData'



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

    }


    closeClick() {
        var domView=document.getElementById('appview');
        domView.style.display='none';
    }

    printClick() {

    }


    getData(id) {

        Api.get({
            'url': 'doc?' + AppData.getData().author+'&id='+id,

            'fnSuccess': function (data) {
                console.log(JSON.stringify(data));

            }
        });
    }


    render() {
        return (

            <div>
                <div>
                    <Button type="ghost" onClick={this.closeClick}>关闭</Button>
                    <Button type="ghost" onClick={this.printClick}>打印</Button>
                </div>

                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>


                <div>
                    <p><span>日期:</span><span>日常报销单:</span><span>报销人:</span></p>
                    <p><span>事由:</span></p>
                    <p><span>备注:</span></p>
                </div>

                <Table bordered rowKey="id" style={tbstyle} dataSource={[]}
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