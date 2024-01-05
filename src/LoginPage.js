import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from './Firebase';
import LoadingPage from './loading';
import "./LoginPage.css"
const LoginPage = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('User logged in successfully');
        navigate("/");
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    auth.useDeviceLanguage();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user.displayName);
        navigate("/"); 
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={loginUser}>Login</button>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
