import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import HomePage from "./components/portfolio/Homepage";
import CustomCursor from "./components/portfolio/CustomCursor";
import ScrollProgress from "./components/portfolio/ScrollProgress";
import FloatingParticles from "./components/portfolio/FloatingParticles";

function App() {
  useEffect(() => {
    // Prevent scrolling with arrow keys
    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="scanlines" />
      <FloatingParticles />
      <CustomCursor />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
