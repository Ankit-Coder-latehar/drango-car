import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesDetail from './pages/ServicesDetail';
import Franchise from './pages/Franchise';
import Stores from './pages/Stores';
import Products from './pages/Products';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Loader from './components/Loader';
import VehicleDetail from './pages/VehicleDetail';

function PageLoaderWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <PageLoaderWrapper>
        <div className="flex flex-col min-h-screen bg-[#0b0b0c] text-white">
          {/* Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/:serviceId" element={<ServicesDetail />} />
              <Route path="/vehicles/:vehicleId" element={<VehicleDetail />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/store" element={<Stores />} />
              <Route path="/products" element={<Products />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </PageLoaderWrapper>
    </Router>
  );
}

export default App;

