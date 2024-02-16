'use client'
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
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from "../Navbar/page";
import AddIcon from '@mui/icons-material/Add';

// Mock map component
const MapComponent = ({ onClose, onSelectLocation }) => {
  // This component will be replaced with your actual map component
  return (
    <div>
      Map Component
      <button onClick={onClose}>Select Location</button>
      <button onClick={() => onSelectLocation('Selected location')}>close map </button>
  
    </div>
  );
};

const messagesData = JSON.parse(localStorage.getItem('messages')) || [];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const StyledInput = styled('input')({
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  marginBottom: '10px',
  transition: '0.3s',
  '&:focus': {
    border: '2px solid #007bff',
    boxShadow: 'none',
  },
  '&:not(:focus)': {
    boxShadow: 'none',
  },
});

const MessageCard = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
});

export default function ComplaintPage() {
  const [location, setLocation] = React.useState('');
  const [placeName, setPlaceName] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [messages, setMessages] = React.useState(messagesData);
  const [mapOpen, setMapOpen] = React.useState(false);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePlaceNameChange = (event) => {
    setPlaceName(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePostMessage = () => {
    if (inputValue.trim() !== '' && location.trim() !== '' && placeName.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        primary: placeName,
        secondary: location,
        message: inputValue,
        imageUrl: imageUrl,
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setInputValue('');
      setLocation('');
      setPlaceName('');
      setImageUrl('');
    }
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleMapOpen = () => {
    setMapOpen(true);
  };

  const handleMapClose = () => {
    window.open('https://maps.app.goo.gl/5JoVvpuJgZyR9yyF6', '_blank');
  };

  const handleSelectLocation = (location) => {
    setLocation(location); // Set the selected location
    setMapOpen(false);
  };

  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <Paper >
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Complaint List
        </Typography>
        <List>
          {messages.map(({ id, primary, secondary, message, imageUrl }) => (
            <MessageCard key={id}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src="/static/images/avatar/your-avatar.jpg" />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
              {imageUrl && <img src={imageUrl} alt="Complaint Image" />}
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteMessage(id)}
              >
                <DeleteIcon />
              </IconButton>
            </MessageCard>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <StyledFab color="secondary" aria-label="add" onClick={handlePostMessage}>
            <AddIcon />
          </StyledFab>
          <IconButton
            component="span"
            aria-label="open map"
            onClick={handleMapOpen}
          >
            <AddIcon />
          </IconButton>
          <StyledInput
            type="text"
            placeholder="Enter image URL (optional)"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </Toolbar>
        <StyledInput
          type="text"
          placeholder="Enter Place Name"
          value={placeName}
          onChange={handlePlaceNameChange}
        />
        <StyledInput
          type="text"
          placeholder="Enter Location Description"
          value={location}
          onChange={handleLocationChange}
        />
        <StyledInput
          type="text"
          placeholder="Type your complaint here..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </AppBar>
      {mapOpen && <MapComponent onClose={handleMapClose} onSelectLocation={handleSelectLocation} />}
    </React.Fragment>
  );
}

