'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Button, Tooltip } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
 import './Navbar.css'


function ResponsiveAppBar() {
 


  return (
    <AppBar className='kh' >
      <Toolbar>
      
        <Typography
      
        >
          <Link className='az' id="lll" href="/Home" passHref>
    Home
          </Link>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
        
          <Button >
            <Link className='az' id="lll" href="/Statistic" passHref>
         statistic
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/Materials" passHref>
          materiel  
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/Event" passHref>
          Event 
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/Complaint" passHref>
            Complaint  
            </Link>
          </Button>
          
          <Button >
            <Link className='az' id="lll" href="/postsPage" passHref>
        Posts
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/aaa" passHref>
        recycling products
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/bb" passHref>
        recycling products
            </Link>
          </Button>
          <Button >
            
            <Link className='az' id="lll" href="/Messages" passHref>
        Feedbacks
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/aboutus" passHref>
        About 
            </Link>
          </Button>
          <Button >
            <Link className='az' id="lll" href="/sign-up" passHref>
            Log out  
            </Link>
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
