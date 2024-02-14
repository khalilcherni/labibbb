'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from "../Navbar/page";

const messagesData = JSON.parse(localStorage.getItem('messages')) || [
  {
    id: 1,
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighborhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  const [inputValue, setInputValue] = React.useState('');
  const [messages, setMessages] = React.useState(messagesData);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePostMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        primary: inputValue,
        secondary: 'New message', // You can customize this if needed
        person: '/static/images/avatar/your-avatar.jpg', // Replace with the actual path
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setInputValue('');
    }
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  return (
    <React.Fragment>
      <Navbar/>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Message List
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteMessage(id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add" onClick={handlePostMessage}>
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
        {/** Input field for adding new messages */}
        <Box sx={{ p: 2 }}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handlePostMessage}>Post</button>
        </Box>
      </AppBar>
    </React.Fragment>
  );
}
