import {Layout, Menu, Breadcrumb} from 'antd';
import "antd/dist/antd.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "../Home/Home";
import {History} from "../History/History";
import {Converter} from "../Converter/Converter";
import {ErrorFound} from "../ErrorFound/ErrorFound";
import './Layout.css'

const {Header, Content} = Layout;

export const Layouts = () => (
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
        <Layout className="layout">
          <Breadcrumb className='breadcrumb'>
          </Breadcrumb>
          <Content
            className="site-layout-background"
          >
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/history" component={History}/>
              <Route exact path="/converter" component={Converter}/>
              <Route component={ErrorFound}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </Router>
)

