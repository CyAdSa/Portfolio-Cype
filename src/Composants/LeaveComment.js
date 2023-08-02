import React, { useState } from 'react';

const LeaveComment = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    rating: 5,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.author.trim() === '' || formData.content.trim() === '') {
      alert('Veuillez remplir tous les champs.');
    } else {
      onSubmit({ ...formData, id: Date.now() });
      setFormData({
        author: '',
        content: '',
        rating: 5,
      });
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Laisser un commentaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Auteur:</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Commentaire:</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="form-control"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Note:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="form-control"
            value={formData.rating}
            onChange={handleInputChange}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
};

export default LeaveComment;

