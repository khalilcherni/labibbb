import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css';
import Navbar from "../Navbar/page.jsx"

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image1: null,
    image2: null
  });
  const [editMode, setEditMode] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [updatePostId, setUpdatePostId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/posts/get');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

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

      const response = await axios.post('http://localhost:8080/posts/create', postData);
      console.log('Post created successfully:', response.data);

      setFormData({ title: '', description: '', image1: null, image2: null });
      setShowCreateForm(false); // Hide the create post form after submission
      fetchData(); // Refresh the post list
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8080/posts/delete/${postId}`);
      setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEdit = (postId) => {
    const postToEdit = posts.find(post => post._id === postId);
    if (postToEdit) {
      setFormData({
        title: postToEdit.title,
        description: postToEdit.description,
        image1: null, // You may or may not want to reset the image fields when editing
        image2: null
      });
      setEditMode(true);
      setEditPostId(postId);
      setUpdatePostId(postId); // Store the postId value
    }
  };
  

  const handleUpdate = async (postId) => {
    try {
      let imageUrl1 = formData.image1;
      let imageUrl2 = formData.image2;
  
      // Upload image1 to Cloudinary if it's a file
      if (formData.image1 instanceof File) {
        const formData1 = new FormData();
        formData1.append('file', formData.image1);
        formData1.append('upload_preset', 'lzoc60oh'); // Replace with your Cloudinary upload preset
        const response1 = await axios.post('https://api.cloudinary.com/v1_1/db2yjlbsw/image/upload', formData1);
  
        imageUrl1 = response1.data.secure_url;
      }
  
      // Upload image2 to Cloudinary if it's a file
      if (formData.image2 instanceof File) {
        const formData2 = new FormData();
        formData2.append('file', formData.image2);
        formData2.append('upload_preset', 'lzoc60oh'); // Replace with your Cloudinary upload preset
        const response2 = await axios.post('https://api.cloudinary.com/v1_1/db2yjlbsw/image/upload', formData2);
  
        imageUrl2 = response2.data.secure_url;
      }
  
      const updatedData = {
        title: formData.title,
        description: formData.description,
        img1: imageUrl1,
        img2: imageUrl2
      };
  
      // Update the post in the database with the secure image URLs
      const response = await axios.put(`http://localhost:8080/posts/update/${postId}`, updatedData);
      console.log('Post updated successfully:', response.data);
  
      // Reset form fields and states
      setFormData({ title: '', description: '', image1: null, image2: null });
      setEditMode(false);
      setEditPostId(null);
      setUpdatePostId(null); // Reset updatePostId
      fetchData(); // Refresh the post list
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
  

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };

  return (
    <div>
      <Navbar/>
    <div>

      
      <div className="posts">
        <button onClick={toggleCreateForm}>Create Post</button>
        {showCreateForm && (
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" />
            <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />
            <input type="file" name="image1" onChange={handleImageChange} />
            <input type="file" name="image2" onChange={handleImageChange} />
            <button type="submit">Submit</button>
          </form>
        )}
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="left-column">
              <img src={post.img1} alt="Image 1" className="image" />
            </div>
            <div className="center-column">
              {editMode && editPostId === post._id ? (
                <form onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission behavior
                  handleUpdate(post._id); // Pass the updatePostId value
                }}>
                  <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                  <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
                  <input type="file" name="image1" onChange={handleImageChange} />
                  <input type="file" name="image2" onChange={handleImageChange} />
                  <button type="submit">Update</button>
                </form>
              ) : (
                <div className="content">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                    <button onClick={() => handleEdit(post._id)}>Edit</button>
                  </div>
                </div>
              )}
            </div>
            <div className="right-column">
              <img src={post.img2} alt="Image 2" className="image" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Posts;
