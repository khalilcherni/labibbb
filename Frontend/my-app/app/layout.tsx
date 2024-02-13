// components/RootLayout.tsx
import React from 'react';
import { Inter } from 'next/font/google';
import { metadata } from '../next.config.mjs'; // Assuming metadata is exported from next.config.js
import Navbar from './Navbar/page';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  pathname: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, pathname }) => {
  // Define an array of paths where the navbar should not be shown
  const excludedPaths = ['/sign-up', '/sign-in'];

  // Check if the current path is in the excludedPaths array
  const showNavbar = !excludedPaths.includes(pathname);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
