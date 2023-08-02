import React from 'react';
import { Link } from 'react-router-dom';
import Cydrew from '../images/Cydrew.jpg';
import Styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={Styles.home}>
      <div className={Styles['profile-picture']}>
        <img src={Cydrew} alt="Cydrew" />
      </div>
      <div className={Styles.introduction}>
        <h2>Bienvenue sur le portfolio de Cyprien !</h2>
        <p>
          Je suis un développeur passionné avec une expertise dans la manipulation des systèmes de gestion de base de données, les langages comme Java et C#. Je suis dédié à créer des expériences utilisateurs exceptionnelles et à développer des solutions logicielles innovantes.
        </p>
        <p>
          Au fil des années, j'ai travaillé sur divers projets, allant de petit projet d'application bureau comme la conception de système de caisse à la création de plateformes pour le livestream voire de d'application web pour à vocation commerciale. Mon objectif est de fournir des résultats de haute qualité tout en maintenant une attention constante aux détails et à l'efficacité.
        </p>
        <p>
          Explorez mon portfolio pour en savoir plus sur mes compétences, mes projets et comment je peux contribuer à vos initiatives technologiques.
        </p>
      </div>
      <nav className={Styles['nav-links']}>
        <ul>
          <li>
            <Link to="/project-one">Projet 1</Link>
          </li>
          <li>
            <Link to="/project-two">Projet 2</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
