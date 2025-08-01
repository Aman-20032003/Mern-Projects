import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    userName: '',
    password: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8001/user/register', formData); // Change URL if different
      setResponseMessage(res.data.message);
    } catch (err) {
      if (err.response) {
        setResponseMessage(err.response.data.message);
      } else {
        setResponseMessage('Something went wrong');
      }
    }
  };

  return (
    <div className='register-form'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='fields'>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
          
        />
        </div>
               <div className='fields'>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
            </div>
  
   
              <div className='fields'>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        </div>
        <button type="submit">Register</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default RegisterForm;
