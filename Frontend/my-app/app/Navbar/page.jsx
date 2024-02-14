'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Button, Tooltip } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
import './Navbar.css'
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='kh' position="static">
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Link href="/" passHref>
            LOGO
          </Link>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button sx={{ my: 2, color: 'white' }}>
            <Link href="/aboutus" passHref>
            aboutus
            </Link>
          </Button>
          <Button sx={{ my: 2, color: 'white' }}>
            <Link href="/pricing" passHref>
              Pricing
            </Link>
          </Button>
          <Button sx={{ my: 2, color: 'white' }}>
            <Link href="/Profile" passHref>
              Blog
            </Link>
          </Button>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
