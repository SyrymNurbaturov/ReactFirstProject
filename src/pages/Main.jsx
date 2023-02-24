import React from "react";
import { Breadcrumb} from "antd";
import { Link } from "react-router-dom"
const Main = () =>{
    return(
        <>
        <Breadcrumb className="breadcrumbs">
    <Breadcrumb.Item>
      <Link  to="/">
            Main page
          </Link>
    </Breadcrumb.Item>
        </Breadcrumb>


          <h1>Content</h1>
          </>
    )
}

export default Main;