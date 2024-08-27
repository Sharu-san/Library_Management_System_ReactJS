import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import "./Registration.css";
import Header from "../common/Header/header";
import Footer from "../common/Footer/Footer";



const Registrationpage = () => {

    const[username , setUsername]= useState("")   
    const[email ,setEmail]= useState("")
    const[phone ,setPhone] = useState("")
    const[address ,setAddress] = useState("")
    const[passwd ,setPasswd]= useState("")
    const[library ,setLibrary]= useState("")
    const[cpassword ,setCpassword] = useState("")
    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState('password');

   
        const submit =(event)=>{
            event.preventDefault();

            if (username !=="" && email !=="" && address !=="" && phone !=="" && library !== "" && passwd !=="" && cpassword === passwd) {                
                alert("Registered Successfully")           
            } else {
                alert("Please enter required Credential")
            }
        };   


        const showpwd = ()=> {
            
            if (type==='password'){
                setIcon(eye);
                setType('text')
             } else {
                setIcon(eyeOff)
                setType('password')
             }
          }
        
            
        
        return(
            // <div className="form-group row">
             <div className="register"> 
             <Header/>
               
              
        <form>
            
            
                <h1>Registration Page</h1>

                {/* Name input */}
                <div className="text_area">
                {/* <label htmlFor="Username" className="col-sm-1 col-form-label" >Username </label> */}
                <input 
                className="text_input"
                type="text"
                name="Username"
                placeholder="Enter your Name"
                value={username}
                onChange={(e)=>{setUsername(e.target.getvalue)}}
                required/>
                </div>
                


                {/* // Username input */}
                <div className="text_area">
                {/* <label htmlFor="Email" className="col-sm-1 col-form-label">Email </label> */}
                <input type="email"
                className="text_input"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e)=>{setEmail(e.target.getvalue)}}/>
                </div>
               
                {/* //  phonenumber input */}
                <div className="text_area">
                {/* <label htmlFor="phoneno" className="col-sm-1 col-form-label">Phone no </label> */}
                <input type="number"
                className="text_input"
                name="phoneno"
                placeholder="Phone Number"
                value={phone}
                onChange={(e)=>{setPhone(e.target.getvalue)}}/>
                </div>
                
                {/* Address input */}
                <div className="text_area">
                {/* <label htmlFor="address" className="col-sm-1 col-form-label" >Address </label> */}
                <input 
                type="text"
                className="text_input"
                name="Address"
                placeholder="Address"
                value={address}
                onChange={(e)=>{setAddress(e.target.getvalue)}}
                required/>
                </div>

                {/* library name input */}
                <div className="text_area">
                {/* <label htmlFor="library" className="col-sm-1 col-form-label" >Library Name </label> */}
                <input 
                type="text"
                className="text_input"
                name="library"
                placeholder="Enter library Name"
                value={library}
                onChange={(e)=>{setLibrary(e.target.getvalue)}}
                required/>
                </div>

                {/* // Password input */}
                <div className="text_area">
                {/* <label htmlFor="Password" className="col-sm-1 col-form-label">Passsword</label> */}
                <input type="text"   
                className="text_input"             
                name="passwd"
                placeholder="Password"
                value={passwd}
                onChange={(e)=>{setPasswd(e.target.getvalue)}}/>
                </div> 
                
                {/* // confirm Password input */}
                <div className="text_area">
                {/* <label htmlFor="Password" className="col-sm-1 col-form-label">Confirm Password</label> */}
                <input
                className="text_input"
                  type={type}
                  name="Cpassword"
                  placeholder="Confirm Password"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  autoComplete="current-password"/>
                <span class="flex justify-around items-center" onClick={showpwd}>
                  <Icon class="absolute mr-10" icon={icon} size={25}/>
                </span>
                </div>



                {/* //Register button */}
                <button 
                className="btn" 
                placeholder="Register" onClick={submit} >Register</button>

                {/* Login Page Link*/}
                <div className="link">
                <p>Already a Member?<Link to="/">SignIn</Link></p>
                </div>
            
                
        </form>
        <Footer/>
        </div>
      
       
    )
};


export default Registrationpage;