'use client'
// Import necessary libraries
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { GoogleProvider } from '@/app/firebase/config';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

import './singup.css';

// Define SignUp component
const SignUp = () => {
  // Define state variables
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();

  // Function to handle sign up
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
      setLast('');
      setFirst('');
      setBirth('');
      router.push('/sign-in');
      alert("Sign up successful");
    } catch (e) {
      console.error(e);
      alert("Sign up failed. Please try again.");
    }
  };

  // Function to handle Google sign up
  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithGoogle(GoogleProvider);
      console.log({ res });
      sessionStorage.setItem('user', true);
      router.push('/Home');
    } catch (e) {
      console.error(e);
    }
  };

  // Toggle signup form visibility
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  // JSX
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="signup-container">
        <h1 className="khalil">Sign Up</h1>
        {/* Conditionally render signup form */}
        {showSignUp && (
          <>
            <input
              type="firstName"
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setFirst(e.target.value)}
              className="input-field"
            />
            <input
              type="LastName"
              placeholder="LastName"
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
              className="button-59" 
            >
              Sign Up
            </button>
          </>
        )}
        {/* Button to toggle signup form visibility */}
        <button onClick={toggleSignUp} className="button-59">
          {showSignUp ? "Hide Sign Up Form" : "Show Sign Up Form"}
        </button>
        {/* Google Sign Up */}
        <button onClick={handleGoogleSignUp} className="button-59">
          Sign Up with Google
        </button>
        {/* Redirect to sign-in page */}
        <button onClick={() => router.push('/sign-in')} className="button-59">
          Sign In
        </button>
      </div>
      <video id="background-video" autoPlay loop muted>
        <source src="/khlil.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SignUp;
