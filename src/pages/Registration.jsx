import React, { useState } from "react";
import { Button,
    Form,
    Input,} from "antd";
import { Link } from "react-router-dom"
import axios from "axios";

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    },
    };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
const Registration = () => {
  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconf, setPasswordconf] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // Create the submit method.
  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      passwordconf: passwordconf,
    };
    // Create the POST request

    await axios.post(
      "http://localhost:8000/blog/register/",
      user,
      { headers: { "Content-Type": "application/json" } }
    ).then((response)=>{
      try{
        if(response.status === 201){
          window.location.href = '/success'
        }
        else{
          window.location.href = '/registration'
        }
      } catch(e){
          console.log(e)
      }
    })
  }

  return (
    <>
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "90vh",
    }}>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
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
        <Input name="username"
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}/>
            Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}/>
            Your password can’t be too similar to your other personal information.
            Your password must contain at least 8 characters.
            Your password can’t be a commonly used password.
            Your password can’t be entirely numeric.
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password type="password"
            value={passwordconf}
            required
            onChange={(e) => setPasswordconf(e.target.value)}/>
            Enter the same password as before, for verification.
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={submit} style={{marginRight: '10px'}}>
          Register
        </Button>
        <Link to="/login">Back</Link>
      </Form.Item>
    </Form>
    </div>
    </>
  );
};

export default Registration;


