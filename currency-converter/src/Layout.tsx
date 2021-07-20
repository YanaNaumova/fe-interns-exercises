import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import "antd/dist/antd.css";
import "./index.css";
import {Selected} from "./Selected";
import {Table1} from "./Table1";
import {Table2} from "./Table2";
import {Selected2} from "./Selected2";
import {Selected3} from "./Selected3";
import {DataP} from "./DataPicker";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from "./Home";
import {History} from "./History";
import {Converter} from "./Converter";
import {Other} from "./Other";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

export function Layouts() {
    return (
        <Router>
            <Layout>
                <Header className="header">

                    <div className="menu">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="latestRates"><a href="/">Latest Rates</a></Menu.Item>
                            <Menu.Item key="historyRates"><a href="/history">History Rates</a></Menu.Item>
                            <Menu.Item key="converter"><a href="/converter">Converter</a></Menu.Item>
                        </Menu>
                    </div>


                </Header>
                <Layout>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>

                        </Breadcrumb>
                        <Content

                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 300,
                            }}
                        >
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/history" component={History}/>
                                <Route exact path="/converter" component={Converter}/>
                                <Route component={Other}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router>

    )
}

