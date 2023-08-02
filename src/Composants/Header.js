import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'; // Importez le fichier SCSS
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar expand="md" className="justify-content-between">
        <Navbar.Brand>
          <Link to="/">Accueil</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className={`ml-auto ${styles.navLinks}`}>
            <Link to="/project-one" className={`nav-link ${styles.navLink}`}>
              Projet 1
            </Link>
            <Link to="/project-two" className={`nav-link ${styles.navLink}`}>
              Projet 2
            </Link>
            <Link to="/commentaire" className={`nav-link ${styles.navLink}`}>
              Commentaire
            </Link>
            <Link to="/leaveComment" className={`nav-link ${styles.navLink}`}>
              Leave Comment
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;





