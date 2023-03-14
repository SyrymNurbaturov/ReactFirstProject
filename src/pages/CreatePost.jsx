import LayoutComponents from "../components/LayoutComponents";
import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { TextArea } = Input;
/* eslint-enable no-template-curly-in-string */

const CreatePost = () => {
    const username = localStorage.getItem('username');
    const [form] = Form.useForm();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [publish] = useState(null)
    const submit = async (e) => {
        e.preventDefault();
        const user = {
          author: username,
          title: title,
          body: body,
          publish: publish,
        };
        // Create the POST request
        await axios.post(
          "https://takinada1.pythonanywhere.com/blog/api/add/",
          user,
          { headers: { "Content-Type": "application/json" } }
        ).then((response)=>{
          try{
            if(response.status === 201){
              window.location.href = '/post'
            }
            else{
              window.location.href = '/create'
            }
          } catch(e){
              console.log(e)
          }
        })
      }
  return (
    <LayoutComponents>
      <h1>Create your post</h1>
      <Form
        {...layout}
        form={form}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Title">
          <Input name="title"
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Body">
          <TextArea rows={4} name="body"
            type="text"
            value={body}
            required
            onChange={(e) => setBody(e.target.value)}/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={submit} style={{marginRight: '10px'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LayoutComponents>
  );
};

export default CreatePost;
