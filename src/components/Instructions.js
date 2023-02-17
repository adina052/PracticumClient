import { useContext, useEffect, useState } from "react"
import  { userCtx } from "./UserContext"
import { useNavigate } from "react-router-dom"
export default function Instructions() {
    let userContext = useContext(userCtx);
    const nevigate=useNavigate();

    console.log(userContext)
    return (

        <div>
             <button onClick={()=>{nevigate('/')}}>home</button> 
            <h3>hello, {userContext.user.firstName} {userContext.user.lastName}</h3>
            <p>happy to see you again</p>
            <p>You need to fill all the required feilds, click on submit when you finish.</p>
            <p>Good Luck!</p>
        </div>
    )
}