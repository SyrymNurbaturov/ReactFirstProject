import React, {useEffect} from "react";
import axios from "axios";
export const Logout = () => {
    useEffect(() => {
       (async () => {
         try {
                await  
                 axios.post('https://takinada1.pythonanywhere.com/blog/logout/',{
                 refresh_token:localStorage.getItem('refresh_token')
                 } ,{headers: {'Content-Type': 'application/json'}},  
                 {withCredentials: true});
           localStorage.clear()
           axios.defaults.headers.common['Authorization'] = null;
           window.location.href = '/login'
           } catch (e) {
             console.log('logout not working', e)
           }
         })();
    }, []);
    return (
       <div></div>
     )
}


