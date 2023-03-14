import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../logo512.png"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Create the submit method.
  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    // Create the POST request
    const { data } = await axios.post(
      "http://takinada1.pythonanywhere.com/blog/token/",
      user,
      { headers: { "Content-Type": "application/json" } }
    )

    // Initialize the access & refresh token in localstorage.
    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    localStorage.setItem("username", username)
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    window.location.href = "/";
  };
  return (
    <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        backgroundColor: "black"
      }}
    >
      <div style={{border: "2px solid", padding:"70px", 
        backgroundColor: "white"}}>
      <div style={{marginLeft: "50px"}}>
      <img
            src={logo}
            className="logoImage"
            width="192"
            height="192"
            alt="logo"
            style={{ justifyContent: "center"}}
          />
      </div>
      <Form
        id="loginPage"
        name="basic"
        onSubmit={submit}

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
        autoComplete="off"
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              type: "username",
              message: "The input is not valid Username!",
            },
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            name="username"
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}/>
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
          <Input.Password
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="submitButton" type="primary" htmlType="submit" onClick={submit} style={{marginRight: '10px'}}>
            Submit
          </Button>
            Or <Link to="/registration">register now!</Link>
        </Form.Item>
      </Form>
      </div>
    </div>
    </>
  );
};
export default Login;