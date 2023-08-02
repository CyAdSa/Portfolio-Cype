import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['social-icons']}>
          <div className={styles.title}>Mes réseaux sociaux</div>
          <div>
            <a href="https://github.com/CyAdSa?tab=repositories" target="_blank" rel="noopener noreferrer">
              <GithubOutlined />
            </a>
            <a href="https://www.linkedin.com/in/cyprien-andrew-sadio-b83a8627b/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined />
            </a>
          </div>
        </div>
        <div className={styles.navigation}>
          <Link to="/">Accueil</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>© Cyprien Andrew Sadio 2023. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;



