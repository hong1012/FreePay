import React from 'react'
import {Link} from 'react-router'


// 引入Antd的导航组件
import {Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu

import './App.less'

/*import './App.css'*/


export default React.createClass({
    render() {
        return (
            <div className="app">
                <Menu theme="dark"
                      style={{ width: 185 }}
                      defaultOpenKeys={['sub1', 'sub2']}
                      mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="heart"/><span>云报销</span></span>}>
                        <Menu.Item key="1"><Link to="/freebillm">报销单管理</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/costform">费用支出分析</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/costpay">费用构成分析</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/freebillp">报销进度分析</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/costdefine">费用类型</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>测试</span></span>}>
                        <Menu.Item key="6"><Link to="/about">antd</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/repos">antd2</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/chart">chart</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/testapi">TestApi</Link></Menu.Item>
                    </SubMenu>
                </Menu>
                <div className="content">
                    {this.props.children}
                </div>

            </div>
        )
    }
})

