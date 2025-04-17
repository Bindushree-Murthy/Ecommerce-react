import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

const Register = () => {

  const navigate=useNavigate();
  const [value,setValue]=useState({
    Name:'',
    Email:'',
    Date:'',
    Password:'',
    Cpassword:''
  })

  const handleSubmit=(event)=>{
    event.preventDefault();

    const {Password,Cpassword}=value;

    if(Password!==Cpassword)
      {
        toast.warning('password is not matching');
        return;
      }

    axios.post('http://localhost:3000/data',value)
    .then(res=>{console.log(res.data),
                navigate('/login')
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='login-container'>
      <ToastContainer/>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className='body'>
        <label>Name:</label>
        <input type="text" onChange={(e)=>setValue({...value,Name:e.target.value})} placeholder='Enter your name' required/>
        <label>Email:</label>
        <input type="email" onChange={(e)=>setValue({...value,Email:e.target.value})} placeholder='Enter your Email' required/>
        <label>Date of Birth:</label>
        <input type="date" onChange={(e)=>setValue({...value,Date:e.target.value})} placeholder='Enter your dob' required />
        <label>Password:</label>
        <input type="password" onChange={(e)=>setValue({...value,Password:e.target.value})} placeholder='Enter your password' required />
        <label>Confirm Password:</label>
        <input type="password" onChange={(e)=>setValue({...value,Cpassword:e.target.value})}  placeholder='Enter your password' required/>
        <button className='bbt'>Register</button>
        <h3 id='h33'>Already registered Login</h3>
        <button onClick={()=>navigate('/login')} id='loginn' className='bbt'>Login</button>
      </form>
    </div>
  );
};

export default Register;