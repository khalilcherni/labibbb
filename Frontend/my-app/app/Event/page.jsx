
'use client'
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/page";
import "./Event.css"
const EventForm = () => {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []); 

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:3000/events/get');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "recyclage");

    try {
      // Upload image to Cloudinary
      const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/dhy6nhgot/upload', {
        method: 'POST',
        body: formData,
      });

      if (!cloudinaryResponse.ok) {
        throw new Error("Failed to upload image to Cloudinary");
      }

      const uploadData = await cloudinaryResponse.json();
      console.log("Image uploaded successfully:", uploadData);

      // Send image URL to your server
      const serverResponse = await fetch('http://localhost:3000/events/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_url: uploadData.secure_url }),
      });

      if (!serverResponse.ok) {
        throw new Error("Failed to save image URL on the server");
      }

      fetchImages(); 
    } catch (error) {
      console.error("Error during image upload:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Navbar/>
      <input
        type="file"
        onChange={handleFileChange}
        className='btn m-3'
      />
      <br />
      <button onClick={uploadImage} className='btn btn-primary m-3'>Upload!</button>
      <div className='container-img'>
        {images.map((image, index) => (
          <img className='imgg' key={index} src={image.image_url} alt={`Uploaded ${index}`} />
        ))}
      </div>
     
    </div>
  );
};

export default EventForm;
