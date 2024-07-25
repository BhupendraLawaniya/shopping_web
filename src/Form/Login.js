import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login =()=>{
    const navigate = useNavigate();

    const handlesignUp=()=>{
        navigate('/!!Registration');
    }

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post('http://localhost:5000/Login',{email,password})
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <>
        <div className="login-container">
        <div className="login">
            <h2>Login</h2>
            <input type="text" onChange={(e=>{setEmail(e.target.value)})} placeholder="Enter email"></input>
            <input type="password"  onChange={(e=>{setPassword(e.target.value)})} placeholder="Enter password"></input>
            <input className="submit"
            type='submit'onClick={submit}/>
        </div>
        
        <div className="login-container">
        {/* <button type="button">Login</button> */}
        {/* <br/> */}
        <p>OR</p>
        {/* <br/> */}
        <button type='button'onClick={handlesignUp}>SignUp</button>
      </div>
      </div>
        </>
    )
}
export default Login;