import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact/Contact';
import ProjectGallery from './components/pages/ProjectGallery';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="React-Portfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/React-Portfolio/" element={<Home />} />
          <Route path="/React-Portfolio/project" element={<Project />} />
          <Route path="/React-Portfolio/projectgallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/React-Portfolio/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

