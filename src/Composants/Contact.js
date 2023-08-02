import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    if (prenom.trim() === '' || nom.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Envoyer le formulaire de contact (vous pouvez ajouter ici le code pour l'envoi du message)
    console.log('Prénom:', prenom);
    console.log('Nom:', nom);
    console.log('E-mail:', email);
    console.log('Téléphone:', telephone);
    console.log('Message:', message);

    // Réinitialisation des champs du formulaire
    setPrenom('');
    setNom('');
    setEmail('');
    setTelephone('');
    setMessage('');

    // Rediriger vers une autre page après l'envoi du formulaire (par exemple, la page d'accueil)
    navigate('/');
  };

  return (
    <div className="contact container">
      <h2 className="mb-4">Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            className="form-control"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail :</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Téléphone :</label>
          <input
            type="tel"
            id="telephone"
            className="form-control"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
