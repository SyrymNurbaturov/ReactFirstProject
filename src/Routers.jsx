import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Registration from "./pages/Registration";
import FullPost from "./components/FullPost";

const Routers = () => {

    return(
        <Routes>
            <Route element={<Main/>} exact path="/" style={{ breadcrumbName: 'home'}}/>
            <Route element={<Login/>} path="/login" style={{ breadcrumbName: 'login'}}/>
            <Route element={<Registration/>} path="/registration" style={{ breadcrumbName: 'registration'}}/>
            <Route element={<FullPost/>} path="/post" style={{ breadcrumbName: 'post'}} />
        </Routes>
    )
}

export default Routers;