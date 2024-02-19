'use client'
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Navbar from "../Navbar/page.jsx"
import "./index.css"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const cardData = [ 
  {
    avatar: 'R',
    title: 'product recycol',
    subheader: 'September 14, 2018',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQk6ygbcjvz4i-Gz3vb1xePcmobIAURJosg&usqp=CAU',
    description:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentÃ³n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
      'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\'t open.)',
      'Set aside off of the heat to let rest for 10 minutes, and then serve.',
    ],
  },
  {
    avatar: 'R',
    title: 'product recycol',
    subheader: 'September 14, 2018',
    image: 'data:image/jpeg;base64,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',
    description:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentÃ³n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
      'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\'t open.)',
      'Set aside off of the heat to let rest for 10 minutes, and then serve.',
    ],
  },
  {
    avatar: 'R',
    title: 'product recycol',
    subheader: 'September 14, 2018',
    image: 'https://i.insider.com/5cb60144d2ce78546403fb1e?width=1136&format=jpeg',
    description:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentÃ³n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
      'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\'t open.)',
      'Set aside off of the heat to let rest for 10 minutes, and then serve.',
    ],
  }, 
]

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(Array(cardData.length).fill(false));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleFavoriteClick = (index) => {
    const updatedFavorites = [...favoriteClicked];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavoriteClicked(updatedFavorites);
  };


////instagram

const handleInstagramShare = () => {
  // Replace 'your-instagram-url' with the actual link you want to share

  const instagramShareLink = 'https://www.facebook.com';
  window.open(instagramShareLink, '_blank');
};

/////////


  return (
    <div className='qqq' style={{ display: 'flex', flexWrap: 'wrap'}}>
    <   Navbar/>
    <br />
    <br />
    <br />
    <br />
      {cardData.map((data, index) => (
        <Card className='qqq' key={index} sx={{ maxWidth: 345, margin: '8px' }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }}>{data.avatar}</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={data.title}
            subheader={data.subheader}
          />
          <CardMedia component="img" height="194" image={data.image} alt="product recycol" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleFavoriteClick(index)}
              style={{ color: favoriteClicked[index] ? 'red' : 'inherit' }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={handleInstagramShare}>
            <ShareIcon />
          </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
