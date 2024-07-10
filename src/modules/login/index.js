import React, { useState } from 'react';
 import { useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loader from '../../components/loader';
import { login } from '../../redux/slices/authSlice';
import Button from '../../components/button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
        setLoader(true) 
        // Perform login logic here (e.g., dispatch Redux action)
        setTimeout(()=>{
            setLoader(false)
            dispatch(login());
            navigate('/dashboard');
        },2000)
 
  };

  return (
    <div>
        {loader && <Loader/>}
      <h1>Login Page</h1>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Button name='Login' handleSubmit={handleSubmit}/>
      
  
    </div>
  );
};

export default LoginPage;
