# labibbb

  const handleEdit = (postId) => {
    setEditPostId(postId);
    setEditMode(true);
    const postToEdit = posts.find(post => post._id === postId);
    setFormData({ title: postToEdit.title, description: postToEdit.description, image1: null, image2: null });
  };

  const handleUpdate = async (postId) => {
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

      const response = await axios.put(`http://localhost:8080/posts/update/${postId}`, postData);
      console.log('Post updated successfully:', response.data);

      setFormData({ title: '', description: '', image1: null, image2: null });
      setEditMode(false);
      setEditPostId(null);

      const updatedPosts = posts.map(post => {
        if (post._id === postId) {
          return response.data;
        } else {
          return post;
        }
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };