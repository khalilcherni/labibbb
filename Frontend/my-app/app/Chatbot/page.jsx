'use client'
import React, { useState } from 'react';
import OpenAi from 'openai';
import Navbar from '../Navbar/page';

const openai = new OpenAi({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,




const openai=new OpenAi({
    apiKey:process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

function Page() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    setIsLoading(true);
  
    try {
      const updatedChatHistory = [...chatHistory, { role: 'user', content: userInput }];
      setChatHistory(updatedChatHistory);
  
      const prompt = updatedChatHistory.map(message => `${message.role}: ${message.content}`).join('\n');
  
      const response = await openai.Completion.create({
        engine: 'text-davinci-003', // You can experiment with different engines
        prompt,
        max_tokens: 1000,
        n: 1,
        stop: null,
      });
  
      // Check if response.choices is defined and has at least one item
      if (response.choices && response.choices.length > 0) {
        const assistantResponse = response.choices[0].text;
        setChatHistory((prev) => [
          ...prev,
          { role: 'assistant', content: assistantResponse },
        ]);
      } else {
        console.error('No valid response received from the chatbot.');
      }
    } catch (error) {
      console.error('Error during chat completion:', error);
    } finally {
      setUserInput('');
      setIsLoading(false);
    }
  };
  
  

  return (
<div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
<Navbar />
 <div className='w-full max-w-md mg-white p-4 rounded-lg shadow-md'>
<div className='mb-4'>
  <div className='text-4xl font-bold text-blue-800 mb-2 '>
    chatbot Assistant
  </div>
  <p className=' text-gray-600 text-lg'>
    Welcome to our chatbot. Please feel free to ask any questions!
  </p>
</div>
<div className='mb-4' style={{height:"400px",overflowY:"auto"}}></div>
{chatHistory.map((message, index) => (
  <div key={index} className={`${message.role === 'user' ? 'text-right' : 'text-left'} mb-2`}>
    <div className={`rounded-full p-2 max-w-md mx-4 inline-block${message.role === 'user' ? ' bg-blue-300 text-blue-800' : ' bg-green-300 text-green-800'}`}>
      {message.role === 'user' ? 'you' : 'Assistant'}
    </div>
  );
}

export default Page;
