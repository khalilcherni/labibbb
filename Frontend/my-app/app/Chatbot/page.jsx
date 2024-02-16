'use client'
import React,{useState} from 'react'
import OpenAi from 'openai';

import Navbar from '../Navbar/page';



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

      const chatCompletion = await openai.chat.completion.create({
        messages: [...updatedChatHistory, { role: 'assistant', content: userInput }],
        model: 'gpt-3.5-turbo',
      });

      setChatHistory((prev) => [
        ...prev,
        { role: 'assistant', content: chatCompletion.choices[0].message.content },
      ]);
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
    <div className={`max-w-md mx-4 my-2 inline-block${message.role === 'user' ? ' bg-blue-100 text-blue-800' : ' bg-green-100 text-green-800'} p-2 rounded-md`}>
      {message.content}
    </div>
  </div>
))}
 </div>
 <div className='flex'>
 <input
 type="text"
 placeholder='Ask your question'
 value={userInput}
 onChange={(e)=>setUserInput(e.target.value)}
 className='flex-1 p-2 rounded-l-lg'
 />
 {isLoading ? (
  <div className=' bg-blue-500 text-white p-2 rounded-r-lg animate-pulse'>
    Loading...

  </div>
 ):(
  <button
  onClick={handleUserInput}
  className='bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600'>
   ask 
  </button>
 )}
 

 </div>
  </div>
  )
}
export default Page;


