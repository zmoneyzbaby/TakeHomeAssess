import React from "react";
import { ROUTES, PAGE_TITLES } from "../Constants";
import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { UserOutlined, DashboardOutlined } from "@ant-design/icons";
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Link,
  // eslint-disable-next-line no-unused-vars
  Redirect,
  // eslint-disable-next-line no-unused-vars
  Route,
} from "react-router-dom";

function Sidebar() {
  return (
    <Sider width={150} breakpoint="sm" collapsedWidth={0}>
      <Menu
        mode="inline"
        defaultOpenKeys={["chats"]}
        // selectedKeys={[location.pathname]}
        style={{ height: "100vh" }}
      >
        <Menu.Item
          key={ROUTES.dashboard.home}
          icon={<DashboardOutlined />}
          style={{ marginTop: "50%" }}
        >
          <Link to={ROUTES.dashboard.home}>
            {PAGE_TITLES[ROUTES.dashboard.home]}
          </Link>
        </Menu.Item>
        <SubMenu key="Users" icon={<UserOutlined />} title="Users">
          <Menu.Item key={ROUTES.dashboard.users}>
            <Link to={ROUTES.dashboard.users}>
              {PAGE_TITLES[ROUTES.dashboard.users]}
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
