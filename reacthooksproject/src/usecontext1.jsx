import React, { useContext, useState } from "react";
import "./Login.css";
import { SessionContext } from "./App";


const UseContext1 = ()=>{
    const {loggedin,username,increment} = useContext(SessionContext)

  return (
    <div>
        {console.log(loggedin)}
        <h1>{username}</h1>
        <h1>{loggedin==true?"User Logged in":"user is not logged in. Ps login once again"}</h1>
    </div>
  );
}
export default UseContext1