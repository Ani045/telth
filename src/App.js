import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NGOs from './pages/NGOs';
import Blog from './pages/Blog';
import BlogArticle from './components/BlogArticle';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:category/:slug" element={<BlogArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;