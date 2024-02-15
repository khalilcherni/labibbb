import React from 'react';
import './Posts.css';

const Posts = () => {
  const posts = [
    {
      placeName: 'Place Name 1',
      description: 'Description of the place 1 goes here.',
      image1: 'https://i.pinimg.com/236x/04/32/76/043276a9ed3dde85ab102a984eabed7f.jpg',
      image2: 'https://i.pinimg.com/474x/a5/b4/e6/a5b4e6c100397bec1be2226f5aa8b8f3.jpg',
    },
    {
      placeName: 'Place Name 2',
      description: 'Description of the place 2 goes here.',
      image1: 'https://i.pinimg.com/236x/04/32/76/043276a9ed3dde85ab102a984eabed7f.jpg',
      image2: 'https://i.pinimg.com/474x/a5/b4/e6/a5b4e6c100397bec1be2226f5aa8b8f3.jpg',
    },
  ];

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <div className="left-column">
            <img src={post.image1} alt="Image 1" className="image" />
          </div>
          <div className="center-column">
            <div className="content">
              <h2>{post.placeName}</h2>
              <p>{post.description}</p>
            </div>
          </div>
          <div className="right-column">
            <img src={post.image2} alt="Image 2" className="image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
