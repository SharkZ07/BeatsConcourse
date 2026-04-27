import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Registrations from './views/Registrations';
import QuizRegistration from './views/QuizRegistration';
import Presentations from './views/Presentations';
import Contact from './views/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/registrations" element={<Registrations />} />
          <Route path="/quiz" element={<QuizRegistration />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="min-h-screen">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
