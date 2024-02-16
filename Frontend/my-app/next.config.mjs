// /** @type {import('next').NextConfig} */
// require('dotenv').config();

// // next.config.js

// const nextConfig = {};
// // next.config.js

// export const metadata = {
//     title: "Your Next.js App",
//     description: "Description of your Next.js app",
//   };
  
// export default nextConfig;



import 'dotenv/config';

const nextConfig = {};

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_TITLE || "Your Next.js App",
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Description of your Next.js app",
};

export default nextConfig;