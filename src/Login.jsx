import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { toast,ToastContainer } from 'react-toastify';
import axios from 'axios';
const Login = () => {
    const [value,setValue]=useState({
        Email:'',
        Password:''
    });
    const navigate=useNavigate();
    
    const{Email,Password}=value;

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.get(`http://localhost:3000/?Email=${Email}&Password=${Password}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.length>0)
            {
                toast.success('Logged in successfully!');
                setTimeout(()=>navigate('/purchase'),1500);
                setValue({
                    Email:'',
                    Password:''
                })
            }
            else
            {
                toast.error('Email or Password is wrong');
            }
        })
        .catch(err=>
            {console.log(err),
             toast.error('Something went wrong! Try again after some time')
            })
    }
    return (
        <div className='login-containerr'>
            <ToastContainer/>
            <h1 className='log'>Login</h1>
            <form onSubmit={handleSubmit} id='formm'>
                <label>Email:</label>
                <input type='email' placeholder='Enter email' value={value.Email} onChange={(e)=>setValue({...value,Email:e.target.value})} required/>
                <label>Password:</label>
                <input type='password' placeholder='Enter password' value={value.Password} onChange={(e)=>setValue({...value,Password:e.target.value})} required/>
                <button>Login</button>
            </form>
            <h3 className='log'>Don't registered</h3>
            <button onClick={()=>navigate('/register')} className='btnb'>Register</button>
        </div>
    );
};

export default Login;