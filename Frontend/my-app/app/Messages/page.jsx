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
import Rating from '@mui/material/Rating';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from "../Navbar/page";
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "./Message.css";

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
  },
});

const MessageCard = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
});

const RatingContainer = styled(Box)({
  marginLeft: 'auto',
});

export default function BottomAppBar() {
  const [inputValue, setInputValue] = React.useState('');
  const [ratingValue, setRatingValue] = React.useState(0);
  const [imageUrl, setImageUrl] = React.useState('');
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
        imageUrl: imageUrl,
        rating: ratingValue // Assigning the selected rating
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setInputValue('');
      setRatingValue(0); // Resetting the rating after posting the message
      setImageUrl(''); // Resetting the image URL after posting the message
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

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImageUrl(reader.result);
  //   };
  // };

  return (
    <React.Fragment>
      <Navbar/>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Message List
        </Typography>
        <hr />
        <hr />
        <List >
          {messages.map(({ id, primary, secondary, person, rating, imageUrl }) => (
            <MessageCard  key={id}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
              {imageUrl && <img src={imageUrl} alt="Message Image" />} {/* Display image if URL provided */}
              <RatingContainer>
                <Rating value={rating} readOnly />
              </RatingContainer>
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
      <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <StyledFab color="secondary" aria-label="add" onClick={handlePostMessage}>
            <AddIcon />
          </StyledFab>
          <Rating
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
          {/* <input
            accept="image/*"
            style={{ display: 'none' }}
            id="contained-button-file"
            type="file"
            onChange={handleImageUpload}
          /> */}
          {/* <label htmlFor="contained-button-file">
            <IconButton component="span" aria-label="upload image">
              <AddPhotoAlternateIcon />
            </IconButton>
          </label> */}
          <StyledInput
            type="text"
            placeholder="Enter image URL (optional)"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </Toolbar>
        {/** Input field for adding new messages */}
        <StyledInput
          type="text"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </AppBar>
    </React.Fragment>
  );
}

