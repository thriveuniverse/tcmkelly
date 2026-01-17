import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Sports } from './pages/Sports';
import { CVPrint } from './pages/CVPrint';

const Gallery = () => (
  <div className="container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
    <h1>Galerie / Gallery</h1>
    <p style={{ color: '#aaa', marginTop: '1rem' }}>Photos coming soon...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cv" element={<CVPrint />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
