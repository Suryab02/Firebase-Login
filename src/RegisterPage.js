import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import LoadingPage from './loading';
const RegisterPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User registered successfully');
        navigate("/");
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  if(isLoading){
    return <LoadingPage />;
  }

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default RegisterPage;
