import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

const Routers = () => {

    return(
        <Routes>
            <Route element={<Main/>} exact path="/" style={{ breadcrumbName: 'home'}}/>
            <Route element={<Login/>} path="/login" style={{ breadcrumbName: 'login'}}/>
            <Route element={<Registration/>} path="/registration" style={{ breadcrumbName: 'registration'}}/>
        </Routes>
    )
}

export default Routers;