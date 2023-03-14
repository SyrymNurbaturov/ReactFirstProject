import React, { useEffect } from 'react'
import LayoutComponents from "../components/LayoutComponents"
import axios from 'axios'

export const Profile = () => {
  const username = localStorage.getItem("username")
  let [responseData, setResponseData] = React.useState('')
  useEffect(() => {
    if(localStorage.getItem('access_token') == null){                   
        window.location.href = '/login'
    }
    else{
      (async () => {
        try {
          const baseURL = `https://takinada1.pythonanywhere.com/blog/current/${username}/`;
          axios.get(baseURL).then((response) => {
            setResponseData(response.data);
           });
       } catch (e) {
         console.log('not auth')
       };
      })()};
}, [username]);
console.log(responseData)
  return (
    <LayoutComponents>
    <h1>Profile</h1>
    <div>Name: {responseData.first_name}</div>
    <div>Surname: {responseData.last_name}</div>
    <div>Email: {responseData.email}</div>
    </LayoutComponents>
  )
}
