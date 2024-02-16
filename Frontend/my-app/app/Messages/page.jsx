'use client'
import React from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/config'; // Make sure to import auth from firebase config
import { useRouter } from 'next/router';

function ResponsiveAppBar() {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('user');
        router.push('/sign-up');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <AppBar className='kh'>
      <Toolbar>
        <Typography>
          <Link className='az' id="lll" href="/Home" passHref>
            Home
          </Link>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button>
            <Link className='az' id="lll" href="/aboutus" passHref>
              About
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/Messages" passHref>
              Feedback
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/Statistic" passHref>
              Statistic
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/Materials" passHref>
              Materials  
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/Complaint" passHref>
              Complaint  
            </Link>
          </Button>
          {/* Add other links here */}
        </Box>

        <Button onClick={handleLogout}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
