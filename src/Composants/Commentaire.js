import React from 'react';

const Commentaire = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <h3>{comment.author}</h3>
          <p>{comment.content}</p>
          <span>Rating: {comment.rating}/5</span>
        </div>
      ))}
      <h2>Merci de vos commentaires!</h2>
    </div>
  );
};

export default Commentaire;
