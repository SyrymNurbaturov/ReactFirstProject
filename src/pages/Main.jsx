import React, {useEffect} from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import LayoutComponents from "../components/LayoutComponents";

const Main = () => {
  useEffect(() => {
    if(localStorage.getItem('access_token') == null){                   
        window.location.href = '/login'
    };
 }, []);
  return (
    <LayoutComponents>
      <Breadcrumb className="breadcrumbs">
        <Breadcrumb.Item>
          <Link to="/">Main page</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1>Content</h1>
    </LayoutComponents>
  );
};

export default Main;
