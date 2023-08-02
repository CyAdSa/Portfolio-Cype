import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectOne from './Composants/ProjectOne';
import ProjectTwo from './Composants/ProjectTwo';
import Contact from './Composants/Contact';
import Commentaire from './Composants/Commentaire';
import LeaveComment from './Composants/LeaveComment';
import Header from './Composants/Header';
import Footer from './Composants/Footer';
import Home from './Composants/Home';

const App = () => {
  const [comments, setComments] = useState([
    { id: 1, author: 'Sunjata Keita', content: 'Great portfolio!', rating: 5 },
    { id: 2, author: 'Kanka Musa', content: 'Amazing work!', rating: 4 },
    { id: 3, author: 'Ali Farka Toure', content: 'Impressive skills!', rating: 5 },
  ]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/commentaire"
            element={<Commentaire comments={comments} />}
          />
          <Route
            path="/LeaveComment"
            element={<LeaveComment onSubmit={handleCommentSubmit} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
