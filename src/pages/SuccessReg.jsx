import React from "react";
import { Link } from "react-router-dom"


function SuccessReg(){
    return(
        <>
        <h1>Successfully registered</h1>
        <Link to='/login'>pls Login for confirm your account</Link>
        </>
    )
}

export default SuccessReg;