'use client'
import { useState } from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import {GoogleProvider } from '@/app/firebase/config'
// import { useSignInWithPhoneNumber } from 'react-firebase-hooks/auth';
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

import './singup.css'
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  // const [signInWithPhone] = useSignInWithPhoneNumber(auth);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      router.push('/sign-in');
      alert("Sign up successful");
    } catch (e) {
      console.error(e);
      alert("Sign up failed. Please try again.");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithGoogle(GoogleProvider);
      console.log({ res });
      sessionStorage.setItem('user', true);
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };
  // const handlePhoneSignUp = async () => {
  //   try {
  //     const confirmationResult = await signInWithPhone(phone);
  //     // Handle confirmation result, e.g., show UI for entering verification code
  //   } catch (error) {
  //     // Handle error, e.g., display error message to the user
  //     console.error("Error signing in with phone number:", error);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="signup-container">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="input-field"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="input-field"
        />
        <button 
          onClick={handleSignUp}
          className="signup-btn"
        >
          Sign Up
        </button>
        <button 
          onClick={handleGoogleSignUp}
          className="google-btn"
        >
          <img src="https://img.icons8.com/?size=80&id=6QtoKjRma1Cq&format=png" alt="" />
        </button>
      
        <button onClick={() => router.push('/sign-in')} className="signin-link">Sign In</button>
      </div>
    </div>
  );
};

export default SignUp;