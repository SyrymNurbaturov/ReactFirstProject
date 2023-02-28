import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import FullPost from "./pages/FullPost";
import { Logout } from "./pages/Logout";
import SuccessReg from "./pages/SuccessReg";

const Routers = () => {
    return(
        <Routes>
            <Route element={<Main/>} exact path="/" style={{ breadcrumbName: 'home'}}/>
            <Route element={<FullPost/>} path="/post" style={{ breadcrumbName: 'post'}}/>
            <Route element={<Login/>} path="/login" style={{ breadcrumbName: 'login'}}/> 
            <Route element={<Logout/>} path="/logout" style={{ breadcrumbName: 'logout'}}/>
            <Route element={<Registration/>} path="/registration" style={{ breadcrumbName: 'registration'}}/>
            <Route element={<SuccessReg/>} path="/success" style={{ breadcrumbName: 'success'}}/>
        </Routes>
    )
}

export default Routers;