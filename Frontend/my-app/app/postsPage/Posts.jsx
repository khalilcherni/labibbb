import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image1: null,
    image2: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts/get'); // Use relative URL
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl1 = formData.image1;
      let imageUrl2 = formData.image2;

      if (formData.image1 instanceof File) {
        const formData1 = new FormData();
        formData1.append('file', formData.image1);
        formData1.append('upload_preset', 'lzoc60oh'); // Replace with your Cloudinary upload preset
        const response1 = await axios.post('https://api.cloudinary.com/v1_1/db2yjlbsw/image/upload', formData1);

        imageUrl1 = response1.data.secure_url;
      }

      if (formData.image2 instanceof File) {
        const formData2 = new FormData();
        formData2.append('file', formData.image2);
        formData2.append('upload_preset', 'lzoc60oh'); // Replace with your Cloudinary upload preset
        const response2 = await axios.post('https://api.cloudinary.com/v1_1/db2yjlbsw/image/upload', formData2);

        imageUrl2 = response2.data.secure_url;
      }

      const postData = {
        title: formData.title,
        description: formData.description,
        img1: imageUrl1,
        img2: imageUrl2
      };

      const response = await axios.post('http://localhost:3000/posts/create', postData); // Use relative URL
      console.log('Post created successfully:', response.data);

      setFormData({
        title: '',
        description: '',
        image1: null,
        image2: null
      });
      setPosts(prevPosts => [...prevPosts, response.data]); // Add new post to the state
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  return (
    <div className="posts">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </div>
        <div>
          <label>Image 1:</label>
          <input type="file" name="image1" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <label>Image 2:</label>
          <input type="file" name="image2" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {posts.map((post, index) => (
        <div key={index} className="post">
          <div className="left-column">
            <img src={post.img1} alt="Image 1" className="image" />
          </div>
          <div className="center-column">
            <div className="content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
          <div className="right-column">
            <img src={post.img2} alt="Image 2" className="image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
