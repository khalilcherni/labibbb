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
        <AdbIcon />
        <Typography
      
        >
          <Link href="/" passHref>
            LOGO
          </Link>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button>
            <Link href="/aboutus" passHref>
      <h4 className='az'>About Us</h4>
            </Link>
          </Button>
          <Button >
            <Link href="/Messages" passHref>
            <h4 className='az'>Message</h4>
            </Link>
          </Button>
          <Button >
            <Link href="/Profile" passHref>
            <h4>Abzf</h4>
            </Link>
          </Button>
          <Button >
            <Link href="/profile" passHref>
            <h4>Abfezf</h4>
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
