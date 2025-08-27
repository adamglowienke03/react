import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<h1>404 - Nie znaleziono strony</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;