import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;