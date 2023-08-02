import React from 'react';

const ProjectTwo = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="font-weight-bold">Diffusion virtuelle de la messe</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <p className="text-center">
            J'ai travaillé sur la diffusion de la messe virtuelle. Le projet consistait à adapter une une mise en place qui respecte l'architecture et ses composantes. Il fallait mettre en place un système discret  qui se masse dans le décor. C'était un projet assez complexe puisque il fallait concilier  le flux internet, la capture des sons et le cadrage des caméras, le tout dans un concept sans fil.
            Il me fera plaisir de vous en faire part. N'hésitez pas à me contacter.
            Le lien ci-joint peut vous rediriger sur notre page YouTube.
          </p>
          <div className="text-center">
            <a href="https://youtube.com/@notredameottawa932" target="_blank" rel="noopener noreferrer">Lien vers la page YouTube</a>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Caractéristique 1: Reseau</li>
            <li>Caractéristique 2: circuit du son</li>
            <li>Caractéristique 3: Transmission d'image sans fil</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Technologies utilisées :</h3>
          <ul>
            <li>Technologie 1: NDI HX Camera</li>
            <li>Technologie 2: MimoLive 6</li>
            <li>Technologie 3: Youtube Studio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
