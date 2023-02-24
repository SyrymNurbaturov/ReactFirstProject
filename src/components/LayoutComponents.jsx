import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayoutComponents.css";
import logo from "../logo.svg";
const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        const post = <Link className="postLink" to="/post">
        Post
      </Link>
        return {
          post: post,
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    
    };
  }
);
const LayoutComponents = (props) => {
  const { children } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Link to="/">
          <img
            src={logo}
            className="logoImage"
            width="60"
            height="50"
            alt="logo"
            style={{ alignSelf: "center" }}
          />
        </Link>
        <div className="login">
          <Link className="loginLink" to="/login">
            Login
          </Link>
        </div>
        <div className="registration">
          <Link className="registrationLink" to="/registration">
            Registration
          </Link>
        </div>
        <div>
        <Link className="postLink" to="/post">
        Post
      </Link>
        </div>
        <Breadcrumb />
      </Header>
      
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutComponents;
