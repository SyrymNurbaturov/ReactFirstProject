import React, {useState} from "react";
import { Breadcrumb, Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  
  // const handleUsernameChange = (e) => {
  //   return (
  //     setUsername(e)
  //   )
    
  // }
  // const handlePasswordChange = (e) => {
  //   return (
  //     setPassword(e)
  //   )
    
  // }

  return (
    <>
      <Breadcrumb className="breadcrumbs" separator="\">
        <Breadcrumb.Item>
          <Link to="/">Main page</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/login">Login page</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              type: 'username',
              message: 'The input is not valid Username!',
            },
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
};



export default Login;