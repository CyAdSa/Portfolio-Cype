import React from 'react';
import LogoProjet from '../images/LogoProjet.jpg';

const ProjectOne = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="underline">Marché d'art virtuel</h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={LogoProjet} alt="Logo Projet" className="img-thumbnail rounded-circle" style={{ maxWidth: '150px', maxHeight: '150px' }} />
        </div>
        <div className="col-md-8">
          <p>
            J'ai travaillé sur un projet d'intégration dans lequel il fallait concevoir un projet d'application web pour permettre aux artistes
            d'avoir une plateforme qui leur permettrait de vendre leur création mais aussi de s'approvisionner.
            Ainsi l'application tourne autour de quelques caractéristiques clés.
          </p>
          <h3>Caractéristiques :</h3>
          <ul className="list-inline">
            <li className="list-inline-item">Caractéristique 1: La plateforme permet aux artistes d'acheter les matériaux nécessaires pour concevoir leur création.</li>
            <li className="list-inline-item">Caractéristique 2: La plateforme permet aux artistes d'exposer, d'interagir avec les clients et d'écouler leurs productions.</li>
            <li className="list-inline-item">Caractéristique 3: Grâce à la plateforme, l'artiste pouvait développer son carnet d'adresses et participer à des événements dédiés à la corporation des artistes.</li>
          </ul>
          <h3>Technologies utilisées :</h3>
          <ul className="list-inline">
            <li className="list-inline-item">Technologie 1: Microsoft SQL Server Management Studio</li>
            <li className="list-inline-item">Technologie 2: Visual Studio Code pour l'exploitation de REACT</li>
            <li className="list-inline-item">Technologie 3: Visual Paradigm pour la conception de diagramme</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;


