import React, { useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import Registrationpage from "./Registration";
import "./login.css"
import Header from "../common/Header/header";
import Footer from "../common/Footer/Footer";
import Dashboard from "./Dashboard";


const Loginpage = () => {

    const[email ,setEmail]= useState("")
    const[passwd ,setPasswd]= useState("")
    const [user, setUser ]=useState("null")

   
        const submit =(event)=>{
            event.preventDefault();

            if (email !=="" && passwd !== "") {                
                <Navigate to= "/Dashboard" replace={true}/>
                alert("LoggedIn")  ;

            } else {
                alert("Please enter Credential")
            }
        };   
            
        
        return(
          
            <div className="Login">    
            <Header/>   
              <h1>Login Page</h1>
            <form >
                {/* // Username input */}
                <div className="text_area">
                {/* <label htmlFor="Username" >Username </label> */}
                <input
                className="text_input"
                type="email"
                id="email address"
                placeholder="Username"
                value={email}
                onChange={(e)=>{setEmail(e.target.getvalue)}}/>
                </div>
                

                {/* // Password input */}
                <div className="text_area">
                
                <input className="text_input"
                type="password"                
                id="passwd"
                placeholder="Password"
                value={passwd}
                onChange={(e)=>{setPasswd(e.target.getvalue)}}/>
               </div>

                {/* //Login button */}
                <button 
                className="btn"
                placeholder="Login" onClick={submit} >Login</button>

                {/* Not a member register */}
                <div className="link">
                <p>Not a Member?  <Link to="/Registerpage">Register</Link>  </p>
                    {/* <button style={{padding:0, border:0 }} onClick={}>register</button> */}
                 
                   
                </div>

            
        </form> 
        <Footer/>
        </div>
      
       
    )
};


export default Loginpage;