/**
*
* Navbar
*
*/

import { Menu, Icon, Button } from 'antd';
import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import 'antd/lib/button/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/menu/style/css';
import './navbar.scss';

const SubMenu = Menu.SubMenu;

class Navbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    // this.renderLinks = this.renderLinks.bind(this);
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div
        style={{
          width: 256,
          float: 'left',
          minHeight: '100vh',
          background: '#001529',
          height: 'auto',
        }}
      >
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <NavLink to="/backoffice">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/backoffice/setting">
              <Icon type="desktop" />
              <span>Add New User</span>
            </NavLink>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Users</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Icon type="user" />
              <span>Male</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="user" />
              <span>Female</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="user" />
              <span>Add New User</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="user" />
              <span> All Users</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="search" />
                <span>Search</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="3">
            <NavLink to="/backoffice/setting">
              <Icon type="setting" />
              <span>Setting</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="13">
            <NavLink to="/backoffice/help">
              <Icon type="question-circle-o" />
              <span>Help</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

Navbar.propTypes = {};
const mapStateToProps = (state) => ({
  // authenticated: state.auth.authenticated,
});
export default connect(mapStateToProps, null)(Navbar);
