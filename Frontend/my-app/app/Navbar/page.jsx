'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Button, Tooltip } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
import './Navbar.css'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
 


  return (
    <AppBar className='kh' >
      <Toolbar>
      
        <Typography
      
        >
          <Link className='az' href="/" passHref>
    Home
          </Link>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button>
            <Link className='az' href="/aboutus" passHref>
     About
            </Link>
          </Button>
          <Button >
            <Link className='az'  href="/Messages" passHref>
        Message
            </Link>
          </Button>
          <Button >
            <Link className='az'  href="/Profile" passHref>
          Abzf
            </Link>
          </Button>
          <Button >
            <Link className='az'  href="/profile" passHref>
           Abfezf
            </Link>
          </Button>
        </Box>

        <Box >
          <Tooltip title="Open settings">
            <IconButton >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
           
         
          >
            {settings.map((setting) => (
              <MenuItem key={setting} >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
