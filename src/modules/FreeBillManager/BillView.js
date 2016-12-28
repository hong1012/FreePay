/**
 * Created by Administrator on 2016/12/26.
 */
//ES6
import React from 'react';
import {Button, Select, Table} from 'antd'


class View extends React.Component {

    constructor(props) {

        super(props);
        this.closeClick = this.closeClick.bind(this);
        this.printClick = this.printClick.bind(this);


    }


    closeClick() {
        var domView=document.getElementById('appview');
        domView.style.display='none';
    }

    printClick() {

    }

    render() {
        return (

            <div>
                <div>
                    <Button type="ghost" onClick={this.closeClick}>关闭</Button>
                    <Button type="ghost" onClick={this.printClick}>打印</Button>
                </div>
                <div>
                    我是弹出页面  查看 啊啊啊啊啊啊222
                </div>
            </div>

        )
    }
}


export  default  View;