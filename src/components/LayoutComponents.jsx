import {
  HomeOutlined,
  UserOutlined,UnorderedListOutlined, PlusOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LayoutComponents.css";
import logo from "../logo.svg";
const { Header, Content, Sider } = Layout;

const LayoutComponents = (props) => {
  const navigate = useNavigate()
  const { children } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
        <Link to="/">
          <img
            src={logo}
            className="logoImage"
            width="70"
            height="60"
            alt="logo"
            style={{ alignSelf: "center" }}
          />
        </Link>
        </div>
        <div >
        <Link className="logoutLink" to="/logout">
        Logout
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
            onClick={({key}) =>{
              navigate(key)
            }}
            items={[
              {label: "Home", key:"/", icon: <HomeOutlined/>},
              {label: "Profile", key:"/profile", icon: <UserOutlined/>},
              {label: "Post", key:"/post", icon: <UnorderedListOutlined/>},
              {label: "Create Post", key:"/create", icon: <PlusOutlined />}
            ]}
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
