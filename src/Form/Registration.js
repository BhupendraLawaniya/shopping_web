import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Registration.css';
const Registration =()=>{

  const[formdata, setformdata] =useState({
    username:'',
    email:'',
    password:'',
    
  });

  const handleChange = (event) => {
    setformdata({...formdata,[event.target.name]: event.target.value})
  };
  const handleSubmit = async (event) =>{
    event.preventDefault();

   try{
    const response = await axios.post('http://localhost:5000/Registration', formdata);
    console.log(response.data);
   }
   catch(error){
    console.error(error);
   }
  };

    return(
        <>
        <form onSubmit={handleSubmit}>
         <div className="register-container">
         <div className="register">
          <h2>Registration</h2>
            <input type='text' name="username" value={formdata.username} placeholder='Username' onChange={handleChange}></input>
            <input type='text' name="email" value={formdata.email} placeholder='Email' onChange={handleChange}></input>
            <input type='password' name="password" value={formdata.password}placeholder='Password' onChange={handleChange}></input>
            <input type='password' name="reEnterPassword" value={formdata.reEnterPassword} placeholder='Re-Enter Password' onChange={handleChange}></input>

         </div>
          <div className='button-container'>
            <button type="submit">Register</button>
            <button type="button">Login</button>

          </div>
        </div>
        </form>
        </>
    )
}
export default Registration;