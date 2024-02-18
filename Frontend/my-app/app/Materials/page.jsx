'use client'
import React, { useState, useEffect } from 'react';
import "../Materials/Materials.css";
import Navbar from "../Navbar/page";
const Materials = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    name: '',
    image: "",
    description: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/materials/get');
      const data = await response.json();
      setMaterials(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewMaterial({
      ...newMaterial,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMaterial = async () => {
    try {
      await fetch('http://localhost:3000/materials/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMaterial),
      });

      setNewMaterial({
        name: '',
        image: '',
        description: '',
      });
      fetchData();
    } catch (error) {
      console.error('Error adding material:', error);
    }
  };

  const handleDeleteMaterial = async (id) => {
    try {
      await fetch(`http://localhost:3000/materials/delete/${id}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting material:', error);
    }
  };
  const handleOpenAddModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  return (
    <div>
      <Navbar/>
      <h1>Materials</h1>
      <div className="materials-container">
        {materials.map((material, index) => (
          <div key={material.id} className="material-card">
            <h3>{material.name}</h3>
            <img src={material.image} alt={material.name} />
            <p>{material.description}</p>
            <button onClick={() => handleDeleteMaterial(material.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button  className='button-3'onClick={handleOpenAddModal}>Add Material</button>
      {isAddModalOpen && (
        <div className="overlay active">
          <div className="popup-container">
            <span className="close-btn" onClick={handleCloseAddModal}>&times;</span>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={newMaterial.name} onChange={handleInputChange} />
            </div>
            <div>
              <label>Image:</label>
              <input type="text" name="image" value={newMaterial.image} onChange={handleInputChange} />
            </div>
            <div>
              <label>Description:</label>
              <input type="text" name="description" value={newMaterial.description} onChange={handleInputChange} />
            </div>
            <button className='button-33' onClick={() => { handleAddMaterial(); handleCloseAddModal(); }}>Add Material</button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Materials;