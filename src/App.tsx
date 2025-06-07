import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import SolutionsPage from './components/SolutionsPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Plans />
    </>
  );
}

function App() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
      Chatbot.init({
        chatflowid: "af0f5974-e04c-4f17-8187-1e939dbbc813",
        apiHost: "https://flowise.dailyai.studio",
      });
    `;
    document.body.appendChild(script);

    // Cleanup: remove script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/solutions" element={<SolutionsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;