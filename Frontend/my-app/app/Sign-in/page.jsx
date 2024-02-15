'use client';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import {GoogleProvider } from '@/app/firebase/config'
import Profile from "../Profile/page"
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import "./Signin.css"
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    console.log('Sign-in button clicked'); // Debugging: Log to check if the button click event is triggered
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem('user', true);
      setEmail('');
      setPassword('');
      router.push('/Home');
      alert("Sign in successful");
      
    } catch (e) {
      console.error(e);
      // If sign-in fails, try to sign in using stored credentials from local storage
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');
      if (storedEmail && storedPassword) {
        try {
          const res = await signInWithEmailAndPassword(storedEmail, storedPassword);
          console.log({ res });
          sessionStorage.setItem('user', true);
          setEmail('');
          setPassword('');
          router.push('/Home');
          alert("Sign in successful using stored credentials");
        } catch (error) {
          console.error(error);
          alert("Sign in failed. Please try again.");
        }
      } else {
        alert("Sign in failed. Please try again.");
      }
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
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">


      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign In
        </button>
        <button 
          onClick={handleGoogleSignUp}
          className="google-btn"
        >
          <img src="https://img.icons8.com/?size=80&id=6QtoKjRma1Cq&format=png" alt="" />
        </button>
      </div>
      <video id="background-video" autoPlay loop muted>
        <source src="/khlil.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SignIn;
