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
  const [birth, setBirth] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('')
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  // const [signInWithPhone] = useSignInWithPhoneNumber(auth);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      // Password validation
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password)) {
        alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
        return;
      }
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      setLast('')
      setFirst('')
      setBirth('')
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
          type="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirst(e.target.value)}
          className="input-field"
        />
         <input
          type="LastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLast(e.target.value)}
          className="input-field"
        />
         <input
          type="Birth"
          placeholder="Birth"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          className="input-field"
        />
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
          className="button-89 " 
        >
          Sign Up
        </button>
        <button 
          onClick={handleGoogleSignUp}
  
        >
          <img className='ll' src="https://img.icons8.com/?size=80&id=6QtoKjRma1Cq&format=png" alt="" />
        </button>
      
        <button onClick={() => router.push('/sign-in')} className="button-89">Sign In</button>
      </div>
    </div>
  );
};

export default SignUp;