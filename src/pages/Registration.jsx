import React, { useState } from "react";
import { Button,
    Form,
    Input,} from "antd";
import { Link } from "react-router-dom"
import axios from "axios";
import logo from "../logo512.png"


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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // Create the submit method.
  const submit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      password2: password2,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    // Create the POST request

    await axios.post(
      "http://takinada1.pythonanywhere.com/blog/register/",
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
      paddingRight: "80px",
      paddingLeft: "50px",
      backgroundColor: "black"
    }}>
      <div style={{border: "2px solid", padding:"30px", paddingRight: "40px", 
        backgroundColor: "white"}}>
      <div style={{paddingLeft: "230px"}}>
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
      {...formItemLayout}
      form={form}
      name="register"
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
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
        <Input name="username"
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}/>
            Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
      </Form.Item>
      
      <Form.Item
        name="firstname"
        label="Firstname"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
        ]}
      >
        <Input name="firstname"
            type="text"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}/>
      </Form.Item>
      
      <Form.Item
        name="lastname"
        label="Lastname"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
            whitespace: true,
          },
        ]}
      >
        <Input name="lastname"
            type="text"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input name="email"
            type="text"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}/>
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
            value={password2}
            required
            onChange={(e) => setPassword2(e.target.value)}/>
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
    </div>
    </>
  );
};

export default Registration;


