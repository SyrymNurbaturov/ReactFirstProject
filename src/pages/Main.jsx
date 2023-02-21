import React from "react";
import { Breadcrumb} from "antd";
const Main = () =>{
    return(
        <>
        <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Main</Breadcrumb.Item>
            </Breadcrumb>
          
          <h1>Content</h1>
          </>
    )
}

export default Main;